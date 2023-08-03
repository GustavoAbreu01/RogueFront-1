import React from 'react'
import axios from 'axios'

import './ProductCardAccessed.css'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

const ProductCardAccessed = ({product}) => {

  return (
    <div className="product_acessed" key={product.id}>
    <div className='container_product_card_accessed'>
      <Link to='/product'>
        <div className='box_product_card_accessed_tag_icon'>
          <button className="circular ui icon button product_card_accessed">
            <i className="chart line icon product_card_accessed"></i>
          </button>
        </div>
        <div className='container_product_card_accessed_action_icon'>
          <Link to="/save">
            <button className="ui icon button product_card_accessed">
              <i className="bookmark icon product_card_accessed"></i>
            </button>
          </Link>
          <Link to="/cart">
            <button className="ui icon button product_card_accessed">
              <i className="cart plus icon product_card_accessed"></i>
            </button>
          </Link>
        </div>
        <div className='box_product_card_accessed_image'>
          <img src={motor} alt='' className='product_card_accessed_image' height={150} width={150}></img>
        </div>
        <div className='box_product_card_accessed_info'>
          <div className='product_card_accessed_info_text'>
            <h3 className='product_card_accessed_name'>{product.name}</h3>
            <p className='product_card_accessed_description'>{product.description}</p>
          </div>
        </div>
        <div className='box_product_card_accessed_info_price'>
          <h3 className='product_card_accessed_price'>R$ {product.price}</h3>
          <p className='product_card_accessed_price_option'>Á vista no pix</p>
        </div>
        <div className='product_card_accessed_buy_button'>
          <button className="fluid ui button product_card_accessed_button">Comprar</button>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default ProductCardAccessed