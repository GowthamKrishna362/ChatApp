import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import { useGetAllChatsQuery } from "@features/apiSlice.js";
import { selectCurrentChatId } from "@features/selectors.js";
import { getChatName, getCurrentChatDetails } from "@utils/chatUtils.js";
import { getUsername } from "@utils/globalUtils.js";

import "./chatboxTopPanel.scss";
import { useVideoChatContext } from "@contexts/VideoChatContext.js";
import { CHAT_TYPES } from "@constants/globalConstants.js";
import { toast } from "react-toastify";
import useModal from "@customHooks/useModal.js";
import GroupInfoModal from "./GroupInfoModal.js";

export default function ChatboxTopPanel() {
  const { data: chatDetailsMap } = useGetAllChatsQuery(getUsername());
  console.log(chatDetailsMap, "xyz");

  const selectedChatId = useSelector(selectCurrentChatId);
  const { requestVideoCall } = useVideoChatContext();
  const modalProps = useModal();
  const { openModal } = modalProps;

  const currentChatDetails = getCurrentChatDetails(chatDetailsMap, selectedChatId);
  const { conversationType, conversationName, members } = currentChatDetails || {};
  const chatName = getChatName(conversationName, conversationType, members);
  const isGroup = conversationType === CHAT_TYPES.GROUP;

  function initiateVideoChat(event) {
    event.stopPropagation();
    if (isGroup) {
      toast("Not available for group chats yet");
    } else {
      /* TODO - This is for private chat, add logic for group chat */
      const recipient = members.filter((member) => member.username !== getUsername())[0];
      requestVideoCall(recipient.username);
    }
  }

  function openChatInfo() {
    openModal();
  }

  return (
    <>
      <GroupInfoModal {...modalProps} members={members} />
      <div className="chatbox-top-panel clickable" onClick={openChatInfo}>
        {currentChatDetails && (
          <>
            <div className="chatbox-top-panel__profile">
              <div className="profile-picture">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="chat-name">{chatName}</div>
            </div>
            <div className="video-icon clickable" onClick={initiateVideoChat}>
              <FontAwesomeIcon icon={faVideo} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
