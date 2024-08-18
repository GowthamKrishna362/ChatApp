import { NEW_EVENT, NEW_MESSAGE } from "Constants/apiUrlConstants.js";

export function sendSocketMessage(stompClient, message) {
  stompClient.publish({
    destination: NEW_MESSAGE,
    body: JSON.stringify(message),
  });
}

export function sendConversationOpenEvent(stompClient, payload) {
  stompClient.publish({
    destination: NEW_EVENT,
    body: JSON.stringify(payload)
  })
}
