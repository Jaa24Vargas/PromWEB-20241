// CounterComponent.js
import React from 'react';

const CounterComponent = ({ counter }) => {
  return (
    <div>
      <p>Counter: {counter}</p> {/* Mostrar el valor del contador */}
    </div>
  );
};

export default CounterComponent;
