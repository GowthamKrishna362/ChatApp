import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./message.scss";
import { getHumanizedMessageTimeStamp, getUsername } from "Services/utils/globalUtils.js";

function Message({ message }) {
  const { sender, messageContent, sentAt } = message;

  const currentUsername = getUsername();
  const isFromCurrentUser = sender === currentUsername;

  return (
    <div className={classNames("message", { "other-user": !isFromCurrentUser, "current-user": isFromCurrentUser })}>
      <span className="message__content"> {messageContent}</span>
      <span className="message__timestamp">{getHumanizedMessageTimeStamp(sentAt)}</span>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string,
    messageContent: PropTypes.string,
    sentAt: PropTypes.string,
  }),
};

export default Message;
