import React, { useState } from 'react';
import './CartConfirm.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { Link } from 'react-router-dom';

function CartConfirm() {

  var valor = 1100.00;
  var frete = 100;
  var total = 1200;

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
        <div className="ui tiny steps">
          <div className="completed step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="completed step">
            <i className="user icon"></i>
            <div className="content">
              <div className="title">Confirmar Informações</div>
            </div>
          </div>
          <div className="completed step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
        </div>
      </div>
      <div className='containerCart'>
        <div className='boxCartProductDetail'>
          <div className='boxCartProduct'>
            <div className='boxCartProductTitle'>
              <h5 className='TitleTextCartProduct'>Confirmar Pedido</h5>
            </div>
          </div>
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
            <div className='boxButtonTotalCart'>
              <Link to='/cart/transport'>
                <button className="fluid ui button final">Finalizar Compra</button>
              </Link>
              <Link to='/'>
                <button className="fluid ui button blue basic cont">Continuar Compando</button>
              </Link>
            </div>
          </div>
          <div className='boxInfoRecommend'>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartConfirm;