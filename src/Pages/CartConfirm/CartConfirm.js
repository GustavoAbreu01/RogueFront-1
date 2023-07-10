import React, { useState } from 'react';
import './CartConfirm.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { Link } from 'react-router-dom';
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';
import ProductCart from '../../Components/ProductCart/ProductCart';
import ProductCartConfirm from '../../Components/ProductCartConfirm/ProductCartConfirm';

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
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="completed step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="step">
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
              <h5 className='TitleTextCartProduct'>Confirmar Pedido</h5>
            </div>
            <ProductCartConfirm />
            <ProductCartConfirm />
            <div className='boxCartProductTitle'>
              <h5 className='TitleTextCartProduct'>Endereço de Entrega</h5>
            </div>
            <div className='confirmTransport'>
              <form class="ui form confirm">
                <div class="field">
                  <div class="three fields">
                    <div class="field">
                      <label>Nome do Responsável</label>
                      <p>Gustavo Guilherme de Abreu</p>
                    </div>
                    <div class="field">
                      <label>Endereço:</label>
                      <p>Rua Adolfo Tribess, Vieiras, N. 400</p>
                    </div>
                    <div class="field">
                      <label>Complemento:</label>
                      <p>Torre 1, Apto 706</p>
                    </div>
                  </div>
                </div>
                <div class="three fields">
                  <div class="field">
                    <label>Estado:</label>
                    <p>Santa Catarina</p>
                  </div>
                  <div class="field">
                    <label>País:</label>
                    <p>Brasil</p>
                  </div>
                  <div class="field">
                    <label>CEP</label>
                    <p>89256-690</p>
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
              <Link to='/cart/finish'>
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

export default CartConfirm;
