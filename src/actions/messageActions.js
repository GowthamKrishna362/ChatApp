import { STOMP_ENDPOINTS } from "@constants/apiUrlConstants.js";

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

export function sendInitiateVideoCallMessage(stompClient, payload) {
  stompClient.publish({
    destination: STOMP_ENDPOINTS.INIITIATE_VIDEO_CALL,
    body: JSON.stringify(payload),
  });
}

export function sendPeerIdMessage(stompClient, payload) {
  stompClient.publish({
    destination: STOMP_ENDPOINTS.SHARE_PEER_ID,
    body: JSON.stringify(payload),
  });
}
