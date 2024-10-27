import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import useSocketAction from "@customHooks/api/useSocketAction.js";
import { useGetConversationMessageDetailsQuery } from "@features/apiSlice.js";
import { selectCurrentChatId } from "@features/selectors.js";

import ChatboxBottomPanel from "./ChatboxBottomPanel/ChatboxBottomPanel.js";
import ChatboxTopPanel from "./ChatboxTopPanel/ChatboxTopPanel.js";
import MessageViewport from "./MessageViewport/MessageViewport.js";
import "./chatbox.scss";

const Chatbox = () => {
  const selectedChatId = useSelector(selectCurrentChatId);
  const { data: messageDetails } = useGetConversationMessageDetailsQuery(selectedChatId, { skip: !selectedChatId });
  const { sendConversationOpen } = useSocketAction();

  useEffect(() => {
    // Send conversation open if new messages come in for read receipt of new messages
    if (selectedChatId) {
      sendConversationOpen();
    }
  }, [messageDetails?.messages?.length]);

  return (
    <div className="chatbox">
      <ChatboxTopPanel />
      <MessageViewport messageDetails={messageDetails || []} />
      {selectedChatId && <ChatboxBottomPanel />}
    </div>
  );
};

export default Chatbox;
