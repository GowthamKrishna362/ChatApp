import { ADD_NEW_USER, LOGIN_USER, SEARCH_USERS } from "Constants/apiUrlConstants.js";
import { makeGetRequest, makePostRequest } from "./axiosActions.js";

export function addNewUser({ name, username, password }) {
  return makePostRequest(ADD_NEW_USER, { username, name, password }, { throwError: true });
}

export function loginUser(username, password) {
  return makePostRequest(LOGIN_USER, { username, password }, { throwError: true });
}

export function fetchUsers(prefix, options) {
  
  return makeGetRequest(SEARCH_USERS(prefix), options);
}
