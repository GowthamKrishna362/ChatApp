import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedChatId } from "@features/chatSlice.js";

import "./chatCard.scss";
import { selectCurrentChatId } from "@features/selectors.js";
import classNames from "classnames";
import { CHAT_TYPES } from "@constants/globalConstants.js";

const ChatCard = ({ chatName, id, type }) => {
  const dispatch = useDispatch();

  const selectedChatId = useSelector(selectCurrentChatId);
  const isSelected = id === selectedChatId;
  const isGroup = type === CHAT_TYPES.GROUP;

  return (
    <div
      className={`${classNames("chat-card", { selected: isSelected })}`}
      id={id}
      onClick={() => {
        dispatch(setSelectedChatId(id));
      }}
    >
      <div className="chat-card__profile-picture">
        <FontAwesomeIcon icon={isGroup ? faUserGroup : faUser} />
      </div>
      <div className="chat-card__details">
        <div className="chat-name">{chatName}</div>
      </div>
    </div>
  );
};

ChatCard.propTypes = {
  chatName: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default ChatCard;
