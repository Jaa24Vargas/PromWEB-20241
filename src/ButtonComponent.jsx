// ButtonComponent.js
import React from 'react';

const ButtonComponent = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

export default ButtonComponent;
