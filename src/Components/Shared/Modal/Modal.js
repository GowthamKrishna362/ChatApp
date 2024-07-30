import React from "react";
import PropTypes from "prop-types";

function Modal({ children }) {
  return <div>{children}</div>;
}

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
