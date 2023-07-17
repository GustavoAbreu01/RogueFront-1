import React from 'react'
import './ProductCardSearched.css'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

function ProductCardSearched() {


  return (
    <div className='container_product_card_searched'>
    <Link to='/product'>
      <div className='box_product_card_searched_tag_icon'>
        <button className="circular ui icon button product_card_searched">
        <i className="searchengin icon product_card_searched"></i>
        </button>
      </div>
      <div className='container_product_card_searched_action_icon'>
        <Link to="/save">
          <button class="ui icon button product_card_searched">
            <i class="bookmark icon product_card_searched"></i>
          </button>
        </Link>
        <Link to="/cart">
          <button class="ui icon button product_card_searched">
            <i class="cart plus icon product_card_searched"></i>
          </button>
        </Link>
      </div>
      <div className='box_product_card_searched_image'>
        <img src={motor} alt='' className='product_card_searched_image' height={150} width={150}></img>
      </div>
      <div className='box_product_card_searched_info'>
        <div className='product_card_searched_info_text'>
          <h3 className='product_card_searched_name'>W12 Monofásico</h3>
          <p className='product_card_searched_description'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência.</p>
        </div>
      </div>
      <div className='box_product_card_searched_info_price'>
        <h3 className='product_card_searched_price'>R$ 1.259,00</h3>
        <p className='product_card_searched_price_option'>Á vista no pix</p>
      </div>
      <div className='product_card_searched_buy_button'>
        <button class="fluid ui button product_card_searched_button">Comprar</button>
      </div>
    </Link>
  </div>
  )
}

export default ProductCardSearched