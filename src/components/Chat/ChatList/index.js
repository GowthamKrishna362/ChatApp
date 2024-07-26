import React from "react";
import HeaderAndFilters from "./HeaderAndFilters/index.js";
import CardList from "./CardList/index.js";

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
