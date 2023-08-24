//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './SearchModal.css';


//icons
import { BiRightArrowAlt } from 'react-icons/bi';
import { ProductService } from '../../Service';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [totally, setTotally] = useState([]);
  const [product, setProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);


  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [disableScroll]);

  function toggleModal() {
    setSearchTerm('');
    setShowSuggestions(false);
    setOpenModal(!openModal);
    setDisableScroll(!disableScroll);
  }

  useEffect(() => {
    loadProductSuggestions();
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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
    }
  };

  const loadProductSuggestions = async () => {
    try {
      const products = await ProductService.findAllProducts();
      const productNames = products.map(product => product.name);
      console.log(products);
      setProduct(products);
      setTotally(productNames);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setProduct([]);
      setTotally([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    const selectedProduct = product.find(product => product.name.toLowerCase() === suggestion.toLowerCase());
    if (selectedProduct) {
      window.location.href = `/product/${selectedProduct.code}`;
    } else {
      console.error(`Produto correspondente a "${suggestion}" não encontrado.`);
    }
  }

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
          {totally
            .filter((totally) =>
              totally.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((totally, index) => (
              <li className='li_search_desktop'
                key={index}
                onClick={() => handleSuggestionClick(totally)}
              >
                <BiRightArrowAlt className='arrow_search_desktop' />
                {totally}
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
          {totally
            .filter((totally) =>
              totally.toLowerCase().includes(searchTerm.toLowerCase())
            ).slice(0, 10)
            .map((totally, index) => (
              <li className='li_search_tablet'
                key={index}
                onClick={() => handleSuggestionClick(totally)}
              >
                <BiRightArrowAlt className='arrow_search_tablet' />
                {totally}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
  const renderMobileView = () => (
    <div className="container_searchBar_mobile" >
      {openModal && (
        <div className="modal_search">
          <div className="modal-content_search">
            <div className='div_inputs_search_modal'>
              <input type='text' placeholder='Pesquisar...' className='input_modal_seacrh_mobile'
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                id="input_search"
              ></input>
              <i className="search icon inputmobile_modal" ></i>
            </div>
          </div>
        </div>
      )}
      {!openModal ? (
        <i className="search icon inputmobile" onClick={toggleModal} ></i>
      ) : (
        <i className="close icon inputmobile" onClick={toggleModal} ></i>
      )}
      {showSuggestions && (
        <ul className="serarchBar_suggestions_mobile">
          {totally
            .filter((totally) =>
              totally.toLowerCase().includes(searchTerm.toLowerCase())
            ).slice(0, 10)
            .map((suggestion, index) => (
              <li className='li_search_mobile'
                key={index}
                onClick={() => handleSuggestionClick(totally)}
              >
                <BiRightArrowAlt className='arrow_search_mobile' />
                {totally}
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