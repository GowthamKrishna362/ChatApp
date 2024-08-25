import React from 'react';
import HeaderAndFilters from './HeaderAndFilters/HeaderAndFilters.js';
import CardList from './CardList/CardList.js';
import useAllConversations from 'CustomHooks/api/useAllConversations.js';

import './chatList.scss';

const ChatList = () => {
  useAllConversations();
  return (
    <div className="chat-list">
      <HeaderAndFilters />
      <CardList />
    </div>
  );
};

export default ChatList;
