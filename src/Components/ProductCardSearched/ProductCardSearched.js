import React from 'react'
import './ProductCardSearched.css'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

const ProductCardSearched = ({product}) => {


  return (
    <div className="product_acessed" key={product.id}>
    <div className='container_product_card_searched'>
    <Link to='/product'>
      <div className='box_product_card_searched_tag_icon'>
        <button className="circular ui icon button product_card_searched">
        <i className="searchengin icon product_card_searched"></i>
        </button>
      </div>
      <div className='container_product_card_searched_action_icon'>
        <Link to="/save">
          <button className="ui icon button product_card_searched">
            <i className="bookmark icon product_card_searched"></i>
          </button>
        </Link>
        <Link to="/cart">
          <button className="ui icon button product_card_searched">
            <i className="cart plus icon product_card_searched"></i>
          </button>
        </Link>
      </div>
      <div className='box_product_card_searched_image'>
        <img src={motor} alt='' className='product_card_searched_image' height={150} width={150}></img>
      </div>
      <div className='box_product_card_searched_info'>
        <div className='product_card_searched_info_text'>
          <h3 className='product_card_searched_name'>{product.name}</h3>
          <p className='product_card_searched_description'>{product.description}</p>
        </div>
      </div>
      <div className='box_product_card_searched_info_price'>
        <h3 className='product_card_searched_price'>R$ {product.price}</h3>
        <p className='product_card_searched_price_option'>Á vista no pix</p>
      </div>
      <div className='product_card_searched_buy_button'>
        <button className="fluid ui button product_card_searched_button">Comprar</button>
      </div>
    </Link>
  </div>
  </div>
  )
}

export default ProductCardSearched