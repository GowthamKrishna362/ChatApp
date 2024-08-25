import React from "react";
import ReactiveInput from "Components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "Components/Shared/ReactiveInput/useReactiveInput.js";
import { useLoginUserMutation } from "features/apiSlice.js";
import { useAuth } from "Contexts/AuthContext.js";
import { toast } from "react-toastify";

const LoginDialogue = () => {
  const [loginUserTrigger] = useLoginUserMutation();
  const { login } = useAuth();

  const { value: username, onChange: onChangeUsername } = useReactiveInput();
  const { value: password, onChange: onChangePassword } = useReactiveInput();

  const onSubmit = async () => {
    try {
    const res = await loginUserTrigger({ username, password }).unwrap();
      login(username, res.token);
    } catch (e) {
      toast(e?.data?.message);
    }
  };

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
