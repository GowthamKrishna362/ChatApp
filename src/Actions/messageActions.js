import { NEW_MESSAGE } from "Constants/apiUrlConstants.js";

export function sendMessage(stompClient, { sender, messageContent, conversationId, sentIsoDate }) {
  stompClient.publish({
    destination: NEW_MESSAGE,
    body: JSON.stringify({ sender, messageContent, conversationId, sentIsoDate }),
  });
}
