import React from 'react';

import DialogueLayout from '@components/Shared/Layouts/DialogueLayout/DialogueLayout.js';

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
