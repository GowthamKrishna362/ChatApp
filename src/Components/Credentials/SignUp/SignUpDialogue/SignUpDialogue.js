import React from "react";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import { addNewUser } from "Actions/userActions.js";
import { useAuth } from "Contexts/AuthContext.js";

function SignUpDialogue() {
  const { login } = useAuth();
  const { value: username, onChange: onChangeUsername } = useReactiveInput();
  const { value: name, onChange: onChangeName } = useReactiveInput();
  const { value: password, onChange: onChangePassword } = useReactiveInput();

  const onSubmit = async () => {
    try {
      const res = await addNewUser({ username, password, name });
      login(username);
      return res;
    } catch (e) {
      return e;
    }
  };

  return (
    <div className="signup-dialogue dialogue-box">
      <div className="dialogue-box__header-wpr">Enter your credentials</div>
      <div className="dialogue-box__content-wpr credentials-form">
        <ReactiveInput value={name} onChange={onChangeName} label="Name" />
        <ReactiveInput value={username} onChange={onChangeUsername} label="Username" />
        <ReactiveInput value={password} onChange={onChangePassword} label="Password" />
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        <a href="/login">Existing user?</a>
      </div>
    </div>
  );
}

SignUpDialogue.propTypes = {};

export default SignUpDialogue;
