import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";

import useNewChat from "CustomHooks/api/useNewChat.js";

function NewChatModal({ isOpen, closeModal, defaultStyles }) {
  const style = {
    content: {
      ...defaultStyles.content,
      width: "400px",
    },
  };
  const onNewChat = useNewChat();
  const { value: targetUsername, onChange: onChangeTargetUsername } = useReactiveInput();
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={style}>
      <div className="signup-dialogue dialogue-box">
        <div className="dialogue-box__header-wpr">New Chat</div>
        <div className="dialogue-box__content-wpr credentials-form">
          <ReactiveInput value={targetUsername} onChange={onChangeTargetUsername} label="With user" />
          <button type="submit" onClick={onNewChat}>
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
