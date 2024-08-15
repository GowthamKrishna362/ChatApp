import React from "react";
import { useChatContext } from "Contexts/ChatContext.js";
import { getChatName } from "Services/utils/chatUtils.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./chatboxTopPanel.scss";

export default function ChatboxTopPanel() {
  const { getCurrentChatDetails, getSelectedChatId } = useChatContext();
  const currentChatDetails = getCurrentChatDetails();
  const { conversationType, conversationName, members } = currentChatDetails || {};
  const chatName = getChatName(conversationName, conversationType, members);
  return (
    <div className="chatbox-top-panel">
      {getSelectedChatId() && (
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
