import { useEffect } from "react";

import { useStompContext } from "Contexts/StompContext.js";
import { useGetAllChatsQuery } from "features/apiSlice.js";
import { getUsername } from "utils/globalUtils.js";

function useAllConversations() {
  const { stompClient } = useStompContext();
  const { data: allChats, isSuccess } = useGetAllChatsQuery(getUsername());
  const { initializeStompClient, addChatToSubscription } = useStompContext();

  useEffect(() => {
    if (isSuccess && allChats) {
      initializeStompClient();
    }
  }, [isSuccess, allChats]);

  useEffect(() => {
    setTimeout(() => {
      if (stompClient) Object.values(allChats).forEach((conversation) => addChatToSubscription(conversation.id));
    }, [1]);
  }, [stompClient]);
}

export default useAllConversations;
