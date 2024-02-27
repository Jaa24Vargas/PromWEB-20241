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
  const [circles, setCircles] = useState([]); // Estado para los círculos
  const [numberPosition, setNumberPosition] = useState({ x: 400, y: 400 }); // Estado para la posición del número

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
    generateRandomCircles();
    setNumberPosition({ x: 400, y: 400 }); // Actualiza la posición del número
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
    generateRandomGradient();
  };

  const resetCounter = () => {
    setCounter(0);
    setCircles([]); // Limpiar los círculos al reiniciar
    generateRandomGradient(); // Generar un nuevo degradado al reiniciar
  };

  const generateRandomCircles = () => {
    // Generar un nuevo círculo aleatorio y agregarlo a la lista
    const newCircle = {
      size: Math.floor(Math.random() * 100) + 50, // Tamaño entre 50 y 150
      left: Math.floor(Math.random() * 700), // Posición horizontal entre 0 y 700
      top: Math.floor(Math.random() * 700), // Posición vertical entre 0 y 700
      color: `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`, // Color aleatorio
    };
    setCircles(prevCircles => [...prevCircles, newCircle]);

    // Desaparecer el círculo después de 1 segundo
    setTimeout(() => {
      setCircles(prevCircles => prevCircles.filter(circle => circle !== newCircle));
    }, 1000);
  };

  const generateRandomGradient = () => {
    // Generar un nuevo degradado aleatorio
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16); // Color hexadecimal aleatorio
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16); // Color hexadecimal aleatorio
    const newGradient = `linear-gradient(135deg, #${randomColor1}, #${randomColor2})`;
    
    // Aplicar el nuevo degradado al fondo
    const app = document.querySelector('.App');
    app.style.background = newGradient;

    // Restaurar el degradado principal después de 1 segundo
    setTimeout(() => {
      app.style.background = 'linear-gradient(135deg, #FDFD96, #C4A2F9)';
    }, 1000);
  };

  return (
    <div className={`App${isStarted ? ' started' : ''}`}>
      <Header onStartClick={handleStartClick} />
      {isStarted && (
        <>
          <Counter counter={counter} />
          <div className="counter-buttons">
            <ButtonComponent label="+" onClick={incrementCounter} />
            <ButtonComponent label="-" onClick={decrementCounter} />
            <ButtonComponent label="Reiniciar" onClick={resetCounter} />
          </div>
          <div className="circle-container">
            {circles.map((circle, index) => (
              <div
                key={index}
                className="circle"
                style={{
                  width: `${circle.size}px`,
                  height: `${circle.size}px`,
                  backgroundColor: circle.color,
                  borderRadius: '50%',
                  position: 'absolute',
                  left: `${circle.left}px`,
                  top: `${circle.top}px`,
                }}
              />
            ))}
          </div>
          {/* Número */}
          <div className="number" style={{ position: 'absolute', top: numberPosition.y - 50, left: numberPosition.x, fontSize: '24px', fontWeight: 'bold' }}>
            {counter}
          </div>
        </>
      )}
      <Footer />
      {/* Botones grises cerca del botón "Counter React" */}
      {isStarted && (
        <div className="counter-buttons-grises">
          <ButtonComponent label="+" onClick={incrementCounter} />
          <ButtonComponent label="-" onClick={decrementCounter} />
          <ButtonComponent label="Reiniciar" onClick={resetCounter} />
        </div>
      )}
    </div>
  );
}

export default App;


