import axiosClient from "Services/axiosClient.js";
import { ADD_NEW_USER, LOGIN_USER } from "Constants/apiUrlConstants.js";

export function addNewUser({ name, username, password }) {
  return axiosClient
    .post(ADD_NEW_USER, {
      name,
      username,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e.response.data.message);
      throw new Error(e.response.message);
    });
}

export function loginUser(username, password) {
  return axiosClient
    .post(LOGIN_USER, {
      username,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e.response.data.message));
}
