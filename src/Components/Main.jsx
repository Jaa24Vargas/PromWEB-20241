import React, { useState } from 'react';
import CounterComponent from './CounterComponent';

const Main = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    backgroundColor: 'lightblue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <main>
      <CounterComponent counter={counter} />
      <button style={buttonStyle} onClick={incrementCounter}>Incrementar</button>
      <button style={buttonStyle} onClick={decrementCounter}>Decrementar</button>
      <button style={buttonStyle} onClick={resetCounter}>Reiniciar</button>
    </main>
  );
};

export default Main;
