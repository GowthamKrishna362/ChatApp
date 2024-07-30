import React from "react";
import "./chatHeader.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModal from "CustomHooks/useModal.js";
import NewChatModal from "./NewChatModal/NewChatModal.js";

const ChatHeader = () => {
  const modalProps = useModal();
  const { openModal } = modalProps;
  return (
    <div className="chat-header">
      <div className="header-text">Chats</div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faPlus} onClick={openModal} />
        <NewChatModal {...modalProps} />
      </div>
    </div>
  );
};

export default ChatHeader;
