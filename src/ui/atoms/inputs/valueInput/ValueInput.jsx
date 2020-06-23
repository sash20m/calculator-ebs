/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/ValueInput.scss'

const propTypes = {
  inputValue: PropTypes.string.isRequired,
};

function ValueInput(props) {
  const { inputValue} = props;
  return (
    <input className="input" value={inputValue} />
  );
}

ValueInput.propTypes = propTypes;

export default ValueInput;
