import React from 'react'
import motor from '../../assets/img/motor.png'
import './SmallProductCard.css'
import { Link } from 'react-router-dom'

function SmallProductCard() {


    return (
        <Link to='/product'>
        <div className='smallBoxProduct'>

            <div className='smallIconProductAction '>
                <Link to='/save'>
                    <button class="ui icon button smallCard">
                        <i class="bookmark icon "></i>
                    </button>
                </Link>
                <Link to='/cart'>
                    <button class="ui icon button smallCard">
                        <i class="cart plus icon"></i>
                    </button>
                </Link>
            </div>
           
                <div className='smallBoxProductImage'>
                    <img src={motor} alt='' className='productCardImage' height={110} width={110}></img>
                </div>
                <div className='smallBoxProductText'>
                    <div className='smallBoxProductTitle'>
                        <h3>W12 Motor</h3>
                    </div>
                </div>
                <div className='smallBoxProductPrice'>
                    <h3 className='smallPriceProduct'>R$ 1.259,00</h3>
                    <p>Á vista no pix</p>
                </div>
                <div className='smallBoxProductButton'>
                    <button class="fluid ui button smallCard">Comprar</button>

                </div>
         
        </div>
        </Link>
    )
}

export default SmallProductCard