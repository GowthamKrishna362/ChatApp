import { addNewPrivateChat } from "Actions/conversationActions.js";
import { useChatContext } from "Contexts/ChatContext.js";
import { getUsername } from "Services/utils/globalUtils.js";

function useNewPrivateChat(closeModal) {
  const { addChatToList } = useChatContext();
  return async (targetUsername) => {
    try {
      const username = getUsername();
      const res = await addNewPrivateChat(username, targetUsername);
      addChatToList(res.data);
      closeModal();
    } catch (error) {
      console.error("Failed to create a new chat:", error);
    }
  };
}
export default useNewPrivateChat;
