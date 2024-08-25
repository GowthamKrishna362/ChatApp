import React from 'react';
import PropTypes from 'prop-types';
import SignUpDialogue from './SignUpDialogue/SignUpDialogue.js';
import DialogueLayout from 'Components/Shared/Layouts/DialogueLayout/DialogueLayout.js';

function SignUp(props) {
  return (
    <DialogueLayout>
      <SignUpDialogue />
    </DialogueLayout>
  );
}

SignUp.propTypes = {};

export default SignUp;
