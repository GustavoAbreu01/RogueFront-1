import React, { useState } from 'react';
import lupa from '../../assets/img/lupa.png';
import  './SearchModal.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  
    // Lógica para mostrar/ocultar as sugestões com base no valor do campo de pesquisa
    setShowSuggestions(value.length > 0);
  
    if (value.length === 0) {
      setShowSuggestions(false);
    }

    suggestions.push(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const suggestions = [
    'React',
    'Angular',
    'Vue.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
  ];

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;