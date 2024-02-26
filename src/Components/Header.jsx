import React, { useState } from 'react';
import '../styles.css';

const Header = ({ onStartClick, onRestartClick, onGoToHomeClick }) => {
  const [restartMessageVisible, setRestartMessageVisible] = useState(false);

  const handleRestartClick = () => {
    setRestartMessageVisible(true);
    setTimeout(() => {
      setRestartMessageVisible(false);
    }, 3000);
    onRestartClick();
  };

  return (
    <header className="container">
      <button
        className="title-button"
        style={{ left: '400px', top: '129px', width: '730px', height: '200px' }}
        onClick={onStartClick} // Llamar a la función onStartClick al hacer clic en el botón
      >
        Counter React
      </button>
      {restartMessageVisible && <p style={{ textAlign: 'center' }}>Reinicio exitoso</p>}
      <button
        className="hub-button"
        style={{ position: 'absolute', bottom: '10px', left: '10px' }}
        onClick={handleRestartClick}
      >
        Hub
      </button>
    </header>
  );
};

export default Header;
