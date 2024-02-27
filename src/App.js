// App.js
import React, { useState } from 'react';
import './App.css'; // Estilos globales de la aplicación
import Header from './Components/Header';
import Footer from './Components/Footer';
import Counter from './Components/CounterComponent';
import ButtonComponent from './ButtonComponent';
import './styles.css'; // Estilos específicos de la aplicación

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [counter, setCounter] = useState(0); // Estado para el contador

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const randomizeCircle = () => {
    // Generar valores aleatorios para tamaño, posición y color del círculo
    const size = Math.floor(Math.random() * 100) + 50; // Tamaño entre 50 y 150
    const left = Math.floor(Math.random() * 700); // Posición horizontal entre 0 y 700
    const top = Math.floor(Math.random() * 700); // Posición vertical entre 0 y 700
    const color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`; // Color aleatorio

    // Crear el círculo dentro del contenedor
    const container = document.querySelector('.container');
    const circle = document.createElement('div');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = color;
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;

    // Agregar el círculo al contenedor
    container.appendChild(circle);

    // Desaparecer el círculo después de 1 segundo
    setTimeout(() => {
      container.removeChild(circle);
    }, 1000);
  };

  return (
    <div className={`App${isStarted ? ' started' : ''}`}>
      <Header onStartClick={handleStartClick} />
      {isStarted && (
        <>
          <Counter counter={counter} />
          <div className="counter-buttons">
                    <ButtonComponent label="+" onClick={() => { incrementCounter(); randomizeCircle(); }} />
                    <ButtonComponent label="-" onClick={decrementCounter} />
                    <ButtonComponent label="Reiniciar" onClick={resetCounter} />
            </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
