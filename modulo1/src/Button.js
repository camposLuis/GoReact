import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Somar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
