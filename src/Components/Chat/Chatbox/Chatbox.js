import React from "react";
import "./chatbox.scss";
import { useChatContext } from "Contexts/ChatContext.js";
import ChatboxBottomPanel from "./ChatboxBottomPanel/ChatboxBottomPanel.js";
import MessageViewport from "./MessageViewport/MessageViewport.js";
import useConversationMessages from "CustomHooks/api/useConversationMessages.js";

const Chatbox = () => {
  const { selectedChatDetails } = useChatContext();
  const chatId = selectedChatDetails.id;
  const messages = useConversationMessages(chatId);

  return (
    <div className="chatbox">
      <div className="top-panel"></div>
      <MessageViewport messages={messages} />
      <ChatboxBottomPanel />
    </div>
  );
};

export default Chatbox;
