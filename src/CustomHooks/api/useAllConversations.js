import { useEffect } from "react";

import { getAllConversations } from "Actions/conversationActions.js";
import { useChatContext } from "Contexts/ChatContext.js";
import { useStompContext } from "Contexts/StompContext.js";
import { getUsername } from "Services/utils/globalUtils.js";

function useAllConversations() {
  const { setChatList } = useChatContext();
  const { initializeStompClient, updateSubscriptionList } = useStompContext();
  async function fetchAllConversations() {
    const username = getUsername()
    const response = await getAllConversations(username);
    updateSubscriptionList(response.data.map((conversation) => conversation.id));
    initializeStompClient();
    setChatList(response.data);
  }
  useEffect(() => {
    fetchAllConversations();
  }, []);
}

export default useAllConversations