import React from 'react';

function Footer({ borrarTareasCompletadas }) {
  return (
    <div className="footer">
      {/* Agregamos un botón para borrar tareas completadas */}
      <button onClick={borrarTareasCompletadas}>Borrar Completadas</button>
    </div>
  );
}

export default Footer;
