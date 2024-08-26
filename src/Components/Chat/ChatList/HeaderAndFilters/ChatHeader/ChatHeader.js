import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import useModal from 'CustomHooks/useModal.js';

import NewChatModal from './NewChatModal/NewChatModal.js';
import './chatHeader.scss';

const ChatHeader = () => {
  const modalProps = useModal();
  const { openModal } = modalProps;
  return (
    <div className="chat-header">
      <div className="header-text">Chats</div>
      <div className="header-icons">
        <FontAwesomeIcon className="clickable" icon={faPlus} onClick={openModal} />
        <NewChatModal {...modalProps} />
      </div>
    </div>
  );
};

export default ChatHeader;
