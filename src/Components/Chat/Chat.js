import React from 'react';
import ChatList from './ChatList/ChatList.js';
import LeftPanel from './LeftPanel/LeftPanel.js';
import Chatbox from './Chatbox/Chatbox.js';

import './chat.scss';

const Chat = () => {
  return (
    <div className="chat">
      <LeftPanel />
      <ChatList />
      <Chatbox />
    </div>
  );
};

export default Chat;
