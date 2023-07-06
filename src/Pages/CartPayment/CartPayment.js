import React, { useState } from 'react';
import './CartPayment.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { Link } from 'react-router-dom';
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';

function CartPayment() {

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
          <div className="step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='containerCart'>
        <div className='boxCartProductDetail'>
          <div className='boxCartProduct'>
            <div className='boxCartProductTitle'>
              <h5 className='TitleTextCartProduct'>Forma de Pagamento</h5>
            </div>
            <form class="ui form">
              <div class="field">
                <label>Card Type</label>
                <div class="ui selection dropdown">
                  <input type="hidden" name="card[type]" />
                  <div class="default text">Type</div>
                  <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item" data-value="visa">
                      <i class="visa icon"></i>
                      Visa
                    </div>
                    <div class="item" data-value="amex">
                      <i class="amex icon"></i>
                      American Express
                    </div>
                    <div class="item" data-value="discover">
                      <i class="discover icon"></i>
                      Discover
                    </div>
                  </div>
                </div>
              </div>
              <div class="fields">
                <div class="seven wide field">
                  <label>Card Number</label>
                  <input type="text" name="card[number]" maxlength="16" placeholder="Card #" />
                </div>
                <div class="three wide field">
                  <label>CVC</label>
                  <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" />
                </div>
                <div class="six wide field">
                  <label>Expiration</label>
                  <div class="two fields">
                    <div class="field">
                      <select class="ui fluid search dropdown" name="card[expire-month]">
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                    <div class="field">
                      <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui button" tabindex="0">Submit Order</div>
            </form>
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
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartPayment;
