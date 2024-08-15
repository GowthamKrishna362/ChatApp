import React from "react";
import "./chatbox.scss";
import { useChatContext } from "Contexts/ChatContext.js";
import ChatboxBottomPanel from "./ChatboxBottomPanel/ChatboxBottomPanel.js";
import MessageViewport from "./MessageViewport/MessageViewport.js";
import useConversationDetails from "CustomHooks/api/useConversationDetails.js";
import ChatboxTopPanel from "./ChatboxTopPanel/ChatboxTopPanel.js";

const Chatbox = () => {
  const { getSelectedChatId, getCurrentChatMessages } = useChatContext();
  useConversationDetails(getSelectedChatId());

  return (
    <div className="chatbox">
      <ChatboxTopPanel />
      <MessageViewport messages={getCurrentChatMessages(getSelectedChatId())} />
      {getSelectedChatId() && <ChatboxBottomPanel />}
    </div>
  );
};

export default Chatbox;
