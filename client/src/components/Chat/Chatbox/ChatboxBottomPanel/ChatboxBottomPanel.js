import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import ReactiveInput from "@components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "@customHooks/useReactiveInput.js";
import useSocketAction from "@customHooks/api/useSocketAction.js";

import "./chatboxBottomPanel.scss";

export default function ChatboxBottomPanel() {
  const { sendMessage } = useSocketAction();
  const { value, onChange, onKeyDown } = useReactiveInput({ onSubmit: sendMessage, clearOnSubmit: true });

  return (
    <div className="chatbox-bottom-panel">
      <div className="left-icons-wpr">
        <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </div>
      <div className="message-box-wpr">
        <ReactiveInput value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Type a message" />
      </div>
      <div className="right-icons-wpr"></div>
    </div>
  );
}
