//Importando o React e o CSS
import React from 'react';
import './CartConfirm.css';

//Importando os componentes
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';
import ProductCartConfirm from '../../Components/ProductCartConfirm/ProductCartConfirm';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';

//importando as frameworks
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
      <div className='container_progress_cart_confirm'>
        <div className="ui small steps">
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
      <div className='container_cart_confirm'>
        <div className='box_cart_product_detail_confirm'>
          <div className='box_cart_product_confirm'>
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Confirmar Pedido</h5>
            </div>
            <ProductCartConfirm />
            <ProductCartConfirm />
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Endereço de Entrega</h5>
            </div>
            <div className='cart_confirm_transport'>
              <form className="ui form confirm">
                <div className="field">
                  <div className="three fields">
                    <div className="field">
                      <label>Nome do Responsável</label>
                      <p>Gustavo Guilherme de Abreu</p>
                    </div>
                    <div className="field">
                      <label>Endereço:</label>
                      <p>Rua Adolfo Tribess, Vieiras, N. 400</p>
                    </div>
                    <div className="field">
                      <label>Complemento:</label>
                      <p>Torre 1, Apto 706</p>
                    </div>
                  </div>
                </div>
                <div className="three fields">
                  <div className="field">
                    <label>Estado:</label>
                    <p>Santa Catarina</p>
                  </div>
                  <div className="field">
                    <label>País:</label>
                    <p>Brasil</p>
                  </div>
                  <div className="field">
                    <label>CEP</label>
                    <p>89256-690</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${valor}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete R${frete}</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${total}</h5>
            </div>
            <div className='button_total_Cart'>
              <Link to='/cart/finish'>
                <button className="fluid ui button final">Finalizar Compra</button>
              </Link>
              <Link to='/'>
                <button className="fluid ui button blue basic cont">Continuar Comprando</button>
              </Link>
            </div>
          </div>
          <div className='box_cart_info_recommend'>
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
