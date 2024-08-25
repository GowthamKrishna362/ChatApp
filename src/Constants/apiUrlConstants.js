const WEB_SOCKET_BASE = "/chat/";
const STOMP_BASE = "ws://localhost:8080/stomp";
export const NEW_MESSAGE = `${WEB_SOCKET_BASE}sendMessage`;
export const NEW_EVENT = `${WEB_SOCKET_BASE}event`;

export const USER_BASE = `${API_BASE}user/`;

export const ADD_NEW_USER = `${USER_BASE}signup`;
export const LOGIN_USER = `${USER_BASE}login`;
export const SEARCH_USERS = (prefix) => `${USER_BASE}all/${prefix}`;

export const API_BASE = "http://localhost:8080/api/v1/";
export const USER_BASE2 = `/user/`;
export const CONVERSATION_BASE = `/conversation/`;

export const API_CONSTANTS = {
  API_BASE: API_BASE,
  USER_BASE: USER_BASE2,
  ADD_NEW_USER: `${USER_BASE2}signup`,
  LOGIN_USER: `${USER_BASE2}login`,
  SEARCH_USERS_BY_PREFIX: (prefix) => `${USER_BASE2}all/${prefix}`,
  CONVERSATION_BASE: CONVERSATION_BASE,
  ADD_NEW_PRIVATE_CHAT: (targetUsername) => `${CONVERSATION_BASE}private/new/${targetUsername}`,
  ADD_NEW_GROUP_CHAT: `${CONVERSATION_BASE}group/new`,
  GET_ALL_CONVERSATIONS: (username) => `${CONVERSATION_BASE}${username}`,
  GET_CONVERSATION_MESSAGE_DETAILS: (id) => `${CONVERSATION_BASE}${id}/messageDetails`,
  TOPIC_ENDPOINT: (id) => `/topic/${id}`,
  NEW_MESSAGE: `${WEB_SOCKET_BASE}sendMessage`,
};

export const STOMP_ENDPOINTS = {
  STOMP_BASE,
  TOPIC_ENDPOINT: (id) => `/topic/${id}`,
};
