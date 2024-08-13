import { ADD_NEW_USER, LOGIN_USER } from "Constants/apiUrlConstants.js";
import { makePostRequest } from "./axiosActions.js";

export function addNewUser({ name, username, password }) {
  return makePostRequest(ADD_NEW_USER, { username, name, password });
}

export function loginUser(username, password) {
  return makePostRequest(LOGIN_USER, { username, password });
}
