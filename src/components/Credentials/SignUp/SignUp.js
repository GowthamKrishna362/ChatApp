import PropTypes from 'prop-types';
import React from 'react';

import DialogueLayout from '@components/Shared/Layouts/DialogueLayout/DialogueLayout.js';

import SignUpDialogue from './SignUpDialogue/SignUpDialogue.js';

function SignUp(props) {
  return (
    <DialogueLayout>
      <SignUpDialogue />
    </DialogueLayout>
  );
}

SignUp.propTypes = {};

export default SignUp;
