const API_BASE = "http://localhost:8080/api/v1/";
const WEB_SOCKET_BASE = "/chat/";

const USER_BASE = `${API_BASE}user/`;
export const ADD_NEW_USER = `${USER_BASE}new`;
export const LOGIN_USER = `${USER_BASE}login`;

export const CONVERSATION_BASE = `${API_BASE}conversation/`;
export const ADD_NEW_CONVERSATION = `${CONVERSATION_BASE}new`;
export const GET_CONVERSATION_MESSAGES = (id) => `${CONVERSATION_BASE}${id}/messages`;

export const NEW_MESSAGE = `${WEB_SOCKET_BASE}sendMessage`;
export const TOPIC_ENDPOINT = (id) => `/topic/${id}`;
