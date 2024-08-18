import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { setSelectedChatId } from "features/chatSlice.js";
import "./chatCard.scss";
import { useDispatch } from "react-redux";
import useSocketAction from "CustomHooks/api/useSocketAction.js";

const ChatCard = ({ chatName, lastText = "321321314141", id }) => {
  const dispatch = useDispatch();
  const { sendConversationOpen } = useSocketAction();
  return (
    <div
      className="chat-card"
      id={id}
      onClick={() => {
        dispatch(setSelectedChatId(id));
        sendConversationOpen(id)
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
