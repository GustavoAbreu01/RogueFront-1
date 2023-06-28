import React from 'react'
import motors from '../../assets/img/motor.png'
import save from '../../assets/img/salvo.png'
import './style.css'
function Product() {
  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>

      <div id="produtos" className='produtos'>
        {numero.map((i) => (

            <div className="boxProduct">
              <div className="containerProduct">
                <div className="imageProduct">
                  <img className="ImageMotor" src={motors} />
                </div>
                <div className="contentProduct">
                  <div className="titleProduct">Motor</div>
                  <div className="piceTagProduct">
                    <a className='priceProduct'>R$23,00</a>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default Product