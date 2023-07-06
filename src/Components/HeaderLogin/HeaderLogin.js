import React, { useEffect, useState } from 'react'
import './HeaderLogin.css'
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

  return (
    <><header>
      <div className="img">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="opc">
        <div className='icons'>
          <Link to="/save "><BsFillBookmarkFill size={'2rem'} className='saves'/></Link>
        </div>
        <div className='icons'>
          <Link className="cart" to="/cart"><FaShoppingCart className="carrinho" /></Link>
        </div>
        <div>
          <PerfilModal user={user}/>
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