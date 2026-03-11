import { useState } from "react";
import './Buscar.css';

export default function Buscar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value); // llama a la función para filtrar la lista
  };

  return (
    <div className="buscar-container">
      <input
        type="text"
        placeholder="Filtrar personajes..."
        value={query}
        onChange={handleChange}
      />
      <span className="icon">🔍</span>
    </div>
  );
}