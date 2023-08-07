//Importando o React e o CSS
import React, { useState } from 'react';
import './SearchModal.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  
    // Redirect to the search results page with the query parameter
    window.location.href = `/product?query=${encodeURIComponent(suggestion)}`;
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
    }
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
    <div className="container_searchBar">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <i className="search icon input"></i>
      {showSuggestions && (
        <ul className="serarchBar_suggestions">
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