import {
  ADD_NEW_PRIVATE_CHAT,
  ADD_NEW_GROUP_CHAT,
  CONVERSATION_BASE,
  GET_CONVERSATION_MESSAGES,
} from "Constants/apiUrlConstants.js";
import { makeGetRequest, makePostRequest } from "./axiosActions.js";

export function addNewPrivateChat(fromUsername, targetUsername) {
  return makePostRequest(ADD_NEW_PRIVATE_CHAT, { fromUsername, targetUsername });
}

export function addNewGroupChat(fromUsername, targetUsernames, groupName) {
  return makePostRequest(ADD_NEW_GROUP_CHAT, { fromUsername, targetUsernames, conversationName: groupName });
}

export function getAllConversations(username) {
  return makeGetRequest(`${CONVERSATION_BASE}${username}`);
}

export function getMessagesByConversationId(conversationId) {
  return makeGetRequest(GET_CONVERSATION_MESSAGES(conversationId));
}
