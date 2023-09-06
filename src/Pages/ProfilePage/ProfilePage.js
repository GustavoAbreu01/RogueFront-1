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

function ProfilePage() {

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }


  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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
      <div className='box_title_similar_order'>
        <BsFillBookmarkFill color='var(--white)' size={40} />
        <h1>Seus Pedidos</h1>
      </div>
      <Orders />
      <Orders />
      <Orders />
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
      <Orders />
      <Orders />
      <Orders />
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