import React from 'react';

function Pending({ tasks }) {
  return (
    <div>
      <h2>Tareas Pendientes</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pending;
