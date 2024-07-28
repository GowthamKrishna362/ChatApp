import axios from "axios";
import { ADD_NEW_USER } from "Constants/apiUrlConstants.js";

export function addNewUser({ name, username, password }) {
  axios
    .post(ADD_NEW_USER, {
      name,
      username,
      password,
    })
    .then((res) => res)
    .catch((e) => console.log(e.response.data));
}
