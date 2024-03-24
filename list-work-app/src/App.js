import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Form.jsx';
import Filtros from './components/Filter.jsx';
import Lista from './components/List.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleDeleteCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Homework App</h1>
      </header>
      {/* Renderizamos nuestros componentes */}
      <Formulario onAddTask={handleAddTask} />
      {/* Pasamos las tareas al componente Filtros */}
      <Filtros tasks={tasks} />
      {/* Pasamos las tareas al componente Lista */}
      <Lista tasks={tasks} setTasks={setTasks} />
      {/* Pasamos la función para borrar tareas completadas al componente Footer */}
      <Footer borrarTareasCompletadas={handleDeleteCompletedTasks} />
    </div>
  );
}

export default App;
