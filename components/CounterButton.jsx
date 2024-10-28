import React from 'react';

const CounterButton = ({ onClick, disabled, className, label }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`counter-button ${className}`}
    >
      {label}
    </button>
  );
};

export default CounterButton;