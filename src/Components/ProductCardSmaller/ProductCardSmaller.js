import React from 'react'
import './ProductCardSmaller.css'

import motor from '../../assets/img/motor.png'

import { Link } from 'react-router-dom'

function SmallProductCard() {


    return (
        <Link to='/product'>
            <div className='container_product_card_smaller'>
                <div className='container_product_card_smaller_action_icon '>
                    <Link to='/save'>
                        <button class="ui icon button product_card_smaller">
                            <i class="bookmark icon "></i>
                        </button>
                    </Link>
                    <Link to='/cart'>
                        <button class="ui icon button product_card_smaller">
                            <i class="cart plus icon"></i>
                        </button>
                    </Link>
                </div>

                <div className='box_product_card_smaller_image'>
                    <img src={motor} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                </div>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>W12 Motor</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ 1.259,00</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <div className='box_product_card_smaller_button'>
                    <button class="fluid ui button product_card_smaller">Comprar</button>

                </div>

            </div>
        </Link>
    )
}

export default SmallProductCard