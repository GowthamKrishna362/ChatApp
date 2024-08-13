import React from "react";
import PropTypes from "prop-types";
import Message from "./Message/Message.js";
import "./messageViewport.scss";

function MessageViewport({ messages }) {
  return (
    <div className="message-viewport">
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
}

MessageViewport.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MessageViewport;
