import React from "react";

import ChatList from "./ChatList/ChatList.js";
import Chatbox from "./Chatbox/Chatbox.js";
import LeftPanel from "./LeftPanel/LeftPanel.js";
import "./chat.scss";
import VideoChatModal from "Components/VideoChat/VideoChatModal.js";

const Chat = () => {
  return (
    <div className="chat">
      <LeftPanel />
      <ChatList />
      <Chatbox />
      <VideoChatModal />
    </div>
  );
};

export default Chat;
