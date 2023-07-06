import React, { useState } from 'react';
import './CartFinish.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import weggner from "../../assets/img/PedidoFinalizadoWeggner.PNG"
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

function CartFinish() {

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
          <div className="completed step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='containerCart'>
        <div className='boxCartProductDetailInfo'>
          <div className='boxCartProductInfo'>
            <div className='boxCartProductTitleInfo'>
              <h5 className='TitleTextCartProductInfo'>Pedido Finalizado</h5>

            </div>
            <div className='boxCartProductImg'>
              <img className='imgCartProductInfo' src={weggner} />
              <div className='boxCartProductTextFinal'>
                <h5>Agradecemos sua preferência</h5>
                <div className='boxCartProductSubTextFinal'>
                <BsArrowLeftShort size={15} />
                  <Link to='/'> <p className='SubTextFinal'>Voltar para a Home</p> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartFinish;
