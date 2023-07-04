import React from 'react'
import motor from '../../assets/img/motor.png'
import './ProductSearched.css'

function ProductSearched() {


  return (
    <div className='boxProduct'>
      <div className='tagIconProduct'>
      <button className="circular ui icon button">
          <i className="searchengin icon"></i>
        </button>
      </div>
      <div className='iconProductAction'>
        <button className="ui icon button">
          <i className="bookmark icon"></i>
        </button>
        <button className="ui icon button">
        <i className="cart plus icon"></i>
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
      <button className="fluid ui button">Comprar</button>

      </div>
    </div>
  )
}

export default ProductSearched