//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './HeaderLogin.css'

//Importando a Service
import { UserService } from '../../Service'

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
import { BsFillBookmarkFill } from 'react-icons/bs'

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
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisor_header_login"></div>
        <Link to="/category">Motores</Link>
        <div className="divisor_header_login"></div>
        <Link to="/category">Tintas e Vernizes</Link>
        <div className="divisor_header_login"></div>
        <Link to="/category">Automação</Link>
        <div className="divisor_header_login"></div>
        <Link to="/category">Paineis Eletricos</Link>
        <div className="divisor_header_login"></div>
        <Link to="/category">Segurança</Link>
        <div className="divisor_header_login"></div>
      </div></>
  )
}

export default HeaderLogin