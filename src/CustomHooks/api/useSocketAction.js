import { sendConversationOpenEvent, sendSocketMessage } from "Actions/messageActions.js";
import { useStompContext } from "Contexts/StompContext.js";
import { selectCurrentChatId } from "features/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { getConversationOpenEvent, getMessageObj } from "utils/messageUtils.js";
import { addMessageToChat } from "utils/storeHelpers/cacheUpdateUtils.js";

function useSocketAction() {
  const dispatch = useDispatch();
  const { stompClient } = useStompContext();
  const currentChatId = useSelector(selectCurrentChatId);

  function sendMessage(enteredValue, { clearInput }) {
    const message = getMessageObj(enteredValue, currentChatId);
    dispatch(addMessageToChat(currentChatId, message));
    sendSocketMessage(stompClient, message);
    clearInput();
  }

  function sendConversationOpen(id = currentChatId) {
    const conversationOpenEvent = getConversationOpenEvent(id);
    sendConversationOpenEvent(stompClient, conversationOpenEvent);
  }

  return { sendMessage , sendConversationOpen};
}

export default useSocketAction;
