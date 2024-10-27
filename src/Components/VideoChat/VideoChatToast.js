import { faCheck, faClose, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useVideoChatContext } from "Contexts/VideoChatContext.js";
import React from "react";

const VideoChatToast = ({ sender }) => {
  const { onAcceptRequest } = useVideoChatContext();

  return (
    <div>
      Video call request from {sender}
      <span
        className="clickable ml-2"
        onClick={() => {
          onAcceptRequest(sender);
        }}
      >
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <span className="clickable ml-2">
        <FontAwesomeIcon icon={faClose} />
      </span>
    </div>
  );
};

export default VideoChatToast;
