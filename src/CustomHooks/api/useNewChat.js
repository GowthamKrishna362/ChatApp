import { addNewConversation } from "Actions/conversationActions.js";
import { useCallback } from "react";
import { getUsername } from "Services/utils/globalUtils.js";

function useNewChat(closeModal, addChatToList) {
  return useCallback(
    async (targetUsername) => {
      try {
        const username = getUsername()
        const res = await addNewConversation(username, targetUsername);
        addChatToList(res.data);
        closeModal();
      } catch (error) {
        console.error("Failed to create a new chat:", error);
      }
    },
    [closeModal, addChatToList]
  );
}
export default useNewChat;
