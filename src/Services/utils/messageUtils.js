import { getUsername } from "./globalUtils.js";

export function getMessageObj(messageContent, conversationId) {
  return {
    sender: getUsername(),
    conversationId,
    messageContent,
    sentIsoDate: new Date().toISOString(),
  };
}
