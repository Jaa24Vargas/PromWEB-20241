// Filtros.jsx
import React from 'react';
import All from '../const/All';
import Complete from '../const/Complete';
import Pending from '../const/Pending';

function Filtros() {
  // Definimos las opciones de los filtros como un arreglo de objetos
  const opciones = [
    { id: 1, label: 'All', componente: <All /> },
    { id: 2, label: 'Complete', componente: <Complete /> },
    { id: 3, label: 'Pending', componente: <Pending /> }
  ];

  return (
    <div className="filtros">
      {opciones.map((opcion) => (
        <label key={opcion.id}>
          <input type="radio" name="filtro" value={opcion.id} />
          {opcion.label}
        </label>
      ))}
    </div>
  );
}

export default Filtros;
