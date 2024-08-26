import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';

import { useGetAllChatsQuery } from 'features/apiSlice.js';
import { selectCurrentChatId } from 'features/selectors.js';
import { getChatName, getCurrentChatDetails } from 'utils/chatUtils.js';
import { getUsername } from 'utils/globalUtils.js';

import './chatboxTopPanel.scss';

export default function ChatboxTopPanel() {
  const { data: chatDetailsMap } = useGetAllChatsQuery(getUsername());
  const selectedChatId = useSelector(selectCurrentChatId);

  const currentChatDetails = getCurrentChatDetails(chatDetailsMap, selectedChatId);
  const { conversationType, conversationName, members } = currentChatDetails || {};
  const chatName = getChatName(conversationName, conversationType, members);

  return (
    <div className="chatbox-top-panel">
      {currentChatDetails && (
        <div className="chatbox-top-panel__profile">
          <div className="profile-picture">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="chat-name">{chatName}</div>
        </div>
      )}
    </div>
  );
}
