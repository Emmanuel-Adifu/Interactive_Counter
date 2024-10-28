import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import CounterButton from './CounterButton';
import Confetti from './Confetti';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [showCelebration, setShowCelebration] = useState(false);
  const increment = () => {
    if (count < 100) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (count === 100) {
      setAlert({
        show: true,
        message: 'Maximum value reached!',
        type: 'max'
      });
      setShowCelebration(true);
      // Hide celebration after 5 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setAlert({
        show: true,
        message: 'Minimum value reached!',
        type: 'min'
      });
    } else {
      setAlert({ show: false, message: '', type: '' });
    }
  }, [count]);

  return (
    <div className="counter-container">
      {showCelebration && (
        <>
          <Confetti />
          <div className="celebration-message">
            <div className="celebration-text">Congratulations!🎉</div>
            <div>You've reached the maximum value!</div>
          </div>
        </>
      )}  
      <h1 className="counter-title"><strong>Counter</strong></h1>
      
      <div className={`counter-value ${count === 0 || count === 100 ? 'limit' : ''}`}>
        {count}
      </div>

      <ProgressBar value={count} />

      <div className="buttons-container">
        <CounterButton 
          onClick={decrement}
          disabled={count === 0}
          className="decrement"
          label="-"
        />
        <CounterButton 
          onClick={reset}
          className="reset"
          label="Reset"
        />
        <CounterButton 
          onClick={increment}
          disabled={count === 100}
          className="increment"
          label="+"
        />
      </div>

      {alert.show && (
        <div className={`alert-message ${alert.type}`}>
          {alert.message}
        </div>
      )}
    </div>
  );
};

export default Counter;