import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { getHumanizedMessageTimeStamp, getUsername } from 'utils/globalUtils.js';

import './message.scss';

function Message({ message, otherUserLastOpened = null }) {
  const { sender, messageContent, timeStamp, isTransient } = message;

  let messageDeliveryStatus = '';
  if (sender === getUsername() && otherUserLastOpened) {
    messageDeliveryStatus = isTransient ? 'U' : 'D';
    const otherUserLastOpenedDate = new Date(otherUserLastOpened);
    const currMessageDate = new Date(timeStamp);

    if (otherUserLastOpenedDate > currMessageDate) {
      messageDeliveryStatus = 'R';
    }
  }

  const currentUsername = getUsername();
  const isFromCurrentUser = sender === currentUsername;

  return (
    <div className={classNames('message', { 'other-user': !isFromCurrentUser, 'current-user': isFromCurrentUser })}>
      <span className="message__content"> {messageContent}</span>
      <span className="message__timestamp">
        {getHumanizedMessageTimeStamp(timeStamp)}
        &nbsp;{messageDeliveryStatus}
      </span>
    </div>
  );
}

Message.propTypes = {
  otherUserLastOpened: PropTypes.string,
  message: PropTypes.shape({
    isTransient: PropTypes.bool,
    sender: PropTypes.string,
    messageContent: PropTypes.string,
    timeStamp: PropTypes.string,
  }),
};

export default Message;
