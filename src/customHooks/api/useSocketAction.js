import { useDispatch, useSelector } from "react-redux";

import {
  sendConversationOpenEvent,
  sendInitiateVideoCallMessage,
  sendPeerIdMessage,
  sendSocketMessage,
} from "@actions/messageActions.js";
import { useStompContext } from "@contexts/StompContext.js";
import { selectCurrentChatId } from "@features/selectors.js";
import {
  getConversationOpenEvent,
  getInitiateVideoCallRequest,
  getMessageObj,
  getSharePeerIdDto,
} from "@utils/messageUtils.js";
import { addMessageToChat } from "@utils/storeHelpers/cacheUpdateUtils.js";

function useSocketAction() {
  const dispatch = useDispatch();
  const { stompClient } = useStompContext();
  const currentChatId = useSelector(selectCurrentChatId);

  function sendMessage(enteredValue, { clearInput }) {
    const message = getMessageObj(enteredValue, currentChatId);
    dispatch(addMessageToChat(currentChatId, message));
    sendSocketMessage(stompClient, message);
    clearInput();
  }

  function sendConversationOpen(id = currentChatId) {
    const conversationOpenEvent = getConversationOpenEvent(id);
    sendConversationOpenEvent(stompClient, conversationOpenEvent);
  }

  function sendInitiateVideoCall(recipient) {
    const initiateVideoCallRequest = getInitiateVideoCallRequest(recipient);
    sendInitiateVideoCallMessage(stompClient, initiateVideoCallRequest);
  }

  function sendPeerId(recipient, peerId) {
    const peerIdDto = getSharePeerIdDto(recipient, peerId);
    sendPeerIdMessage(stompClient, peerIdDto);
  }

  return { sendMessage, sendConversationOpen, sendInitiateVideoCall, sendPeerId };
}

export default useSocketAction;
