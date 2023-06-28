import React from 'react'
import motors from '../../assets/img/motor.png'
import save from '../../assets/img/salvo.png'
import './style.css'
function Product() {
  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {/* <div className="boxProduct">
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
      </div> */}
      <div id="produtos" className='produtos'>
        {numero.map((i) => (

          <div class="ui segment itens" id="item" key={i}>
            <div class="itemContent">
              <button className="salvos" href="">
                <img src={save} className="salvosimg" width="40" height="40" id="salvos" />
              </button>
              <div id="imgItens">
                <img src={motors} width="80%" height="" className='motor' />
              </div>
              <div class="itemInfo">

                <h2 id="itemNome">W12 Monofásico</h2>
                <h4 id="descricao">Desenvolvida para oferecer versatilidade e eficiência.</h4>
                <h2 id="itemPreco">R$ 495<sup> 99</sup></h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Product