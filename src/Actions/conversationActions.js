import axiosClient from "Services/axiosClient.js";
import { ADD_NEW_CONVERSATION } from "Constants/apiUrlConstants.js";

export function addNewConversation(fromUsername, targetUsername) {
  return axiosClient
    .post(ADD_NEW_CONVERSATION, {
      fromUsername,
      targetUsername,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {

    });
}
