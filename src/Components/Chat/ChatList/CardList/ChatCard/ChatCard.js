import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { setSelectedChatId } from 'features/chatSlice.js';
import './chatCard.scss';
import { useDispatch } from 'react-redux';

const ChatCard = ({ chatName, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="chat-card"
      id={id}
      onClick={() => {
        dispatch(setSelectedChatId(id));
      }}
    >
      <div className="chat-card__profile-picture">
        <FontAwesomeIcon icon={faUser} />
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
};

export default ChatCard;
