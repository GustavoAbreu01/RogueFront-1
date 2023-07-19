import React, { useState } from 'react';
import './CartFinish.css';

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import weggner from "../../assets/img/PedidoFinalizadoWeggner.PNG"

//importando as frameworks
import { Link } from 'react-router-dom';

//Importando os icones
import { BsArrowLeftShort } from 'react-icons/bs';

function CartFinish() {

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
      <div className='container_progress'>
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
      <div className='container_cart_finish'>
        <div className='box_cart_detail_finish'>
          <div className='box_cart_finish'>
            <div className='cart_finish_title'>
              <h5 className='cart_finish_title_text'>Pedido Finalizado</h5>

            </div>
            <div className='box_cart_finish_img'>
              <img className='cart_finish_weggner' src={weggner} />
              <div>
                <h5>Agradecemos sua preferência</h5>
                <div className='cart_finish_text'>
                <BsArrowLeftShort size={15} />
                  <Link to='/'> <p className='cart_finish_subtext'>Voltar para a Home</p> </Link>
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
