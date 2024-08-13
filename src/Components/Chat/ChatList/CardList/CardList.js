import React from "react";
import ChatCard from "./ChatCard/ChatCard.js";
import "./cardList.scss";
import { useChatContext } from "Contexts/ChatContext.js";

const CardList = () => {
  const { chatList } = useChatContext();
  return (
    <div className="chat-card-list">
      {chatList.map((chat, i) => {
        const { conversationType, conversationName, id } = chat;
        const chatName = conversationName;
        return <ChatCard chatName={chatName} id={id} key={i} />;
      })}
    </div>
  );
};

export default CardList;
