import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./chatCard.scss";
import { useChatContext } from "Contexts/ChatContext.js";

const ChatCard = ({ chatName, lastText = "321321314141", id }) => {
  const { moveToChat } = useChatContext();
  return (
    <div
      className="chat-card"
      id={id}
      onClick={() => {
        moveToChat(id);
      }}
    >
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

ChatCard.propTypes = {
  chatName: PropTypes.string,
};

export default ChatCard;
