import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Form.jsx';
import Filtros from './components/Filter.jsx';
import Lista from './components/List.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleDeleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const handleSendCompletedTasks = () => {
    // Borra las tareas completadas y muestra el mensaje de confirmación
    setTasks(tasks.filter((task) => !task.completed));
    setShowConfirmation(true);

    // Oculta el mensaje de confirmación después de 2 segundos
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Homework App</h1>
      </header>
      <Formulario onAddTask={handleAddTask} />
      <Filtros tasks={tasks} />
      <Lista tasks={tasks} setTasks={setTasks} />

      {/* Mostrar el mensaje de confirmación si está visible */}
      {showConfirmation && (
        <div className="confirmation-message">¡Tarea enviada con éxito!</div>
      )}

      <Footer
        borrarTareasCompletadas={handleDeleteCompletedTasks}
        onSendCompletedTasks={handleSendCompletedTasks}
      />
    </div>
  );
}

export default App;