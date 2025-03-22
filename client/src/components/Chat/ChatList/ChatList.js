import React from 'react';

import useAllConversations from '@customHooks/api/useAllConversations.js';

import CardList from './CardList/CardList.js';
import HeaderAndFilters from './HeaderAndFilters/HeaderAndFilters.js';
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
