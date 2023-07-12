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
      <div className="img">
        <Link to={"/"}><img className='imgHeader' src={logo} alt="" /></Link>
      </div>
      <div className="searchInput">
        <SearchBar />
      </div>
      <div className="opcHeader">
        <div className="opcDeEntradaHeader">
          <Link className="accountHeader" to="/register">Crie sua conta</Link>/<Link className="loginHeader" to="/register">Login</Link>
        </div>
        <Link to="/cart"><FaShoppingCart className="carrinhoHeaderDetail"/></Link>
      </div>
    </header><div className="navBarHeader">
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisores"></div>
        <Link to="/category" >Motores</Link>
        <div className="divisores"></div>
        <Link to="/category" >Tintas e Vernizes</Link>
        <div className="divisores"></div>
        <Link to="/category">Automação</Link>
        <div className="divisores"></div>
        <Link to="/category">Paineis Eletricos</Link>
        <div className="divisores"></div>
        <Link to="/category">Segurança</Link>
        <div className="divisores"></div>
      </div></>
  )
}

export default Header