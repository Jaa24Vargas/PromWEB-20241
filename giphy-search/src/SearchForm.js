import React, { useState, useEffect } from 'react';
import debounce from 'just-debounce-it';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Crear función debounced
  const debouncedSearch = debounce((term) => {
    if (onSearch) {
      onSearch(term);
    }
  }, 500); // 500 ms de retraso

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term); // Llamar a la función debounced
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debouncedSearch(searchTerm); // Para el botón de búsqueda
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Buscar GIFs..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
