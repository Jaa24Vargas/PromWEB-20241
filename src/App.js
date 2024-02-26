import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Counter from './CounterComponent';
import ButtonComponent from './ButtonComponent';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  
  const handleStartClick = () => {
    setIsStarted(true);
  };

  const incrementCounter = () => {
    // Lógica para incrementar el contador
  };

  const decrementCounter = () => {
    // Lógica para decrementar el contador
  };

  const resetCounter = () => {
    // Lógica para reiniciar el contador
  };

  return (
    <div className="App">
      <Header onStartClick={handleStartClick} />
      {isStarted && (
        <>
          <ButtonComponent label="Incrementar" onClick={incrementCounter} />
          <Counter />
          <ButtonComponent label="Decrementar" onClick={decrementCounter} />
          <ButtonComponent label="Reiniciar" onClick={resetCounter} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
