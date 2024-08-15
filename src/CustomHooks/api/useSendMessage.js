import { sendMessage } from "Actions/messageActions.js";
import { useChatContext } from "Contexts/ChatContext.js";
import { useStompContext } from "Contexts/StompContext.js";
import { getMessageObj } from "Services/utils/messageUtils.js";

function useSendMessage() {
  const { stompClient } = useStompContext();
  const { getSelectedChatId, addMessageToChat } = useChatContext();

  return function (enteredValue, { clearInput }) {
    const message = getMessageObj(enteredValue, getSelectedChatId());
    sendMessage(stompClient, message);
    addMessageToChat(getSelectedChatId(), message);
    clearInput();
  };
}

export default useSendMessage;
