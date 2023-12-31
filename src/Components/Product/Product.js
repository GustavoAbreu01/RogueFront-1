//Importando o React e o CSS
import React from 'react'
import './Product.css'

//importando as frameworks
import { Link } from 'react-router-dom'

//Importando as imagens
import motor from '../../assets/img/motor.png'

function Product() {

  return (
    <div className='container_product_card_accessed'>
      <Link to='/product'>
        <div className='product_card_accessed_tag_icon'>
          <button className="circular ui icon button product_card_accessed">
            <i className="chart line icon product_card_accessed"></i>
          </button>
        </div>
        <div className='product_card_accessed_action_icon'>
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
          <img src={product.image} alt='' className='product_card_accessed_image' height={150} width={150}></img>
        </div>
        <div className='box_product_card_accessed_info'>
          <div className='product_card_accessed_info_text'>
            <h3 className='product_card_accessed_name'>W12 Monofásico</h3>
            <p className='product_card_accessed_description'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência.</p>
          </div>
        </div>
        <div className='box_product_card_accessed_info_price'>
          <h3 className='product_card_accessed_price'>R$ 1.259,00</h3>
          <p className='product_card_accessed_price_option'>Á vista no pix</p>
        </div>
        <div className='product_card_accessed_buy_button'>
          <Link to='/cart'>
            <button className="fluid ui button product_card_accessed_button">Comprar</button>
          </Link>
        </div>
      </Link>
    </div>
  )
}

export default Product