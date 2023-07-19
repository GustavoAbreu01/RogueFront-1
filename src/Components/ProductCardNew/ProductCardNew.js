import './ProductCardNew.css'
import React from 'react'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

function ProductCardNew() {
  return (
    <div className='container_product_card_new'>
    <Link to='/product'>
      <div className='box_product_card_new_tag_icon'>
        <button className="circular ui icon button product_card_new">
        <i className="exclamation circle icon"></i>
        </button>
      </div>
      <div className='container_product_card_new_action_icon'>
        <Link to="/save">
          <button class="ui icon button product_card_new">
            <i class="bookmark icon product_card_new"></i>
          </button>
        </Link>
        <Link to="/cart">
          <button class="ui icon button product_card_new">
            <i class="cart plus icon product_card_new"></i>
          </button>
        </Link>
      </div>
      <div className='box_product_card_new_image'>
        <img src={motor} alt='' className='product_card_new_image' height={150} width={150}></img>
      </div>
      <div className='box_product_card_new_info'>
        <div className='product_card_new_info_text'>
          <h3 className='product_card_new_name'>W12 Monofásico</h3>
          <p className='product_card_new_description'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência.</p>
        </div>
      </div>
      <div className='box_product_card_new_info_price'>
        <h3 className='product_card_new_price'>R$ 1.259,00</h3>
        <p className='product_card_new_price_option'>Á vista no pix</p>
      </div>
      <div className='product_card_new_buy_button'>
        <button class="fluid ui button product_card_new_button">Comprar</button>
      </div>
    </Link>
  </div>
  )
}

export default ProductCardNew