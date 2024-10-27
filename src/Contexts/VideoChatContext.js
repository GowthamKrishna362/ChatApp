import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import Peer from "peerjs";
import { useStompContext } from "./StompContext.js";
import { SOCKET_MESSAGE_TYPES } from "Constants/globalConstants.js";
import useSocketAction from "CustomHooks/api/useSocketAction.js";
import { toast } from "react-toastify";
import VideoChatToast from "Components/VideoChat/VideoChatToast.js";

const VideoChatContext = createContext();

export function VideoChatProvider({ children }) {
  const { subscribeForVideoSignalling } = useStompContext();
  const { sendPeerId, sendInitiateVideoCall } = useSocketAction();
  const [isVideoChatOpen, setIsVideoChatOpen] = useState(false);
  const [peerId, setPeerId] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef({});
  const remoteVideoRef = useRef({});
  const peerInstance = useRef(null);

  const handleVideoSignalMessages = (message) => {
    const messageBody = JSON.parse(message.body);
    switch (messageBody.socketMessageType) {
      case SOCKET_MESSAGE_TYPES.REQUEST_VIDEO:
        toast(<VideoChatToast sender={messageBody.sender} />);
        break;

      case SOCKET_MESSAGE_TYPES.SHARE_PEER_ID:
        toast(messageBody.peerId);
        initiateCall(messageBody.peerId);
    }
  };

  useEffect(() => {
    subscribeForVideoSignalling(handleVideoSignalMessages);
    const peer = new Peer();
    peer.on("open", (id) => {
      setPeerId(id);
    });

    peer.on("call", (call) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        setIsVideoChatOpen(true);
        localVideoRef.current.srcObject = stream;
        call.answer(stream);
        call.on("stream", (remoteStream) => {
          setRemoteStream(remoteStream);
          remoteVideoRef.current.srcObject = remoteStream;
        });
      });
    });
    peerInstance.current = peer;
    return () => peer.destroy();
  }, []);

  const initiateCall = (targetPeerId) => {
    setIsVideoChatOpen(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current.srcObject = stream;
      const call = peerInstance.current.call(targetPeerId, stream);
      call.on("stream", (remoteStream) => {
        setRemoteStream(remoteStream);
        remoteVideoRef.current.srcObject = remoteStream;
      });
    });
  };

  const requestVideoCall = (recipient) => {
    sendInitiateVideoCall(recipient);
  };

  const onAcceptRequest = (sender) => sendPeerId(sender, peerId);

  const closeVideoCall = () => {
    setIsVideoChatOpen(false);
    if (localVideoRef.current) {
      localVideoRef.current.getTracks().forEach((track) => track.stop());
      localVideoRef.current = null;
    }
    peerInstance.current.close();
    peerInstance.current = null;
  };

  const contextItems = {
    peerId,
    initiateCall,
    isVideoChatOpen,
    remoteStream,
    localVideoRef,
    remoteVideoRef,
    requestVideoCall,
    onAcceptRequest,
    closeVideoCall,
  };
  return <VideoChatContext.Provider value={contextItems}>{children}</VideoChatContext.Provider>;
}

export const useVideoChatContext = () => useContext(VideoChatContext);
