import React from 'react'
import './Orders.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import motors from "../../assets/img/motores.png"
import CartProduct from "../ProductCart/ProductCart";



function Orders() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <div className="container_product_order">
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
            <button className="ui icon button order">
              <i className="angle down icon order"></i>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="dropdownContentOrders" data-aos="fade-down">
            <div className='moreContentOrder'>
              <div className='confirmTransportOrders'>
                <form className="ui form confirm Orders">
                  <div className="field Orders">
                    <div className="three fields Orders">
                      <div className="field Orders">
                        <label>Produtos</label>
                        <p>Motor W33</p>
                        <p>Motor W12</p>

                      </div>
                      <div className="field Orders">
                        <br />
                        <p>x3</p>
                        <p>x1</p>
                      </div>
                      <div className="field Orders">
                        <br />
                        <p>R$ 2.333,33</p>
                        <p>R$ 1.333,33</p>
                      </div>
                    </div>
                    <div className="three fields Orders">

                      <div className="field Orders">
                        <label>Nome do Responsável</label>
                        <p>Gustavo Guilherme de Abreu</p>
                      </div>
                      <div className="field Orders">
                        <label>Endereço:</label>
                        <p>Rua Adolfo Tribess, Vieiras, N. 400</p>
                      </div>
                      <div className="field Orders">
                        <label>Complemento:</label>
                        <p>Torre 1, Apto 706</p>
                      </div>
                    </div>
                  </div>
                  <div className="three fields Orders">
                    <div className="field Orders">
                      <label>Estado:</label>
                      <p>Santa Catarina</p>
                    </div>
                    <div className="field Orders">
                      <label>País:</label>
                      <p>Brasil</p>
                    </div>
                    <div className="field Orders">
                      <label>CEP</label>
                      <p>89256-690</p>
                    </div>
                  </div>
                </form>


              </div>
              <div className='boxStepsOrders'>
                <div className="ui tiny steps Orders">
                  <div className="step Orders">
                    <i className="boxes icon"></i>
                    <div className="content">
                      <div className="title">Pedido finalizado</div>
                    </div>
                  </div>
                  <div className="disabled step Orders">
                    <i className="dolly flatbed icon"></i>
                    <div className="content">
                      <div className="title">Entregue a transportadora</div>
                    </div>
                  </div>
                  <div className="disabled step  Orders">
                    <i className="shipping fast icon"></i>
                    <div className="content">
                      <div className="title">Saiu para entrega</div>
                    </div>
                  </div>
                  <div className="disabled step">
                    <i className="clipboard check icon"></i>
                    <div className="content">
                      <div className="title">Entregue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        )
        }
      </div >


    </>
  );
};
export default Orders