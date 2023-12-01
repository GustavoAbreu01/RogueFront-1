//Importando o React e o CSS
import React from 'react'
import './SmallProductHorizontal.css'

//Importando as imagens
import motor from '../../assets/img/motor.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


function SmallProductHorizontal({ product }) {

    const renderModel = () => {
        if (product.motors.model.length > 10) {
            return product.motors.model.substring(0, 6) + '...';
        } else {
            return product.motors.model;
        }
    }

    return (
        <Link to={`/product/${product.code}`}>
            <div title={product.motors.model} className='container_small_product_horizontal' key={product.code}>
                <div className='horizontal_small_product_image'>
                    <img src={product.image} alt='' className='horizontal_small_product_image_tag' height={90} width={90}></img>
                </div>
                <div className='small_product_horizontal_item_informations'>

                    <div className='small_product_horizontal_item_title'>
                        <h5>{renderModel()}</h5>
                    </div>
                    <div className='small_product_horizontal_item_price'>
                        <p className='small_product_horizontal_item_price_tag'>R$ {product.price}</p>
                    </div>
                    <p style={{ paddingLeft: '1rem', paddingTop: '0.4rem' }} className='small_product_horizontal_item_subtext'>Á vista no pix</p>
                </div>
                <div className='small_product_horizontal_detail'>
                    <div className='small_product_horizontal_detail_text'>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default SmallProductHorizontal