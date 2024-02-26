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
  
  const handleStartClick = () => {
    setIsStarted(true);
  };

  function incrementCounter() {
    // Lógica para incrementar el contador
  }

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
