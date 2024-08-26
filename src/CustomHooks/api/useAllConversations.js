import { useEffect } from 'react';

import { useStompContext } from 'Contexts/StompContext.js';
import { useGetAllChatsQuery } from 'features/apiSlice.js';
import { getUsername } from 'utils/globalUtils.js';

function useAllConversations() {
  const { data: allChats, isSuccess } = useGetAllChatsQuery(getUsername());
  const { initializeStompClient, updateSubscriptionList } = useStompContext();

  useEffect(() => {
    if (isSuccess && allChats) {
      initializeStompClient();
      updateSubscriptionList(Object.values(allChats).map((conversation) => conversation.id));
    }
  }, [isSuccess, allChats]);
}

export default useAllConversations;
