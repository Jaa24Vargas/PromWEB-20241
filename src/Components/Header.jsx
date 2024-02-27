// Header.jsx
import React, { useState } from 'react';
import '../styles.css';

const Header = ({ onStartClick }) => {
  const [showCounterButtons, setShowCounterButtons] = useState(false);

  const handleStartClick = () => {
    onStartClick();
    setShowCounterButtons(true); // Mostrar los botones de contador al hacer clic en "Counter React"
  };

  return (
    <header className="container">
      <div className="title-container">
        <button className="title-button" onClick={handleStartClick}>
          Counter React
        </button>
      </div>
      {showCounterButtons && ( // Mostrar los botones del contador solo si showCounterButtons es true
        <div className="counter-buttons">
          <button className="increment-button" onClick={() => console.log('+')}>+</button>
          <button className="decrement-button" onClick={() => console.log('-')}>-</button>
          <button className="reset-button" onClick={() => console.log('Reiniciar')}>Reiniciar</button>
        </div>
      )}
    </header>
  );
};

export default Header;
