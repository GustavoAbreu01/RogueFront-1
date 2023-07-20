import React from 'react'
import motor from '../../assets/img/motor.png'
import './SmallProductHorizontal.css'

function SmallProductHorizontal() {


    return (
        <div className='container_small_product_horizontal'>
            <div className='horizontal_small_product_image'>
                <img src={motor} alt='' className='horizontal_small_product_image_tag' height={90} width={90}></img>
            </div>
            <div className='small_product_horizontal_item_informations'>

                <div className='small_product_horizontal_item_title'>
                    <h5>W12 Motor</h5>
                </div>

                <div className='small_product_horizontal_item_price'>
                    <p className='small_product_horizontal_item_price_tag'>R$ 1.259,00</p>
                </div>
                <p style={{ paddingLeft: '1rem', paddingTop: '0.4rem' }} className='small_product_horizontal_item_subtext'>Á vista no pix</p>
            </div>
            <div className='small_product_horizontal_detail'>
                <div className='small_product_horizontal_detail_text'>
                </div>
            </div>
        </div>
    )
}

export default SmallProductHorizontal