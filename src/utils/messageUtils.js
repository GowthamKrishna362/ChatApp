import { getUsername } from "./globalUtils.js";
import { v4 as uuidv4 } from "uuid";

export function getMessageObj(messageContent, conversationId) {
  return {
    socketMessageType : "CHAT_MESSAGE",
    tempId: uuidv4(),
    sender: getUsername(),
    conversationId,
    messageContent,
    timeStamp: new Date().toISOString(),
  };
}


export function getConversationOpenEvent(conversationId) {
  return {
    socketMessageType : "CONVERSATION_OPEN",
    username: getUsername(),
    conversationId,
    timeStamp: new Date().toISOString(),
  };
}
