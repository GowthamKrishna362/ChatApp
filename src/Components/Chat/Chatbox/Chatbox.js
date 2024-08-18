import React from "react";
import ChatboxBottomPanel from "./ChatboxBottomPanel/ChatboxBottomPanel.js";
import MessageViewport from "./MessageViewport/MessageViewport.js";
import ChatboxTopPanel from "./ChatboxTopPanel/ChatboxTopPanel.js";
import { useGetConversationMessageDetailsQuery } from "features/apiSlice.js";
import { selectCurrentChatId } from "features/selectors.js";

import "./chatbox.scss";
import { useSelector } from "react-redux";

const Chatbox = () => {
  const selectedChatId = useSelector(selectCurrentChatId);
  const { data: messageDetails } = useGetConversationMessageDetailsQuery(selectedChatId, { skip: !selectedChatId });

  return (
    <div className="chatbox">
      <ChatboxTopPanel />
      <MessageViewport messageDetails={messageDetails || []} />
      {selectedChatId && <ChatboxBottomPanel />}
    </div>
  );
};

export default Chatbox;
