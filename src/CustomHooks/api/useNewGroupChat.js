import { addNewGroupChat } from "Actions/conversationActions.js";
import { useChatContext } from "Contexts/ChatContext.js";
import { getUsername } from "Services/utils/globalUtils.js";

function useNewGroupChat(closeModal) {
  const { addChatToList } = useChatContext();
  return async (targetUsernames, groupName) => {
    try {
      const username = getUsername();
      const res = await addNewGroupChat(username, targetUsernames, groupName);
      addChatToList(res.data);
      closeModal();
    } catch (error) {
      console.error("Failed to create a new chat:", error);
    }
  };
}
export default useNewGroupChat;
