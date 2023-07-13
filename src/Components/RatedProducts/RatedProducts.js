import React from 'react'
import './RatedProducts.css'
import { useState } from 'react';
import { Rating } from 'semantic-ui-react';
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
      <div className="productCardOrder">
        <Link to='/product'>
        <div className='itemContent rating'>
          <div id="imgItens order">
            <img src={motors} width="125" height="" />
          </div>
          <div className="itemInfo order">
            <h2 className="itemNome order">Motor W22</h2>
            <p className="itemComplement order">
              Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...
            </p>
          </div>
          <div className="buttons order">
            <button class="ui icon button order">
            <Rating class="ui star rating productPage" maxRating={5} style={{ marginTop: '1rem' }} />
            </button>
          </div>
        </div>
        </Link>
       
      </div >


    </>
  );
};
export default Orders