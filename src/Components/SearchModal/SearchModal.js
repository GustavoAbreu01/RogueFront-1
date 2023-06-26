import React, { useState } from 'react';
import lupa from '../../assets/img/lupa.png';
import  './style.css';

function SearchBar() {
  const [abrirModal, setAbrirModal] = useState(false);

  const abrir = () => {
  };

  const abrirEfechar = () => {
  };

  return (
    <div className="SearchBar" onClick={abrir}>
      <input  type="text" name="SearchBar" placeholder="   Pesquisar..." class="Bar"/>
      <img className="imagem" src={lupa} width="30" height="30" alt="Lupa" />
      {abrirModal && (
        <div className="abrirModal">
          <div className="modal">
          </div>
          <div className="fundo" onClick={abrirEfechar}></div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;