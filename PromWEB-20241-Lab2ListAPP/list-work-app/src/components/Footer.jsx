import React from 'react';

function Footer({ borrarTareasCompletadas, onSendCompletedTasks }) {
  return (
    <div className="footer">
      {/* Botón para borrar tareas completadas */}
      <button onClick={borrarTareasCompletadas}>Borrar Completadas</button>

      {/* Botón para enviar tareas completadas y mostrar confirmación */}
      <button onClick={onSendCompletedTasks}>Enviar</button> {/* Botón para enviar */}
    </div>
  );
}

export default Footer;