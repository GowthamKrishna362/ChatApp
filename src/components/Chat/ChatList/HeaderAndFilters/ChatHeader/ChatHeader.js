import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import useModal from '@customHooks/useModal.js';

import NewChatModal from './NewChatModal/NewChatModal.js';
import './chatHeader.scss';
import { getUsername } from '@utils/globalUtils.js';

const ChatHeader = () => {
  const modalProps = useModal();
  const { openModal } = modalProps;
  return (
    <div className="chat-header">
      <div className="header-text">{getUsername()}&apos;s Chats</div>
      <div className="header-icons">
        <FontAwesomeIcon className="clickable" icon={faPlus} onClick={openModal} />
        <NewChatModal {...modalProps} />
      </div>
    </div>
  );
};

export default ChatHeader;
