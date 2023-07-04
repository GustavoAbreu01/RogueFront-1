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
      <div className="row itens CardCart">
        <div className="column itens CardCart">
          <div className="itemContent CardCart" style={{ color: 'black' }}>
            <div id="imgItens CardCart">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="itemInfo CardCart">
              <Link to="/product">
                <h2 className="itemNome CardCart">W12 Monofásico</h2>
                <h2 id="itemPreco CardCart" className='itemPreco CardCart'>R$ 495<sup> 99</sup><sub className='subtext'>10x Sem juros</sub></h2>
                <p className="itemComplement CardCart">Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
              </Link>
            </div>
            <div className='buttons CardCart'>
              <button class="ui icon button CardCart">
                <i className="trash alternate icon CardCart"></i>
              </button>
              <div className="ui small buttons CardCart">
                <button className="ui button active plus">-</button>
                <div className='or' data-text="10"></div>
                <button className="ui button plus">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCart