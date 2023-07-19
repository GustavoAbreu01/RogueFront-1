import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'



function Header() { 

  const [scrolled, setScrolled] = useState(false);

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

  return (
    <><header className={scrolled ? 'scrolled' : ''}>
      <div className="header_img">
        <Link to={"/"}><img className='header_imgHeader' src={logo} alt="" /></Link>
      </div>
      <div className="searchInput">
        <SearchBar />
      </div>
      <div className="box_header_opcHeader">
        <div className="header_opcDeEntradaHeader">
          <Link className="header_accountHeader" to="/register">Crie sua conta</Link>/<Link className="loginHeader" to="/register">Login</Link>
        </div>
        <Link to="/cart"><FaShoppingCart className="header_carrinhoHeaderDetail"/></Link>
      </div>
    </header><div className="box_header_navBarHeader">
        <div id="header_menu">
          <MenuModal />
        </div>
        <div className="header_divisores"></div>
        <Link to="/category" >Motores</Link>
        <div className="header_divisores"></div>
        <Link to="/category" >Tintas e Vernizes</Link>
        <div className="header_divisores"></div>
        <Link to="/category">Automação</Link>
        <div className="header_divisores"></div>
        <Link to="/category">Paineis Eletricos</Link>
        <div className="header_divisores"></div>
        <Link to="/category">Segurança</Link>
        <div className="header_divisores"></div>
      </div></>
  )
}

export default Header