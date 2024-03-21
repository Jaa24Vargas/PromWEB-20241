import React, { useState } from 'react';

function Formulario({ onAddTask }) {
  const [task, setTask] = useState('');
  const [isTaskValid, setIsTaskValid] = useState(false);

  const handleTaskChange = (event) => {
    const inputValue = event.target.value;
    setTask(inputValue);
    // Verifica si hay texto en el campo y actualiza el estado de la validez de la tarea
    setIsTaskValid(inputValue.trim().length > 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task); // Enviamos la nueva tarea al componente App
      setTask(''); // Reiniciamos el estado del campo de tarea
      // Desactiva el botón después de enviar la tarea
      setIsTaskValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formulario">
        <h2>Agregar Tarea</h2>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Escribe tu tarea..."
          className="input-tarea"
        />
        {/* Usamos el estado isTaskValid para habilitar o deshabilitar el botón y establecer el color */}
        <button className={`btn ${!isTaskValid ? 'btn-desactivado' : 'btn-agregar'}`} disabled={!isTaskValid}>
          Agregar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
