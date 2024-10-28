import React, { useEffect } from 'react';

const Confetti = () => {
  useEffect(() => {
    const colors = ['#2563eb', '#dc2626', '#16a34a', '#eab308', '#9333ea'];
    const confettiCount = 100;
    const container = document.querySelector('.confetti-container');

    // Clear any existing confetti
    container.innerHTML = '';

    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animation = `confetti ${1 + Math.random() * 2}s ease-out forwards`;
      confetti.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(confetti);
    }

    // Cleanup
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div className="confetti-container" />;
};

export default Confetti;