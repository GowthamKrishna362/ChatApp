import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./message.scss";
import { getHumanizedMessageTimeStamp, getUsername } from "utils/globalUtils.js";

function Message({ message, otherUserLastOpened }) {
  const { sender, messageContent, timeStamp, isTransient } = message;
  let messageDeliveryStatus = isTransient ? "U" : "D";

  if (otherUserLastOpened) {
    const otherUserLastOpenedDate = new Date(otherUserLastOpened);
    const currMessageDate = new Date(timeStamp);

    if (otherUserLastOpenedDate > currMessageDate) {
      messageDeliveryStatus = "R";
    }
  }

  const currentUsername = getUsername();
  const isFromCurrentUser = sender === currentUsername;

  return (
    <div className={classNames("message", { "other-user": !isFromCurrentUser, "current-user": isFromCurrentUser })}>
      <span className="message__content"> {messageContent}</span>
      <span className="message__timestamp">
        {getHumanizedMessageTimeStamp(timeStamp)}
        {messageDeliveryStatus}
      </span>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    isTransient: PropTypes.bool,
    sender: PropTypes.string,
    messageContent: PropTypes.string,
    timeStamp: PropTypes.string,
  }),
};

export default Message;
