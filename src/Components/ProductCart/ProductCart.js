import React from 'react'
import './ProductCart.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import motors from "../../assets/img/motores.png"


function ProductCart() {
  const [verificacao, setVerificacao] = useState(false);


  const [isOpen, setIsOpen] = useState(false);


  const handleDropdownChange = (event, { value }) => {
    console.log('Selected value:', value);
  };


  const menuOptions = [
    { key: 'monofasico', value: 'monofasico', text: 'Monofásico' },
    { key: 'trifasicoBT', value: 'trifasicoBT', text: 'Trifásico - Baixa Tensão' },
    { key: 'trifasicoAT', value: 'trifasicoAT', text: 'Trifásico - Alta Tensão' },
    { key: 'sincronos', value: 'sincronos', text: 'Síncronos' },
    { key: 'aneis', value: 'aneis', text: 'Anéis' },
  ];




  const teste = () => {
    console.log('aaaaa')
  };




  return (
    <>
      <div className="row itens Horizontal">
        <div className="column itens Horizontal">
          <div className="itemContent Horizontal" style={{ color: 'black' }}>
            <div id="imgItens Horizontal">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="itemInfo Horizontal">
              <Link to="/product">
                <h2 className="itemNome Horizontal">W12 Monofásico</h2>
                <h2 id="itemPreco Horizontal" className='itemPreco Horizontal'>R$ 495<sup> 99</sup><sub className='subtext'>10x Sem juros</sub></h2>
                <p className="itemComplement Horizontal">Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
              </Link>
            </div>
            <div className='buttons'>
              <button class="ui icon button">
                <i className="trash alternate icon"></i>
              </button>
              <div className="ui small buttons">
                <button className="ui button active">-</button>
                <div className='or' data-text="10"></div>
                <button className="ui button">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




export default ProductCart