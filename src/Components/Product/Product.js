import React from 'react'
import motor from '../../assets/img/motor.png'


import './Product.css'

function Product() {


  return (
    <div className='boxProduct'>
      <div className='tagIconProduct'>
      <button class="circular ui icon button">
          <i class="chart line icon"></i>
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
        <p>Á vista no pix</p>
      </div>
      <div className='boxProductButton'>
      <button class="fluid ui button">Comprar</button>

      </div>
    </div>
  )
}

export default Product