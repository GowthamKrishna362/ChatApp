import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './reactiveInput.scss';

const ReactiveInput = ({
  label = null,
  type = 'text',
  value = '',
  onChange = () => {},
  isInline = false,
  placeholder = null,
  onKeyDown = () => {},
} = {}) => {
  return (
    <div className="reactive-input">
      {label && <div className={classNames('reactive-input__label', { 'd-inline-block': isInline })}>{label}</div>}
      <input
        className="reactive-input__input"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
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
  onKeyDown: PropTypes.func,
};

export default ReactiveInput;
