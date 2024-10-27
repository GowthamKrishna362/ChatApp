import { updateQueryData } from "features/apiSlice.js";
import { getUsername } from "utils/globalUtils.js";

export function addMessageToChat(chatId, message) {
  return (dispatch) => {
    dispatch(
      updateQueryData("getConversationMessageDetails", chatId, (draft) => {
        draft.messages.push({ ...message, isTransient: true });
      })
    );
  };
}

export function markChatDelivered(chatId, message) {
  return (dispatch) => {
    dispatch(
      updateQueryData("getConversationMessageDetails", chatId, (draft) => {
        const deliveredMessage = draft.messages.find((storedMessage) => storedMessage.tempId === message.tempId);

        if (deliveredMessage) {
          deliveredMessage.isTransient = false;
          deliveredMessage.id = message.id;
          delete message.tempId;
        }
      })
    );
  };
}

export function updateLastOpened(chatId, socketMessage) {
  return (dispatch) => {
    dispatch(
      updateQueryData("getConversationMessageDetails", chatId, (draft) => {
        let conversationOpenEvent = draft.conversationLastOpenedList.find(
          (event) => event.username === socketMessage.username
        );
        if (conversationOpenEvent) {
          conversationOpenEvent.timeStamp = socketMessage.timeStamp;
        } else {
          draft.conversationLastOpenedList.push(socketMessage);
        }
      })
    );
  };
}

export function addChatToList(newChat) {
  return (dispatch) => {
    dispatch(
      updateQueryData("getAllChats", getUsername(), (draft) => ({
        ...draft,
        [newChat.id]: newChat,
      }))
    );
  };
}
