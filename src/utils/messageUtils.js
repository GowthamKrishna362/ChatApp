import { SOCKET_MESSAGE_TYPES } from "Constants/globalConstants.js";
import { getUsername } from "./globalUtils.js";
import { v4 as uuidv4 } from "uuid";

export function getMessageObj(messageContent, conversationId) {
  return {
    socketMessageType : SOCKET_MESSAGE_TYPES.CHAT_MESSAGE,
    tempId: uuidv4(),
    sender: getUsername(),
    conversationId,
    messageContent,
    timeStamp: new Date().toISOString(),
  };
}


export function getConversationOpenEvent(conversationId) {
  return {
    socketMessageType : SOCKET_MESSAGE_TYPES.CONVERSATION_OPEN,
    username: getUsername(),
    conversationId,
    timeStamp: new Date().toISOString(),
  };
}
