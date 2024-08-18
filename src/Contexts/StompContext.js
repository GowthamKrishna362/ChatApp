import React, { createContext, useState, useContext, useRef } from "react";
import { Client } from "@stomp/stompjs";
import { getUsername } from "utils/globalUtils.js";
import { TOPIC_ENDPOINT } from "Constants/apiUrlConstants.js";
import { addMessageToChat, markChatDelivered, updateLastOpened } from "utils/storeHelpers/cacheUpdateUtils.js";
import { useDispatch } from "react-redux";

const StompContext = createContext();

export function StompProvider({ children }) {
  const dispatch = useDispatch();
  const [stompClient, setStompClient] = useState();
  const subscriptionListRef = useRef([]);

  function onMessageCallback(conversationId, message) {
    const messageBody = JSON.parse(message.body);
    if (messageBody.socketMessageType === "CHAT_MESSAGE") {
      if (messageBody.sender !== getUsername()) dispatch(addMessageToChat(conversationId, messageBody));
      else dispatch(markChatDelivered(conversationId, messageBody));
    } else {
      console.log("here");
      
      dispatch(updateLastOpened(conversationId, messageBody));
      console.log(messageBody);
    }
  }

  function enableExistingSubscriptions(client) {
    subscriptionListRef.current.forEach((conversationId) => {
      client.subscribe(TOPIC_ENDPOINT(conversationId), (message) => onMessageCallback(conversationId, message));
    });
  }

  function initializeStompClient() {
    if (!stompClient) {
      const client = new Client({
        brokerURL: "ws://localhost:8080/stomp",
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
    stompClient.subscribe(TOPIC_ENDPOINT(conversationId), (message) => onMessageCallback(conversationId, message));
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
