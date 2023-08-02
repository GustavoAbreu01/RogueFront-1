//Importando o React e o CSS
import React, { useState } from 'react'
import './RatedProducts.css'

//importando as frameworks
import { Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";

//importando as imagens
import motors from "../../assets/img/motores.png"

function Orders() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <div className="container_rated_product">
        <Link to='/product'>
          <div className='box_rated_product'>
            <div id="imgItens order">
              <img src={motors} width="125" height="" />
            </div>
            <div className="rated_product_product_info">
              <h2 className="rated_product_name">Motor W22</h2>
              <p className="rated_product_description">
                Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...
              </p>
            </div>
            <div className="rated_product_buttons">
              <button className="ui icon button rated_product">
                <Rating className="ui rating rated_product" maxRating={5} style={{ marginTop: '1rem' }} />
              </button>
            </div>
          </div>
        </Link>
      </div >
    </>
  );
};
export default Orders