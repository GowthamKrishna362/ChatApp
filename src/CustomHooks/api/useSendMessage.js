import { sendMessage } from "Actions/messageActions.js";
import { useChatContext } from "Contexts/ChatContext.js";
import { useStompContext } from "Contexts/StompContext.js";
import { getMessageObj } from "Services/utils/messageUtils.js";

function useSendMessage() {
  const { stompClient } = useStompContext();
  const { selectedChatDetails, addMessageToChat } = useChatContext();

  return function (enteredValue) {
    const message = getMessageObj(enteredValue, selectedChatDetails.id);
    sendMessage(stompClient, message);
    addMessageToChat(selectedChatDetails.id, message);
  };
}

export default useSendMessage