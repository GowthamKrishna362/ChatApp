const API_BASE = 'http://localhost:8080/api/v1/';
const USER_BASE = `/user/`;
const CONVERSATION_BASE = `/conversation/`;

export const API_CONSTANTS = {
  API_BASE: API_BASE,
  USER_BASE: USER_BASE,
  ADD_NEW_USER: `${USER_BASE}signup`,
  LOGIN_USER: `${USER_BASE}login`,
  SEARCH_USERS_BY_PREFIX: (prefix) => `${USER_BASE}all/${prefix}`,
  CONVERSATION_BASE: CONVERSATION_BASE,
  ADD_NEW_PRIVATE_CHAT: (targetUsername) => `${CONVERSATION_BASE}private/new/${targetUsername}`,
  ADD_NEW_GROUP_CHAT: `${CONVERSATION_BASE}group/new`,
  GET_ALL_CONVERSATIONS: (username) => `${CONVERSATION_BASE}${username}`,
  GET_CONVERSATION_MESSAGE_DETAILS: (id) => `${CONVERSATION_BASE}${id}/messageDetails`,
  TOPIC_ENDPOINT: (id) => `/topic/${id}`,
};

const WEB_SOCKET_BASE = '/chat/';
export const STOMP_ENDPOINTS = {
  STOMP_BASE: 'ws://localhost:8080/stomp',
  NEW_MESSAGE: `${WEB_SOCKET_BASE}sendMessage`,
  NEW_EVENT: `${WEB_SOCKET_BASE}event`,
  TOPIC_ENDPOINT: (id) => `/topic/${id}`,
  USER_TOPIC_ENDPOINT: (username) => `/topic/user/${username}`,
};
