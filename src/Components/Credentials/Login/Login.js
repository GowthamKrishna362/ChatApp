import React from 'react';

import DialogueLayout from 'Components/Shared/Layouts/DialogueLayout/DialogueLayout.js';

import LoginDialogue from './LoginDialogue/index.js';

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
