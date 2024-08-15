import React from "react";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import useLoginUser from "CustomHooks/api/useLoginUser.js";

const LoginDialogue = () => {
  const { value: username, onChange: onChangeUsername } = useReactiveInput();
  const { value: password, onChange: onChangePassword } = useReactiveInput();
  const onSubmit = useLoginUser();

  return (
    <div className="login-dialogue dialogue-box">
      <div className="dialogue-box__header-wpr">Enter your login credentials</div>
      <div className="dialogue-box__content-wpr credentials-form">
        <ReactiveInput value={username} onChange={onChangeUsername} label="Username" />
        <ReactiveInput value={password} onChange={onChangePassword} label="Password" type="password" />
        <button
          type="submit"
          onClick={() => {
            onSubmit(username, password);
          }}
        >
          Submit
        </button>
        <a href="/signup">New user?</a>
      </div>
    </div>
  );
};

export default LoginDialogue;
