import React from 'react'
import motor from '../../assets/img/motor.png'
import './SmallProductHorizontal.css'

function SmallProductHorizontal() {


    return (
        <div className='horizontalSmallBoxProduct'>
            <div className='horizontalSmallBoxProductImage'>
                <img src={motor} alt='' className='productCardImage' height={90} width={90}></img>
            </div>
            <div  className='horizontalSmallBoxProductInfo'>
      
                <div className='horizontalSmallBoxProductTitle'>
                    <h5>W12 Motor</h5>
                </div>
        
            <div className='horizontalSmallBoxProductPrice'>
                <p className='horizontalSmallPriceProduct'>R$ 1.259,00</p>
            </div>
            <p>Á vista no pix</p>
            </div>
            
            <div className='horizontalSmallBoxProductButton'>
                <button class="fluid ui button horizontalSmall">Comprar</button>
            </div>
        </div>
    )
}

export default SmallProductHorizontal