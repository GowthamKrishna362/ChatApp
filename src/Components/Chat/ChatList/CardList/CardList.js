import React, { useEffect } from "react";
import ChatCard from "./ChatCard/ChatCard.js";
import "./cardList.scss";

const CardList = () => {
  return (
    <div className="chat-card-list">
      <ChatCard chatName="Test" />
    </div>
  );
};

export default CardList;
