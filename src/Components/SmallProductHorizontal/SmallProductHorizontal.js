import React from 'react'
import motor from '../../assets/img/motor.png'
import './SmallProductHorizontal.css'

function SmallProductHorizontal() {


    return (
        <div className='horizontalSmallBoxProduct'>
            <div className='horizontalSmallBoxProductImage'>
                <img src={motor} alt='' className='productCardImage' height={90} width={90}></img>
            </div>
            <div className='horizontalSmallBoxProductInfo'>

                <div className='horizontalSmallBoxProductTitle'>
                    <h5>W12 Motor</h5>
                </div>

                <div className='horizontalSmallBoxProductPrice'>
                    <p className='horizontalSmallPriceProduct'>R$ 1.259,00</p>
                </div>
                <p style={{ paddingLeft: '1rem', paddingTop: '0.4rem' }}>Á vista no pix</p>
            </div>
            <div className='detailSmallProduct'>
                <div className='detailTextSmallProduct'>
                </div>
            </div>
        </div>
    )
}

export default SmallProductHorizontal