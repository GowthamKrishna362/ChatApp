import PropTypes from 'prop-types';
import React from 'react';

import { getUsername } from '@utils/globalUtils.js';

import Message from './Message/Message.js';
import './messageViewport.scss';

function MessageViewport({ messageDetails }) {
  const { messages = [], conversationLastOpenedList = [] } = messageDetails;
  const otherUserLastOpened = conversationLastOpenedList.find(
    (openedEvent) => openedEvent.username !== getUsername(),
  )?.timeStamp;

  return (
    <div className="message-viewport">
      {messages.map((message, index) => (
        <Message message={message} otherUserLastOpened={otherUserLastOpened} key={index} />
      ))}
    </div>
  );
}

MessageViewport.propTypes = {
  messageDetails: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape(),
    }),
  ),
};

export default MessageViewport;
