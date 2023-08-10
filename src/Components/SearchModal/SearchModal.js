//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './SearchModal.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
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

  const renderDesktopView = () => (
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
  )

  const renderTabletView = () => (
    <div className="container_searchBar_tablet">
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
  )

  const renderMobileView = () => (
    <div className="container_searchBar_mobile">

      <i className="search icon inputmobile"></i>
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
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}

export default SearchBar;