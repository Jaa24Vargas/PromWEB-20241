// Header.js
import React from 'react';
import './styles.css';

const Header = ({ onStartClick }) => {
  return (
    <header className="container">
      <button
        className="title-button"
        style={{ left: '400px', top: '129px', width: '730px', height: '200px' }}
        onClick={onStartClick} // Llamar a la función onStartClick al hacer clic en el botón
      >
        Counter React
      </button>
    </header>
  );
};

export default Header;
