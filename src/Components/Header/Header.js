//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Header.css'

//Importando a Service
import { UserService } from '../../Service'

//importando as frameworks
import { Link } from 'react-router-dom'

//Importando os componentes
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'

//Importando as imagens
import logo from "../../assets/img/logo-weg.png"

//Importando os ícones
import { FaShoppingCart } from 'react-icons/fa'


function Header() {

  const [user, setUser] = useState({});
  const [scrolled, setScrolled] = useState(false);
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
    <><div className={scrolled ? 'scrolled_desktop' : 'header_desktop'}>
      <div className='box_logo_header'>
        <Link to="/"><img className='image_logo_header' src={logo} /></Link>
      </div>
      <div className='search_input_header'>
        <SearchBar />
      </div>
      <div className="opc_header">
        <div className='opc_user_header'>
          <Link to="/login "><p className='opc_login_header'>Login</p></Link><Link to="/register "><p className='opc_register_header'>/</p></Link><Link to="/register "><p className='opc_register_header'>Realizar Cadastro</p></Link>
        </div>
        <div className='icons_header'>
          <Link className="cart" to="/cart"><FaShoppingCart className="cart_icon_header" /></Link>
        </div>
      </div>
    </div><div className="nav_bar_header">
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisor_header"></div>
        <Link to="/category">Motores</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Tintas e Vernizes</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Automação</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Paineis Eletricos</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Segurança</Link>
        <div className="divisor_header"></div>
      </div></>
  )

  const renderTabletView = () => (
    <><div className={scrolled ? 'scrolled_mobile' : 'header_mobile'}>
      <div className='box_logo_header_mobile'  >
        <Link to="/"><img className='image_logo_header_mobile' src={logo} /></Link>
      </div>
      <div className='search_input_header'>
        <SearchBar />
      </div>
      <div className="opc_header">
        <div className='opc_user_header'>
          <Link to="/login "><p className='opc_login_header'>Login</p></Link><Link to="/register "><p className='opc_register_header'>/</p></Link><Link to="/register "><p className='opc_register_header'>Realizar Cadastro</p></Link>
        </div>
        <div className='icons_header'>
          <Link className="cart" to="/cart"><FaShoppingCart className="cart_icon_header" /></Link>
        </div>
      </div>
    </div><div className="nav_bar_header">
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisor_header"></div>
        <Link to="/category">Motores</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Tintas e Vernizes</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Automação</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Paineis Eletricos</Link>
        <div className="divisor_header"></div>
        <Link to="/category">Segurança</Link>
        <div className="divisor_header"></div>
      </div></>
  )

  const renderMobileView = () => (
    <>
      <div>
      </div>
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
  };

  return <>{getViewToRender()}</>;

}

export default Header;