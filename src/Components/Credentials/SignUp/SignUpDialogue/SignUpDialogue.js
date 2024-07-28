import React from "react";
import PropTypes from "prop-types";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import { addNewUser } from "Actions/userActions.js";

function SignUpDialogue(props) {
  const { value: username, onChange: onChangeUsername } = useReactiveInput();
  const { value: name, onChange: onChangeName } = useReactiveInput();
  const { value: password, onChange: onChangePassword } = useReactiveInput();

  return (
    <div className="signup-dialogue dialogue-box">
      <div className="dialogue-box__header-wpr">Enter your credentials</div>
      <div className="dialogue-box__content-wpr credentials-form">
        <ReactiveInput value={name} onChange={onChangeName} label="Name" />
        <ReactiveInput value={username} onChange={onChangeUsername} label="Username" />
        <ReactiveInput value={password} onChange={onChangePassword} label="Password" />
        <button type="submit" onClick={() => addNewUser({ name, username, password })}>
          Submit
        </button>
      </div>
    </div>
  );
}

SignUpDialogue.propTypes = {};

export default SignUpDialogue;
