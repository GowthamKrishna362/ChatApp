import PropTypes from 'prop-types';
import React from 'react';

function Modal({ children }) {
  return <div>{children}</div>;
}

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
