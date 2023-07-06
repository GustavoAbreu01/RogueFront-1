import React from 'react'
import motor from '../../assets/img/motor.png'
import './Product.css'
import { Link } from 'react-router-dom'

function Product() {


  return (
    <div className='boxProduct'>
      <Link to='/product'>
      <div className='tagIconProduct'>
      <button className="circular ui icon button">
          <i className="chart line icon"></i>
        </button>
      </div>
      <div className='iconProductAction'>
        <button class="ui icon button">
          <i class="bookmark icon"></i>
        </button>
        <button class="ui icon button">
        <i class="cart plus icon"></i>
        </button>
      </div>
      <div className='boxProductImage'>
        <img src={motor} alt='' className='productCardImage' height={150} width={150}></img>
      </div>
      <div className='boxProductText'>
        <div className='boxProductTitle'>
          <h3>W12 Monofásico</h3>
          <p>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência.</p>
        </div>
      </div>
      <div className='boxProductPrice'>
        <h3 className='priceProduct'>R$ 1.259,00</h3>
        <p className='priceProductOptional'>Á vista no pix</p>
      </div>
      <div className='boxProductButton'>
      <button class="fluid ui button">Comprar</button>

      </div>
      </Link>
    </div>
  )
}

export default Product