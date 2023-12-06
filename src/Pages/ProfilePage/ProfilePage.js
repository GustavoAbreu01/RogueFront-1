//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProfilePage.css'

//Importando os componentes
import Header from '../../Components/Header/Header'
import Orders from '../../Components/Orders/Orders'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'

//Importando os ícones
import { BsFillBookmarkFill } from 'react-icons/bs'

//Importando frameworks
import Cookies from 'js-cookie'
import { OrderService, UserService } from '../../Service'

function ProfilePage() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserAndOrders();

    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getUserAndOrders = async () => {
    await getOrders();
  };

  const verify = () => {
    const registered = Cookies.get('Cookie');
    return Boolean(registered);
  };

  const getOrders = async () => {
    try {
      const cookie = Cookies.get('Cookie');
      const tokenPayload = cookie.split('.');
      const decodedPayload = atob(tokenPayload[1]);
      const userClaims = JSON.parse(decodedPayload);
      const orders = await OrderService.getAll(cookie);
      const userPrin = await UserService.findOne(userClaims.sub);
      const userOrders = orders.filter(order => order.user.id === userPrin.id);
      setOrders(userOrders);
    } catch (error) {
      console.error('Erro ao obter pedidos:', error);
    }
  };

  const renderDesktopView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='box_title_similar_order'>
        <BsFillBookmarkFill color='var(--white)' size={40} />
        <h1>Seus Pedidos</h1>
      </div>
      {orders.map((order, index) => (
        <Orders key={index} order={order} />
      ))}
      <div className='spacement'></div>
      <Footer />

    </>
  )

  const renderMobileView = () => (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='box_title_similar_order_mobile'>
        <BsFillBookmarkFill color='var(--white)' size={40} />
        <h1>Seus Pedidos</h1>
      </div>
      {orders.map((order, index) => (
        <Orders key={index} order={order} />
      ))}
      <div className='spacement_mobile'></div>


    </>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}

export default ProfilePage