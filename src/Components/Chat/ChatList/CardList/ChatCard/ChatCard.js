import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./chatCard.scss";

const ChatCard = ({ chatName, lastText ="321321314141" }) => {
  return (
    <div className="chat-card">
      <div className="chat-card__profile-picture">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="chat-card__details">
        <div className="chat-name">{chatName}</div>
        <div className="last-text">{lastText}</div>
      </div>
    </div>
  );
};

export default ChatCard;
