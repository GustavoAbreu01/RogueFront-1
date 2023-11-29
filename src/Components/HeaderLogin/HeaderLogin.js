//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './HeaderLogin.css'

//Importando a Service
import { UserService } from '../../Service'

//importando as frameworks
import { Link } from 'react-router-dom'

//Importando os componentes
import SearchBar from '../SearchModal/SearchModal'
import PerfilModal from '../ProfileModal/ProfileModal'
import MenuModal from '../MenuModal/MenuModal'

//Importando as imagens
import logo from "../../assets/img/logo-weg.png"

//Importando os ícones
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'

function HeaderLogin() {

  const [user, setUser] = useState({});
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderDesktopView = () => (
    <><div className={scrolled ? 'scrolled_login_desktop' : 'header_login_desktop'}>
    <div className="box_logo_header_login">
      <Link to="/"><img src={logo} className='image_logo_header_login' /></Link>
    </div>
    <div className="search_input_header">
      <SearchBar />
    </div>
    <div className="opc_header_login">
      <div className='icons_header_login'>
        <Link to="/save "><BsFillBookmarkFill size={'2rem'} className='saves_header_login' /></Link>
      </div>
      <div className='icons_header_login'>
        <Link to="/cart"><FaShoppingCart className="cart_header_login" /></Link>
      </div>
      <div>
        <PerfilModal user={user} />
      </div>
    </div>
  </div>
    <div className="nav_bar_header_login">
    <div className="divisor_header"></div>
        <Link to="/category/motors">Agronegócio</Link>
        <div className="divisor_header"></div>
        <Link to="/category/motors">Naval</Link>
        <div className="divisor_header"></div>
        <Link to="/category/ink">Mineração</Link>
        <div className="divisor_header"></div>
        <Link to="/category/automation">Edificação</Link>
        <div className="divisor_header"></div>
        <Link to="/category/building">Siderurgica</Link>
        <div className="divisor_header"></div>
        <Link to="/category/security">Alimentícia</Link>
        <div className="divisor_header"></div>
    </div></>
  )

  const renderTabletView = () => (
    <><div className={scrolled ? 'scrolled_mobile' : 'header_tablet'}>
      <div className='box_logo_header_mobile'  >
        <MenuModal />
        <Link to="/"><img className='image_logo_header_mobile' src={logo} /></Link>
      </div>
      <div className='search_input_header'>
          <SearchBar />
        </div>
      <div className="opc_header_mobile">
        <div className='icons_header'>
          <Link className="cart" to="/cart"><FaShoppingCart className="cart_icon_header_mobile" /></Link>
        </div>
        <div>
          <PerfilModal user={user} />
        </div>
      </div>
    </div></>
  )

  const renderMobileView = () => (
    <><div className={scrolled ? 'scrolled_mobile' : 'header_mobile'}>
      <div className='box_logo_header_mobile'  >
        <MenuModal />
        <Link to="/"><img className='image_logo_header_mobile' src={logo} /></Link>
      </div>
      <div className="opc_header_mobile">
        <div className='search_input_header'>
          <SearchBar />
        </div>
        <div>
          <PerfilModal user={user} />
        </div>
      </div>
    </div></>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;

}

export default HeaderLogin