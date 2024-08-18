import { createContext, useContext, useState } from "react";
import React from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [selectedChatId, setSelectedChatId] = useState();
  const [chatDetailsMap, setChatDetailsMap] = useState({});
  const [chatMessagesMap, setChatMessagesMap] = useState({});

  function initializeChats(chats) {
    const initChatDetailsMap = {};
    chats.forEach((chat) => {
      initChatDetailsMap[chat.id] = chat;
    });
    setChatDetailsMap(initChatDetailsMap);
  }

  function getChatList() {
    return Object.values(chatDetailsMap);
  }

  function moveToChat(id) {
    setSelectedChatId(id);
  }

  function selectCurrentChatId() {
    return selectedChatId;
  }

  function addChatToList(chat) {
    setChatDetailsMap({ ...chatDetailsMap, [chat.id]: chat });
  }

  function addMessageToChat(chatId, message) {
    setChatMessagesMap((currChatDetailsMap) => {
      const updatedChatDetailsMap = { ...currChatDetailsMap };
      if (!updatedChatDetailsMap?.[chatId]?.messages) {
        updatedChatDetailsMap[chatId] = {
          ...updatedChatDetailsMap[chatId],
          isFetched: false,
          messages: [message],
        };
      }
      updatedChatDetailsMap[chatId].messages.push(message);
      return updatedChatDetailsMap;
    });
  }

  function setChatMessages(chatId, messages) {    
    const updatedChatMessagesMap = { ...chatMessagesMap };
    updatedChatMessagesMap[chatId] = {
      isFetched: true,
      messages: messages,
    };
    setChatMessagesMap(updatedChatMessagesMap);
  }
  
  function isChatFetched(chatId) {
    return chatMessagesMap?.[chatId]?.isFetched
  }

  function getCurrentChatMessages(chatId) {
    return chatMessagesMap?.[chatId]?.messages || [];
  }

  function getCurrentChatDetails() {
    return chatDetailsMap[selectedChatId];
  }
  

  const contextItems = {
    initializeChats,
    moveToChat,
    getChatList,
    isChatFetched,
    selectCurrentChatId,
    getCurrentChatMessages,
    getCurrentChatDetails,
    addChatToList,
    addMessageToChat,
    setChatMessages,
  };
  return <ChatContext.Provider value={contextItems}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  return useContext(ChatContext);
}
