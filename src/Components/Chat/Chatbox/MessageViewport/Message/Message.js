import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./message.scss";
import { getUsername } from "Services/utils/globalUtils.js";

function Message({ message }) {
  const { sender, messageContent } = message;

  const currentUsername = getUsername();
  const isFromCurrentUser = sender === currentUsername;

  return (
    <div className={classNames("message", { "other-user": !isFromCurrentUser, "current-user": isFromCurrentUser })}>
      {messageContent}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string,
    messageContent: PropTypes.string,
  }),
};

export default Message;
