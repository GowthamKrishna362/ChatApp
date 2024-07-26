import React from "react";
import ChatList from "./ChatList/index.js";
import LeftPanel from "./LeftPanel/index.js";
import Chatbox from "./Chatbox/index.js";

import "./chat.scss";

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
