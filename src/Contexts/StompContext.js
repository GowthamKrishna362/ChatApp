import { Client } from "@stomp/stompjs";
import React, { createContext, useState, useContext, useRef } from "react";
import { useDispatch } from "react-redux";

import { STOMP_ENDPOINTS } from "Constants/apiUrlConstants.js";
import { SOCKET_MESSAGE_TYPES } from "Constants/globalConstants.js";
import { getAuthorizationHeader, getUsername } from "utils/globalUtils.js";
import {
  addChatToList,
  addMessageToChat,
  markChatDelivered,
  updateLastOpened,
} from "utils/storeHelpers/cacheUpdateUtils.js";

const StompContext = createContext();

export function StompProvider({ children }) {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState();
  const subscriptionListRef = useRef([]);

  function onConversationMessagesCallback(conversationId, message) {
    const messageBody = JSON.parse(message.body);
    switch (messageBody.socketMessageType) {
      case SOCKET_MESSAGE_TYPES.CHAT_MESSAGE:
        if (messageBody.sender !== getUsername()) {
          dispatch(addMessageToChat(conversationId, messageBody));
        } else {
          dispatch(markChatDelivered(conversationId, messageBody));
        }
        break;

      case SOCKET_MESSAGE_TYPES.CONVERSATION_OPEN:
        dispatch(updateLastOpened(conversationId, messageBody));
        break;

      case SOCKET_MESSAGE_TYPES.CONVERSATION_CREATED:
        dispatch(addChatToList(messageBody.conversationProfile));
        break;

      default:
        break;
    }
  }

  function enableExistingSubscriptions(client) {
    subscriptionListRef.current.forEach((subscription) => {
      if (subscription.type === "CONVERSATION_MESSAGES") {
        client.subscribe(STOMP_ENDPOINTS.TOPIC_ENDPOINT(subscription.id), (message) =>
          onConversationMessagesCallback(subscription.id, message)
        );
      }
      if (subscription.type === "SIGNALLING") {
        client.subscribe(STOMP_ENDPOINTS.USER_TOPIC_ENDPOINT(getUsername()), (message) =>
          subscription.callback(message)
        );
      }
    });
  }

  function initializeStompClient() {
    if (!stompClient) {
      const client = new Client({
        brokerURL: STOMP_ENDPOINTS.STOMP_BASE,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        connectHeaders: {
          Authorization: getAuthorizationHeader(),
        },
        onConnect: () => {
          enableExistingSubscriptions(client);
          setIsConnected(true);
        },
        onDisconnect: () => {
          setIsConnected(false);
        },
      });
      client.activate();
      setStompClient(client);
    }
  }

  function addChatToSubscription(conversationId) {
    subscriptionListRef.current = [
      ...subscriptionListRef.current,
      { type: "CONVERSATION_MESSAGES", id: conversationId },
    ];
    if (isConnected) {
      stompClient.subscribe(STOMP_ENDPOINTS.TOPIC_ENDPOINT(conversationId), (message) =>
        onConversationMessagesCallback(conversationId, message)
      );
    }
  }

  function subscribeForVideoSignalling(callback) {
    subscriptionListRef.current = [...subscriptionListRef.current, { type: "SIGNALLING", callback }];
    if (isConnected) {
      stompClient.subscribe(STOMP_ENDPOINTS.TOPIC_ENDPOINT(getUsername()), (message) => callback(message));
    }
  }

  const contextItems = {
    addChatToSubscription,
    initializeStompClient,
    subscribeForVideoSignalling,
    stompClient,
  };
  return <StompContext.Provider value={contextItems}>{children}</StompContext.Provider>;
}

export const useStompContext = () => useContext(StompContext);
