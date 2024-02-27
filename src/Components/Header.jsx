// Header.jsx
import React, { useState } from 'react';
import '../styles.css';

const Header = ({ onStartClick }) => {
  const [restartMessageVisible, setRestartMessageVisible] = useState(false);

  const handleRestartClick = () => {
    setRestartMessageVisible(true);
    setTimeout(() => {
      setRestartMessageVisible(false);
    }, 3000);
  };

  return (
    <header className="container">
      <div className="title-container">
        <button
          className="title-button"
          onClick={onStartClick}
        >
          Counter React
        </button>
      </div>
      {restartMessageVisible && <p className="message">Reinicio exitoso</p>}
      <button
        className="hub-button"
        onClick={handleRestartClick}
      >
        Hub
      </button>
    </header>
  );
};

export default Header;

