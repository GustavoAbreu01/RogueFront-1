//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './CartFinish.css';

//importando as frameworks
import { Link } from 'react-router-dom';

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';

//Importando as imagens
import weggner from "../../assets/img/PedidoFinalizadoWeggner.PNG"
import BannerAnnouncementThree from '../../assets/img/BannerAnnun3.jpg'

//Importando os icones
import { BsArrowLeftShort } from 'react-icons/bs';
import { FaCheck, FaCreditCard, FaTruck, FaInfo } from 'react-icons/fa';

function CartFinish() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderDesktopView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_finish'>
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
  )

  const renderTabletView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_finish'>
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
          <div className="completed step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_finish'>
        <div className='box_cart_detail_finish_mobile'>
          <div className='box_cart_finish'>
            <div className='cart_finish_title'>
              <h5 className='cart_finish_title_text'>Pedido Finalizado</h5>

            </div>
            <div className='box_cart_finish_img'>
              <img className='cart_finish_weggner_mobile' src={weggner} />
              <div>
                <h5>Agradecemos sua preferência</h5>
                <div className='cart_finish_text_tablet'>
                  <BsArrowLeftShort size={15} />
                  <Link to='/'> <p className='cart_finish_subtext'>Voltar para a Home</p> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home_announcements_products_tablet' data-aos="fade-up" >
        <img className='home_announcements_banner_products_tablet' src={BannerAnnouncementThree} />
      </div>
      <Footer />
    </>
  )

  const renderMobileView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_mobile'>
        <div className="menu_edit_profile">
          <div>
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
        </div>
      </div>
      <div className='container_cart_finish'>
        <div className='box_cart_detail_finish_mobile'>
          <div className='box_cart_finish'>
            <div className='cart_finish_title'>
              <h5 className='cart_finish_title_text'>Pedido Finalizado</h5>

            </div>
            <div className='box_cart_finish_img'>
              <img className='cart_finish_weggner_mobile' src={weggner} />
              <div>
                <h5>Agradecemos sua preferência</h5>
                <div className='cart_finish_text_mobile'>
                  <BsArrowLeftShort size={15} />
                  <Link to='/'> <p className='cart_finish_subtext'>Voltar para a Home</p> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home_announcements_products_mobile' data-aos="fade-up" >
        <img className='home_announcements_banner_products_mobile' src={BannerAnnouncementThree} />
      </div>
      <Footer />
    </>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  }

  return <>{getViewToRender()}</>;

}

export default CartFinish;
