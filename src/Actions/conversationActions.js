import { ADD_NEW_CONVERSATION, CONVERSATION_BASE, GET_CONVERSATION_MESSAGES } from "Constants/apiUrlConstants.js";
import { makeGetRequest, makePostRequest } from "./axiosActions.js";

export function addNewConversation(fromUsername, targetUsername) {
  return makePostRequest(ADD_NEW_CONVERSATION, { fromUsername, targetUsername });
}

export function getAllConversations(username) {
  return makeGetRequest(`${CONVERSATION_BASE}${username}`);
}

export function getMessagesByConversationId(conversationId) {
  return makeGetRequest(GET_CONVERSATION_MESSAGES(conversationId));
}
