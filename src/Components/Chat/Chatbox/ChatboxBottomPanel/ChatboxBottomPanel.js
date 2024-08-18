import React from "react";
import "./chatboxBottomPanel.scss";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import useSocketAction from "CustomHooks/api/useSocketAction.js";

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
