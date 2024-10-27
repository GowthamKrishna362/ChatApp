import { v4 as uuidv4 } from "uuid";

import { SOCKET_MESSAGE_TYPES } from "@constants/globalConstants.js";

import { getUsername } from "./globalUtils.js";

export function getMessageObj(messageContent, conversationId) {
  return {
    socketMessageType: SOCKET_MESSAGE_TYPES.CHAT_MESSAGE,
    tempId: uuidv4(),
    sender: getUsername(),
    conversationId,
    messageContent,
    timeStamp: new Date().toISOString(),
  };
}

export function getConversationOpenEvent(conversationId) {
  return {
    socketMessageType: SOCKET_MESSAGE_TYPES.CONVERSATION_OPEN,
    username: getUsername(),
    conversationId,
    timeStamp: new Date().toISOString(),
  };
}

export function getInitiateVideoCallRequest(recipient) {
  return {
    socketMessageType: SOCKET_MESSAGE_TYPES.REQUEST_VIDEO,
    timeStamp: new Date().toISOString(),
    recipient,
  };
}

export function getSharePeerIdDto(recipient, peerId) {
  return {
    socketMessageType: SOCKET_MESSAGE_TYPES.SHARE_PEER_ID,
    timeStamp: new Date().toISOString(),
    recipient,
    peerId,
  };
}
