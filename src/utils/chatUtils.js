import { CHAT_TYPES } from 'Constants/globalConstants.js';
import { getUsername } from 'utils/globalUtils.js';

export function getChatDetailsMapFromApi(chats) {
  const initChatDetailsMap = {};
  chats.forEach((chat) => {
    initChatDetailsMap[chat.id] = chat;
  });
  return initChatDetailsMap;
}

export function getChatName(conversationName, conversationType, members) {
  let chatName = conversationName;
  if (conversationType === CHAT_TYPES.PRIVATE) {
    chatName = members.find((member) => member.username != getUsername()).username;
  }
  return chatName;
}

export function getCurrentChatDetails(chatDetailsMap, chatId) {
  if (!chatDetailsMap || !chatId) return null;
  return chatDetailsMap[chatId];
}
