import React from "react";
import { toast } from "react-toastify";

import ReactiveInput from "@components/Shared/ReactiveInput/ReactiveInput.js";
import useReactiveInput from "@customHooks/useReactiveInput.js";
import { useAuth } from "@contexts/AuthContext.js";
import { useAddNewUserMutation } from "@features/apiSlice.js";
import { PAGE_ROUTES } from "@constants/pageRoutes.js";

function SignUpDialogue() {
  const { login } = useAuth();
  const [addNewUserTrigger] = useAddNewUserMutation();
  const { value: username, onChange: onChangeUsername } = useReactiveInput();
  const { value: name, onChange: onChangeName } = useReactiveInput();
  const { value: password, onChange: onChangePassword } = useReactiveInput();

  const onSubmit = async () => {
    try {
      const res = await addNewUserTrigger({ username, name, password }).unwrap();
      login(username, res.token);
    } catch (e) {
      toast(e.data.message);
    }
  };

  return (
    <div className="signup-dialogue dialogue-box">
      <div className="dialogue-box__header-wpr">Enter your credentials</div>
      <div className="dialogue-box__content-wpr credentials-form">
        <ReactiveInput value={name} onChange={onChangeName} label="Name" />
        <ReactiveInput value={username} onChange={onChangeUsername} label="Username" />
        <ReactiveInput value={password} onChange={onChangePassword} label="Password" type="password" />
        <button type="submit" onClick={() => onSubmit()}>
          Submit
        </button>
        <a href={PAGE_ROUTES.LOGIN}>Existing user?</a>
      </div>
    </div>
  );
}

SignUpDialogue.propTypes = {};

export default SignUpDialogue;
