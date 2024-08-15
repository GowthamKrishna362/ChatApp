import React from "react";
import ChatCard from "./ChatCard/ChatCard.js";
import "./cardList.scss";
import { useChatContext } from "Contexts/ChatContext.js";
import { getChatName } from "Services/utils/chatUtils.js";

const CardList = () => {
  const { getChatList } = useChatContext();
  return (
    <div className="chat-card-list">
      {getChatList().map((chat, i) => {
        const { conversationType, conversationName, id, members } = chat;
        const chatName = getChatName(conversationName, conversationType, members);
        return <ChatCard chatName={chatName} id={id} key={i} />;
      })}
    </div>
  );
};

export default CardList;
