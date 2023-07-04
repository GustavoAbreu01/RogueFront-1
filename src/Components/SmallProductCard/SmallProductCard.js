import React from 'react'
import motor from '../../assets/img/motor.png'
import './SmallProductCard.css'

function SmallProductCard() {


    return (
        <div className='smallBoxProduct'>

            <div className='smallIconProductAction '>
                <button class="ui icon button smallCard">
                    <i class="bookmark icon "></i>
                </button>
                <button class="ui icon button smallCard">
                    <i class="cart plus icon"></i>
                </button>
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
    )
}

export default SmallProductCard