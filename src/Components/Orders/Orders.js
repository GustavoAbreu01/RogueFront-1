import React from 'react'
import './Orders.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import motors from "../../assets/img/motores.png"


function Orders() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
     
     <div className="productCard">
      <div className={`itemContent order ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <div id="imgItens order">
        
            <img src={motors} width="125" height="" />
       
        </div>
        <div className="itemInfo order">
          
            <h2 className="itemNome order">Pedido 26/07/2023</h2>
            <h2 id="itemPreco order" className="itemPreco order">
              Total: R$ 495<sup>99</sup>
              <sub className="subtext order">parcelado em 8x</sub>
            </h2>
            <p className="itemComplement order">
              Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...
            </p>
    
        </div>
        <div className="buttons order">
          <button class="ui icon button order">
            <i className="trash alternate icon order"></i>
          </button>
          <div className="ui small buttons order">
            <button className="ui button active order">-</button>
            <div className="or order" data-text="10"></div>
            <button className="ui button order">+</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="dropdownContent">
          {/* Conteúdo adicional do dropdown */}
          <div className='moreContentOrder'>aaaaaaaaaaa</div>
        </div>
      )}
    </div>
    
 
    </>
  );
};
export default Orders