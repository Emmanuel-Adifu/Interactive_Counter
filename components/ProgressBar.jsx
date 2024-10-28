import React from 'react';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;