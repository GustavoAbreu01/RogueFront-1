import React, { useState } from 'react';
import './CartTransport.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { Link } from 'react-router-dom';
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';

function CartTransport() {

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
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="step">
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
              <h5 className='TitleTextCartProduct'>Verificar Transporte do Pedido</h5>
            </div>
            <div className='formsTransport'>
            <form class="ui form">
              <div class="field">
                <label>Name</label>
                <div class="two fields">
                  <div class="field">
                    <input type="text" name="shipping[first-name]" placeholder="First Name" />
                  </div>
                  <div class="field">
                    <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Billing Address</label>
                <div class="fields">
                  <div class="twelve wide field">
                    <input type="text" name="shipping[address]" placeholder="Street Address" />
                  </div>
                  <div class="four wide field">
                    <input type="text" name="shipping[address-2]" placeholder="Apt #" />
                  </div>
                </div>
              </div>
              <div class="two fields">
                <div class="field">
                  <label>Estado</label>
                  <select class="ui fluid dropdown">
                    <option value="">Estado</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                  </select>
                </div>
                <div class="field">
                  <label>País</label>
                  <select class="ui fluid dropdown">
                    <option value="">País</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                  </select>
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
              <Link to='/cart/confirm'>
                <button className="fluid ui button final">Finalizar Compra</button>
              </Link>
              <Link to='/'>
                <button className="fluid ui button blue basic cont">Continuar Compando</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartTransport;
