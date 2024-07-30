import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./reactiveInput.scss";

const ReactiveInput = ({
  label = null,
  type = "text",
  value = null,
  onChange = () => {},
  isInline = false,
  placeholder = null,
} = {}) => {
  return (
    <div className="reactive-input">
      <div className={classNames("reactive-input__label", { "d-inline-block": isInline })}>{label}</div>
      <input
        className="reactive-input__input"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

ReactiveInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isInline: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default ReactiveInput;
