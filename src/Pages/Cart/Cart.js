import React, { useState } from 'react';
import './Cart.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';

function Cart() {

  var valor = 0;
  var frete = 0;
  var total = 0;

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  return (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='boxContainerProgress  '>
        <div class="ui tiny steps">
          <div class="step">
            <i class="shop icon"></i>
            <div class="content">
              <div class="title">Carrinho</div>
            </div>
          </div>
          <div class="disabled step">
            <i class="user icon"></i>
            <div class="content">
              <div class="title">Confirmar Informações</div>
            </div>
          </div>
          <div class="disabled step">
            <i class="payment icon"></i>
            <div class="content">
              <div class="title">Pagamento</div>
            </div>
          </div>
          <div class="disabled step">
            <i class="info icon"></i>
            <div class="content">
              <div class="title">Confirmar Pedido</div>
            </div>
          </div>
          <div class="disabled step">
            <i class="truck icon"></i>
            <div class="content">
              <div class="title">Transporte</div>
            </div>
          </div>
        </div>
      </div>
      <div className='containerCart'>
        <div className='boxCartProduct'>

        </div>
        <div className='boxInfoTotalCart'>
          <div className='boxInfoTotalBuy'>
            <div className='boxInfoTotalBuyTitle'>
              <h5 className='TitleTextBuyProduct'>Resumo do Pedido</h5>
            </div>
            <div className='boxInfoTotalBuySubTitle'>
              <h5 className='subTextBuyProduct'>Subtotal R${valor}</h5>
            </div>
            <div className='boxInfoTotalBuySubTitle'>
              <h5 className='subTextBuyProduct'>Frete R${frete}</h5>
            </div>
            <div className='boxInfoTotalBuySubTitle'>
              <h5 className='TotalTextBuyProduct'>Total R${total}</h5>
            </div>
            <button class="fluid ui button final">Finalizar Compra</button>
            <button class="fluid ui blue button basic cont">Continuar Compando</button>
          </div>
          <div className='boxInfoRecommend'>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
