import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import './App.css'; // Mantener el diseño original

const App = () => {
  const [gifs, setGifs] = useState([]); // Estado para almacenar GIFs obtenidos
  const [isLoading, setIsLoading] = useState(false); // Estado para indicar carga
  const [favorites, setFavorites] = useState([]); // Estado para GIFs favoritos
  const [showAddButton, setShowAddButton] = useState(null); // Estado para mostrar el botón "Añadir"

  const fetchGifs = async (searchTerm) => {
    console.log("Fetching GIFs for term:", searchTerm); // Verificar el término de búsqueda
    const apiKey = "cHsa3HXv7Cn0Vc19P0aBJ6W5YYuIjpWG"; // Tu clave de API
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
      searchTerm
    )}&api_key=${apiKey}&limit=10`;

    setIsLoading(true); // Mostrar cargador mientras se obtienen resultados
    try {
      const response = await axios.get(url); // Realizar la solicitud
      setGifs(response.data.data); // Actualizar el estado con los resultados
    } catch (error) {
      console.error("Error fetching GIFs:", error); // Manejar errores
    } finally {
      setIsLoading(false); // Dejar de mostrar cargador
    }
  };

  const handleSearch = (term) => {
    fetchGifs(term); // Buscar GIFs con el término
  };

  // Función para añadir un GIF a favoritos
  const addToFavorites = (gif) => {
    if (!favorites.some((f) => f.id === gif.id)) {
      setFavorites([...favorites, gif]); // Añadir a favoritos
    }
  };

  // Función para eliminar un GIF de favoritos
  const removeFromFavorites = (gif) => {
    setFavorites(favorites.filter((f) => f.id !== gif.id)); // Eliminar de favoritos
  };

  return (
    <div className="app">
      <h1>Buscador de GIFs</h1>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? <p className="loading">Cargando...</p> : null}

      <div className="gif-grid">
        {gifs.map((gif) => (
          <div
            className={`gif-item ${
              favorites.some((f) => f.id === gif.id) ? 'favorited' : ''
            }`}
            key={gif.id}
            onMouseEnter={() => setShowAddButton(gif.id)} // Mostrar botón al pasar el mouse
            onMouseLeave={() => setShowAddButton(null)} // Ocultar al salir
          >
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            {showAddButton === gif.id && ( // Mostrar botón al pasar el mouse
              <button onClick={() => addToFavorites(gif)}>Añadir a Favoritos</button>
            )}
            <p>{gif.title}</p>
          </div>
        ))}
      </div>

      <h2>Favoritos</h2>
      <div className="gif-grid">
        {favorites.map((gif) => (
          <div className="gif-item" key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <button onClick={() => removeFromFavorites(gif)}>Eliminar</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
