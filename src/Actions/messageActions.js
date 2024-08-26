import { STOMP_ENDPOINTS } from 'Constants/apiUrlConstants.js';

export function sendSocketMessage(stompClient, message) {
  stompClient.publish({
    destination: STOMP_ENDPOINTS.NEW_MESSAGE,
    body: JSON.stringify(message),
  });
}

export function sendConversationOpenEvent(stompClient, payload) {
  stompClient.publish({
    destination: STOMP_ENDPOINTS.NEW_EVENT,
    body: JSON.stringify(payload),
  });
}
