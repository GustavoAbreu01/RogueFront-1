import './ProductCardHighlight.css'
import React from 'react'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

const ProductCardHighlight = ({product}) => {

  return (
    <div className="product_highlight" key={product.id}>
    <div className='container_product_card_hightlight'>
    <Link to='/product'>
      <div className='box_product_card_hightlight_tag_icon'>
        <button className="circular ui icon button product_card_hightlight">
          <i className="star icon product_card_hightlight"></i>
        </button>
      </div>
      <div className='container_product_card_hightlight_action_icon'>
        <Link to="/save">
          <button className="ui icon button product_card_hightlight">
            <i className="bookmark icon product_card_hightlight"></i>
          </button>
        </Link>
        <Link to="/cart">
          <button className="ui icon button product_card_hightlight">
            <i className="cart plus icon product_card_hightlight"></i>
          </button>
        </Link>
      </div>
      <div className='box_product_card_hightlight_image'>
        <img src={motor} alt='' className='product_card_hightlight_image' height={150} width={150}></img>
      </div>
      <div className='box_product_card_hightlight_info'>
        <div className='product_card_hightlight_info_text'>
          <h3 className='product_card_hightlight_name'>{product.name}</h3>
          <p className='product_card_hightlight_description'>{product.description}</p>
        </div>
      </div>
      <div className='box_product_card_hightlight_info_price'>
        <h3 className='product_card_hightlight_price'>R$ {product.price}</h3>
        <p className='product_card_hightlight_price_option'>Á vista no pix</p>
      </div>
      <div className='product_card_hightlight_buy_button'>
        <button className="fluid ui button product_card_hightlight_button">Comprar</button>
      </div>
    </Link>
  </div>
  </div>
  )
}

export default ProductCardHighlight