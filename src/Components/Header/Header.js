import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'
import PerfilModal from '../ProfileModal/ProfileModal'
import { UserService } from '../../Service'

function HeaderLogin() {

  const [user, setUser] = useState({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        let users = await UserService.getAll();
        users.forEach((user1) => {
          if (user1.register === JSON.parse(localStorage.getItem('userCpf'))) {
            setUser(user1)
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
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

  return (
    <><header className={scrolled ? 'scrolled' : ''}>
      <div className="img">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div className="searchInput">
        <SearchBar/>
        
      </div>
      <div className="opc">
        <div className='opc_user'>
          <Link to="/register "><p className='opc_login'>Login</p></Link><Link to="/register "><p className='opc_register'>/</p></Link><Link to="/register "><p className='opc_register'>Realizar Cadastro</p></Link>
        </div>
        <div className='icons'>
          <Link className="cart" to="/cart"><FaShoppingCart className="carrinho" /></Link>
        </div>
      </div>
    </header><div className="navBar">
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisores"></div>
        <Link to="/category">Motores</Link>
        <div className="divisores"></div>
        <Link to="/category">Tintas e Vernizes</Link>
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

export default HeaderLogin