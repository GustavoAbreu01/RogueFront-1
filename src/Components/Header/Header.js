//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Header.css'

//importando as frameworks
import { Link } from 'react-router-dom'

//Importando os componentes
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'
import PerfilModal from '../ProfileModal/ProfileModal'

//Importando as imagens
import logo from "../../assets/img/logo-weg.png"

//Importando os ícones
import { FaShoppingCart } from 'react-icons/fa'


function Header() {

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
    </div>
      <div className="nav_bar_header">
        <div className="divisor_header"></div>
        <Link to="/category/agronegocio">Agronegócio</Link>
        <div className="divisor_header"></div>
        <Link to="/category/naval">Naval</Link>
        <div className="divisor_header"></div>
        <Link to="/category/mineracao">Mineração</Link>
        <div className="divisor_header"></div>
        <Link to="/category/edificacao">Edificação</Link>
        <div className="divisor_header"></div>
        <Link to="/category/siderurgia">Siderurgia</Link>
        <div className="divisor_header"></div>
        <Link to="/category/alimenticia">Alimentícia</Link>
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

export default Header;