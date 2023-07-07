import React, { useState } from 'react';
import './CartPayment.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { Link } from 'react-router-dom';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';
import { FaStar } from 'react-icons/fa';

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
      <div className='containerCartPayment'>
        <div className='boxCartProductDetailPayment'>
          <div className='boxCartProductPayment'>
            <div className='boxCartProductTitle'>
              <h5 className='TitleTextCartProduct'>Forma de Pagamento</h5>
            </div>
            <div className='formsPayment'>
              <form class="ui form">
                <div class="field">
                  <label>Card Type</label>
                  <div class="ui selection dropdown">
                    <input type="hidden" name="card[type]" />
                    <div class="default text">Tipo</div>
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
                    <label>Número do cartão</label>
                    <input type="text" name="card[number]" maxlength="16" placeholder="cartão #" />
                  </div>
                  <div class="three wide field">
                    <label>CVV</label>
                    <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" />
                  </div>
                  <div class="six wide field">
                    <label>Validade</label>
                    <div class="two fields">
                      <div class="field">
                        <select class="ui fluid search dropdown" name="card[expire-month]">
                          <option value="">Mês</option>
                          <option value="1">Janeiro</option>
                          <option value="2">Fevereiro</option>
                          <option value="3">Março</option>
                          <option value="4">Abril</option>
                          <option value="5">Maio</option>
                          <option value="6">Junho</option>
                          <option value="7">Julho</option>
                          <option value="8">Agosto</option>
                          <option value="9">Setembro</option>
                          <option value="10">Outubro</option>
                          <option value="11">Novembro</option>
                          <option value="12">Dezembro</option>
                        </select>
                      </div>
                      <div class="field">
                        <input type="text" name="card[expire-year]" maxlength="4" placeholder="Ano" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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

        </div>
      </div>
      <div className='boxTitleSimilar'>
        <FaStar color='var(--white)' size={40} />
        <h1 className='titleSimilar' >Produtos Semelhantes</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  );
}

export default CartPayment;
