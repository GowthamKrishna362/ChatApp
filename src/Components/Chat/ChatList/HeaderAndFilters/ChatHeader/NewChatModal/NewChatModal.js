import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import { addNewConversation } from "Actions/conversationActions.js";
import { SESSION_STORAGE_KEYS } from "Constants/globalConstants.js";

function NewChatModal({ isOpen, closeModal, defaultStyles }) {
  const style = {
    content: {
      ...defaultStyles.content,
      width: "400px",
    },
  };
  const { value: targetUsername, onChange: onChangeTargetUsername } = useReactiveInput();
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={style}>
      <div className="signup-dialogue dialogue-box">
        <div className="dialogue-box__header-wpr">New Chat</div>
        <div className="dialogue-box__content-wpr credentials-form">
          <ReactiveInput value={targetUsername} onChange={onChangeTargetUsername} label="With user" />
          <button
            type="submit"
            onClick={() => {
              const username = sessionStorage.getItem(SESSION_STORAGE_KEYS.USERNAME);
              addNewConversation(username, targetUsername);
            }}
          >
            Submit
          </button>
          <button type="close" onClick={closeModal}>
            Close
          </button>
        </div>
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
