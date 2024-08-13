import React from "react";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import useNewUser from "CustomHooks/api/useNewUser.js";

function SignUpDialogue() {
  const { value: username, onChange: onChangeUsername } = useReactiveInput();
  const { value: name, onChange: onChangeName } = useReactiveInput();
  const { value: password, onChange: onChangePassword } = useReactiveInput();
  const onSubmit = useNewUser()

  return (
    <div className="signup-dialogue dialogue-box">
      <div className="dialogue-box__header-wpr">Enter your credentials</div>
      <div className="dialogue-box__content-wpr credentials-form">
        <ReactiveInput value={name} onChange={onChangeName} label="Name" />
        <ReactiveInput value={username} onChange={onChangeUsername} label="Username" />
        <ReactiveInput value={password} onChange={onChangePassword} label="Password" />
        <button type="submit" onClick={() => onSubmit(username, password, name)}>
          Submit
        </button>
        <a href="/login">Existing user?</a>
      </div>
    </div>
  );
}

SignUpDialogue.propTypes = {};

export default SignUpDialogue;
