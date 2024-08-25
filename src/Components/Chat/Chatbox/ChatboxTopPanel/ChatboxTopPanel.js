import React from 'react';
import { getChatName, getCurrentChatDetails } from 'utils/chatUtils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './chatboxTopPanel.scss';
import { useSelector } from 'react-redux';
import { selectCurrentChatId } from 'features/selectors.js';
import { useGetAllChatsQuery } from 'features/apiSlice.js';
import { getUsername } from 'utils/globalUtils.js';

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
