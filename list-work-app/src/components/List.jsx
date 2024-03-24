// Componente List.jsx
import React from 'react';

function Lista({ tasks, setTasks }) {
  // Función para manejar el cambio de estado de la tarea completada
  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
    console.log("Tareas actuales:", tasks);
    
  return (
    <div className="lista">
      <h2>Tareas Agregadas</h2>
      {/* Mapeamos las tareas y renderizamos cada una */}
      {tasks.map((task, index) => (
        <div className="tarea" key={index}>
          <input className='input'
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(index)}
          />
          {/* Establecemos el estilo del fondo de la tarea según su estado */}
          <span style={{}}>
              {task.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Lista;
