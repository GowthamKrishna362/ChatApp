const WEB_SOCKET_BASE = "/chat/";

export const API_BASE = "http://localhost:8080/api/v1/";
export const USER_BASE = `${API_BASE}user/`;
export const CONVERSATION_BASE = `${API_BASE}conversation/`;

export const ADD_NEW_USER = `${USER_BASE}new`;
export const LOGIN_USER = `${USER_BASE}login`;
export const SEARCH_USERS = (prefix) => `${USER_BASE}all/${prefix}`;

export const ADD_NEW_PRIVATE_CHAT = `${CONVERSATION_BASE}private/new`;
export const ADD_NEW_GROUP_CHAT = `${CONVERSATION_BASE}group/new`;
export const GET_CONVERSATION_MESSAGE_DETAILS = (id) => `${CONVERSATION_BASE}${id}/messageDetails`;

export const NEW_MESSAGE = `${WEB_SOCKET_BASE}sendMessage`;
export const NEW_EVENT = `${WEB_SOCKET_BASE}event`;
export const TOPIC_ENDPOINT = (id) => `/topic/${id}`;

export const USER_BASE2 = `/user/`;
export const CONVERSATION_BASE2 = `/conversation/`;
export const API_CONSTANTS = {
  API_BASE: API_BASE,
  USER_BASE: USER_BASE2,
  ADD_NEW_USER: `${USER_BASE2}new`,
  LOGIN_USER: `${USER_BASE2}login`,
  SEARCH_USERS_BY_PREFIX: (prefix) => `${USER_BASE2}all/${prefix}`,
  CONVERSATION_BASE: CONVERSATION_BASE2,
  ADD_NEW_PRIVATE_CHAT: `${CONVERSATION_BASE2}private/new`,
  ADD_NEW_GROUP_CHAT: `${CONVERSATION_BASE2}group/new`,
  GET_ALL_CONVERSATIONS: (username) => `${CONVERSATION_BASE2}${username}`,
  GET_CONVERSATION_MESSAGE_DETAILS: (id) => `${CONVERSATION_BASE2}${id}/messageDetails`,
  TOPIC_ENDPOINT: (id) => `/topic/${id}`,
  NEW_MESSAGE: `${WEB_SOCKET_BASE}sendMessage`,
};
