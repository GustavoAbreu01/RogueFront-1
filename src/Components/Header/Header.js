import React from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'



function Header() {
  return (
    <><header>
      <div class="img">
        <Link to={"/"}><img className='imgHeader' src={logo} alt="" /></Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div class="opcHeader">
        <div class="opcDeEntradaHeader">
          <Link class="accountHeader" to="/register">Crie sua conta</Link>/<Link class="loginHeader" to="/register">Login</Link>
        </div>
        <Link class="savesHeader" to="/cart"><FaShoppingCart class="carrinhoHeader" /></Link>
      </div>
    </header><div class="navBarHeader">
        <div id="menu">
          <MenuModal />
        </div>
        <div class="divisores"></div>
        <Link to="/category" >Motores</Link>
        <div class="divisores"></div>
        <Link to="/category" >Tintas e Vernizes</Link>
        <div class="divisores"></div>
        <Link to="/category">Automação</Link>
        <div class="divisores"></div>
        <Link to="/category">Paineis Eletricos</Link>
        <div class="divisores"></div>
        <Link to="/category">Segurança</Link>
        <div class="divisores"></div>
      </div></>
  )
}

export default Header