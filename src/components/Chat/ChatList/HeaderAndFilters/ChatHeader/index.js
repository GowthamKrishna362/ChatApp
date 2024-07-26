import React from "react";
import "./chatHeader.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="header-text">Chats</div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default ChatHeader;
