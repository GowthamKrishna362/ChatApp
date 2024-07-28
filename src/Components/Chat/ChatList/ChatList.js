import React from "react";
import HeaderAndFilters from "./HeaderAndFilters/HeaderAndFilters.js";
import CardList from "./CardList/CardList.js";

import "./chatList.scss";

const ChatList = () => {
  return (
    <div className="chat-list">
      <HeaderAndFilters />
      <CardList />
    </div>
  );
};

export default ChatList;
