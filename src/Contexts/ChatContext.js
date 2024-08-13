import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [selectedChatDetails, setSelectedChatDetails] = useState({});
  const [chatList, setChatList] = useState([]);
  const [chatMessagesMap, setChatMessagesMap] = useState({});

  function moveToChat(selectedChatDetails) {
    setSelectedChatDetails(selectedChatDetails);
  }

  function addChatToList(chat) {
    setChatList([...chatList, chat]);
  }

  function addMessageToChat(chatId, message) {
    setChatMessagesMap((currChatMessagesMap) => {
      const updatedChatMessagesMap = { ...currChatMessagesMap };
      if (!updatedChatMessagesMap?.[chatId]?.messages) {
        updatedChatMessagesMap[chatId] = {
          ...updatedChatMessagesMap[chatId],
          isFetched: false,
          messages: [message],
        };
      }
      updatedChatMessagesMap[chatId].messages.push(message);
      return updatedChatMessagesMap;
    });
  }

  function setChatMessages(chatId, messages) {
    const updatedChatMessagesMap = { ...chatMessagesMap };

    updatedChatMessagesMap[chatId] = {
      isFetched: true,
      messages,
    };
    setChatMessagesMap(updatedChatMessagesMap);
  }

  const contextItems = {
    moveToChat,
    selectedChatDetails,
    chatList,
    addChatToList,
    setChatList,
    addMessageToChat,
    setChatMessages,
    chatMessagesMap,
  };
  return <ChatContext.Provider value={contextItems}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  return useContext(ChatContext);
}
