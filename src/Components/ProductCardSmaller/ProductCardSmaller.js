import React from 'react'
import './ProductCardSmaller.css'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

const SmallProductCard = ({ product }) => {
    return (
        <div className="product_acessed" key={product.id}>
            <Link to='/product'>
                <div className='container_product_card_smaller'>
                    <div className='container_product_card_smaller_action_icon '>
                        <Link to='/save'>
                            <button className="ui icon button product_card_smaller">
                                <i className="bookmark icon "></i>
                            </button>
                        </Link>
                        <Link to='/cart'>
                            <button className="ui icon button product_card_smaller">
                                <i className="cart plus icon"></i>
                            </button>
                        </Link>
                    </div>

                    <div className='box_product_card_smaller_image'>
                        <img src={motor} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                    </div>
                    <div >
                        <div className='box_product_card_smaller_title'>
                            <h3 className='product_card_smaller_title'>{product.name}</h3>
                        </div>
                    </div>
                    <div className='box_product_card_smaller_price'>
                        <h3 className='product_card_smaller_price'>R$ {product.price}</h3>
                        <p className='product_card_smaller_price_info'>Á vista no pix</p>
                    </div>
                    <div className='box_product_card_smaller_button'>
                        <button className="fluid ui button product_card_smaller">Comprar</button>

                    </div>

                </div>
            </Link>
        </div>
    )
}

export default SmallProductCard