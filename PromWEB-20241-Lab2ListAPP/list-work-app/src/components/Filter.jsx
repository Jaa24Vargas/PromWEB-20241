import React, { useState } from 'react';
import Complete from '../const/Complete';
import Pending from '../const/Pending';
import All from '../const/All';

function Filtros({ tasks }) {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('All'); // Estado para almacenar el filtro seleccionado

  // Función para cambiar el filtro seleccionado
  const handleFiltroChange = (event) => {
    setFiltroSeleccionado(event.target.value);
  };

  // Filtrar las tareas según el estado seleccionado
  const filtrarTareas = () => {
    if (filtroSeleccionado === 'All') {
      return tasks;
    } else if (filtroSeleccionado === 'complete') {
      return tasks.filter(task => task.completed); // Devuelve solo las tareas completadas
    } else if (filtroSeleccionado === 'pending') {
      return tasks.filter(task => !task.completed); // Devuelve solo las tareas pendientes
    }
  };

  const tareasFiltradas = filtrarTareas();

  
      // Dentro del componente Filtros
    return (
      <div className="filtros">
        {/* Renderizar los radio buttons para los filtros */}
        <label>
          <input type="radio" name="filtro" value="All" checked={filtroSeleccionado === 'All'} onChange={handleFiltroChange} />
          All
        </label>

        <label>
          <input type="radio" name="filtro" value="complete" checked={filtroSeleccionado === 'complete'} onChange={handleFiltroChange} />
          Complete
        </label>

        <label>
          <input type="radio" name="filtro" value="pending" checked={filtroSeleccionado === 'pending'} onChange={handleFiltroChange} />
          Pending
        </label>

        {/* Mostrar las tareas filtradas en las constantes correspondientes */}
        <div className="tareas-filtradas">
          {filtroSeleccionado === 'All' && <All tasks={tasks} />} {/* Renderizar All cuando filtro seleccionado es All */}
          {filtroSeleccionado === 'complete' && <Complete tasks={tareasFiltradas} />} {/* Renderizar Complete cuando filtro seleccionado es complete */}
          {filtroSeleccionado === 'pending' && <Pending tasks={tareasFiltradas} />} {/* Renderizar Pending cuando filtro seleccionado es pending */}
        </div>
      </div>
    );

}

export default Filtros;
