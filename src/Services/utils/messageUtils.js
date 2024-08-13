import { getUsername } from "./globalUtils.js";

export function getMessageObj(messageContent, conversationId) {
  const sender = getUsername();
  const timestamp = new Date().toISOString();
  return {
    sender,
    conversationId,
    timestamp,
    messageContent,
  };
}
