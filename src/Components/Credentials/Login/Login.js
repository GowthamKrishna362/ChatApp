import React from "react";
import LoginDialogue from "./LoginDialogue/index.js";
import DialogueLayout from "Components/Shared/Layouts/DialogueLayout/DialogueLayout.js";

const Login = () => {
  return (
    <div className="login">
      <DialogueLayout>
        <LoginDialogue />
      </DialogueLayout>
    </div>
  );
};

export default Login;
