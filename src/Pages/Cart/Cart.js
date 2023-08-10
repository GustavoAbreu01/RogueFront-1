//Importando o React e o CSS
import React from 'react';
import './Cart.css';

//importando as frameworks
import { Link } from 'react-router-dom';

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import ProductCart from '../../Components/ProductCart/ProductCart';
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';

function Cart() {

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
      <div className='container_progress_cart'>
        <div className="ui small steps">
          <div className="step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="disabled step">
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
      <div className='container_cart_all'>
        <div className='box_cart_product_detail_all'>
          <div className='box_cart_product_all'>
            <div className='cart_product_title'>
              <h5 className='cart_product_title_text'>Produtos e Frete</h5>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
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
              {!verify() ?
                <Link to='/register'>
                  <button className="fluid ui button final">Realizar Login</button>
                </Link>
                :
                <Link to='/cart/payment'>
                  <button className="fluid ui button final">Finalizar Compra</button>
                </Link>
              }
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

export default Cart;
