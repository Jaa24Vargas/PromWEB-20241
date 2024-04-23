import React from 'react';

function Lista({ tasks, setTasks, mensajeExito }) {
  // Función para manejar el cambio de estado de la tarea completada
  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="lista">
      <h2>Tareas Agregadas</h2>
      {/* Mostrar el mensaje de éxito si está activado */}
      {mensajeExito && (
        <div className="mensaje-exito">
          <p>¡Enviado con éxito!</p>
        </div>
      )}
      {/* Mapeamos las tareas y renderizamos cada una */}
      {tasks.map((task, index) => (
        <div className="tarea" key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(index)}
          />
          <span>{task.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Lista;
