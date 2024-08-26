import React, { useMemo } from 'react';

import { useGetAllChatsQuery } from 'features/apiSlice.js';
import { getChatName } from 'utils/chatUtils.js';
import { getUsername } from 'utils/globalUtils.js';

import ChatCard from './ChatCard/ChatCard.js';
import './cardList.scss';

const CardList = () => {
  const { data } = useGetAllChatsQuery(getUsername());
  const chatList = useMemo(() => Object.values(data || {}), [data]);
  return (
    <div className="chat-card-list">
      {chatList.map((chat, i) => {
        const { conversationType, conversationName, id, members } = chat;
        const chatName = getChatName(conversationName, conversationType, members);
        return <ChatCard chatName={chatName} id={id} key={i} />;
      })}
    </div>
  );
};

export default CardList;
