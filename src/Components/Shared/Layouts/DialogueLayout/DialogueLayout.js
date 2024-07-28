import React from "react";
import PropTypes from "prop-types";
import "./dialogueLayout.scss";

function DialogueLayout({ children }) {
  return (
    <div className="dialogue-layout">
      <div className="dialogue-layout__bg-upper-section"></div>
      <div className="dialogue-layout__bg-lower-section"></div>
      <div className="dialogue-layout__dialogue-box">{children}</div>
    </div>
  );
}

DialogueLayout.propTypes = {
  children: PropTypes.element,
};

export default DialogueLayout;
