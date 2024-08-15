import { useEffect } from "react";
import { getMessagesByConversationId } from "Actions/conversationActions.js";
import { useChatContext } from "Contexts/ChatContext.js";

function useConversationDetails(chatId) {
  const { isChatFetched, setChatMessages } = useChatContext();

  useEffect(() => {
    async function fetchMessages() {
      try {
        let messages;
        if (isChatFetched(chatId)) {
          return;
        }
        const response = await getMessagesByConversationId(chatId);
        messages = response.data;
        setChatMessages(chatId, messages);
      } catch (e) {
        console.error(e);
      }
    }

    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);
}
export default useConversationDetails;
