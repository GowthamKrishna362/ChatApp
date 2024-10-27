import React from "react";
import Modal from "react-modal";
import useModal from "@customHooks/useModal.js";
import "./videoChatModal.scss";
import { useVideoChatContext } from "@contexts/VideoChatContext.js";

const VideoChatModal = () => {
  const { localVideoRef, isVideoChatOpen, closeVideoCall, remoteVideoRef, remoteStream } = useVideoChatContext();
  const modalProps = useModal();
  const { defaultStyles } = modalProps;
  const closeModal = () => closeVideoCall();

  console.log(localVideoRef);
  
  return (
    <Modal
      isOpen={isVideoChatOpen}
      onRequestClose={closeModal}
      style={defaultStyles}
      portalClassName="video-chat-modal"
    >
      <div className="video-chat-wpr"></div>
      <video ref={localVideoRef} autoPlay style={{ width: "45%", border: "1px solid black" }}></video>
      <video ref={remoteVideoRef} autoPlay style={{ width: "45%", border: "1px solid black" }}></video>
    </Modal>
  );
};

export default VideoChatModal;
