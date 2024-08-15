import { CHAT_TYPES } from "Constants/globalConstants.js";
import { getUsername } from "Services/utils/globalUtils.js";

export function getChatName(conversationName, conversationType, members) {
  let chatName = conversationName;
  if (conversationType === CHAT_TYPES.PRIVATE) {
    chatName = members.find((member) => member.username != getUsername()).username;
  }
  return chatName;
}
