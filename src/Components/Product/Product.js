import React from 'react'
import motor from '../../assets/img/motor.png'
import './style.css'
function Product() {
  return (
    <>
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src={motor} />
          </div>
          <div class="content">
            <div class="header">Motor</div>
            <div class="meta">
              <a className='price'>R$23,00</a>
            </div>
            <div class="description">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </div>
        </div>
      </div>
      </>
      )
}

      export default Product