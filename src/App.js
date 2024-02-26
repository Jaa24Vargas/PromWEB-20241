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

  function handleStartClick() {
    setIsStarted(true);
  }

  function incrementCounter(value) {
    // Incrementar el contador según el valor pasado
    setCounter(prevCounter => prevCounter + value);
  }

  function decrementCounter(value) {
    // Decrementar el contador según el valor pasado
    setCounter(prevCounter => prevCounter - value);
  }

  const resetCounter = () => {
    // Reiniciar el contador
    setCounter(0);
  };

  const [showRestartMessage, setShowRestartMessage] = useState(false);

  const handleRestartClick = () => {
    resetCounter();
    setShowRestartMessage(true);
    setTimeout(() => {
      setShowRestartMessage(false);
    }, 3000); // Mostrar el mensaje por 3 segundos
  };

  const handleGoToHomeClick = () => {
    setIsStarted(false);
    setCounter(0);
  };

  return (
    <div className="App">
      <Header
        onStartClick={handleStartClick}
        onRestartClick={handleRestartClick}
        onGoToHomeClick={handleGoToHomeClick}
      />
      {isStarted && (
        <>
          <ButtonComponent label="+1" onClick={() => incrementCounter(1)} />
          <ButtonComponent label="+5" onClick={() => incrementCounter(5)} />
          <Counter counter={counter} />
          <ButtonComponent label="-1" onClick={() => decrementCounter(1)} />
          <ButtonComponent label="-5" onClick={() => decrementCounter(5)} />
          <ButtonComponent label="Reiniciar" onClick={handleRestartClick} />
        </>
      )}
      {showRestartMessage && (
        <div className="restart-message">Reinicio exitoso</div>
      )}
      <Footer />
    </div>
  );
}

export default App;
