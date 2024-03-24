import React from 'react';

function Complete({ tasks }) {
  return (
    <div>
      <h2>Tareas Completadas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Complete;
