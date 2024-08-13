import { useEffect } from "react";
import { getMessagesByConversationId } from "Actions/conversationActions.js";
import { useChatContext } from "Contexts/ChatContext.js";

function useChatMessages(chatId) {
  const { chatMessagesMap, setChatMessages } = useChatContext();

  useEffect(() => {
    async function fetchMessages() {
      try {
        let messages;
        if (chatMessagesMap[chatId]?.isFetched) {
          messages = chatMessagesMap[chatId].messages;
        } else {
          const response = await getMessagesByConversationId(chatId);
          messages = response.data;
        }
        setChatMessages(chatId, messages || []);
      } catch (e) {
        console.log(e);
      }
    }

    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  return chatMessagesMap[chatId]?.messages || [];
}
export default useChatMessages