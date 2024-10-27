import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "react-modal";

import { CHAT_TYPES } from "Constants/globalConstants.js";

import AddGroupChat from "./AddGroupChat.js";
import AddPrivateChat from "./AddPrivateChat.js";
import "./newChatModal.scss";

function NewChatModal({ isOpen, closeModal, defaultStyles }) {
  const [selectedOption, setSelectedOption] = useState(CHAT_TYPES.PRIVATE);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={defaultStyles}
      shouldCloseOnEsc
      portalClassName="new-chat-modal"
    >
      <div className="signup-dialogue dialogue-box">
        <div className="dialogue-box__header-wpr">New Chat</div>
        <div>
          <label>
            <input
              type="radio"
              value={CHAT_TYPES.PRIVATE}
              checked={selectedOption === CHAT_TYPES.PRIVATE}
              onChange={handleChange}
            />
            Private
          </label>
          <label>
            <input
              type="radio"
              value={CHAT_TYPES.GROUP}
              checked={selectedOption === CHAT_TYPES.GROUP}
              onChange={handleChange}
            />
            Group
          </label>
        </div>
        {selectedOption === CHAT_TYPES.PRIVATE && (
          <div className="dialogue-box__content-wpr credentials-form">
            <AddPrivateChat closeModal={closeModal} />
          </div>
        )}
        {selectedOption === CHAT_TYPES.GROUP && (
          <div className="dialogue-box__content-wpr credentials-form">
            <AddGroupChat closeModal={closeModal} />
          </div>
        )}
      </div>
    </Modal>
  );
}

NewChatModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  defaultStyles: PropTypes.shape({
    content: PropTypes.shape({}),
  }),
};

export default NewChatModal;
