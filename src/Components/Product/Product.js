import React from 'react'
import motor from '../../assets/img/motor.png'
import './style.css'
function Product() {
  return (
    <>
      <div className="boxProduct">
        <div className="containerProduct">
          <div className="imageProduct">
            <img className="ImageMotor"src={motor} />
          </div>
          <div className="contentProduct">
            <div className="titleProduct">Motor</div>
            <div className="piceTagProduct">
              <a className='priceProduct'>R$23,00</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product