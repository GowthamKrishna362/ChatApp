import React, { createContext, useState, useContext, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import { getUsername } from 'utils/globalUtils.js';
import { STOMP_ENDPOINTS } from 'Constants/apiUrlConstants.js';
import {
  addChatToList,
  addMessageToChat,
  markChatDelivered,
  updateLastOpened,
} from 'utils/storeHelpers/cacheUpdateUtils.js';
import { useDispatch } from 'react-redux';
import { SOCKET_MESSAGE_TYPES } from 'Constants/globalConstants.js';

const StompContext = createContext();

export function StompProvider({ children }) {
  const dispatch = useDispatch();
  const [stompClient, setStompClient] = useState();
  const subscriptionListRef = useRef([]);

  function onMessageCallback(conversationId, message) {
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
    subscriptionListRef.current.forEach((conversationId) => {
      client.subscribe(STOMP_ENDPOINTS.USER_TOPIC_ENDPOINT(getUsername()), (message) =>
        onMessageCallback(conversationId, message),
      );
      client.subscribe(STOMP_ENDPOINTS.TOPIC_ENDPOINT(conversationId), (message) =>
        onMessageCallback(conversationId, message),
      );
    });
  }

  function initializeStompClient() {
    if (!stompClient) {
      const client = new Client({
        brokerURL: STOMP_ENDPOINTS.STOMP_BASE,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {
          enableExistingSubscriptions(client);
        },
      });
      client.activate();
      setStompClient(client);
    }
  }

  function updateSubscriptionList(newSubscriptionList) {
    subscriptionListRef.current = newSubscriptionList;
  }

  function addChatToSubscription(conversationId) {
    subscriptionListRef.current = [...subscriptionListRef.current, conversationId];
    stompClient.subscribe(STOMP_ENDPOINTS.TOPIC_ENDPOINT(conversationId), (message) =>
      onMessageCallback(conversationId, message),
    );
  }

  const contextItems = {
    addChatToSubscription,
    updateSubscriptionList,
    initializeStompClient,
    stompClient,
  };
  return <StompContext.Provider value={contextItems}>{children}</StompContext.Provider>;
}

export const useStompContext = () => useContext(StompContext);
