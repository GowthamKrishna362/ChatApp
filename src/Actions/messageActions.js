import { NEW_MESSAGE } from "Constants/apiUrlConstants.js";

export function sendMessage(stompClient, { sender, messageContent, conversationId, timestamp }) {
  stompClient.publish({
    destination: NEW_MESSAGE,
    body: JSON.stringify({ sender, messageContent, conversationId, timestamp }),
  });
}
