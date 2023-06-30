import React from 'react'
import './style.css'
import { FaShoppingCart } from 'react-icons/fa'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'



function Header() {
  return (
    <><header>
      <div class="imgHeader">
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
        <Link routerLink="/categoria">Motores</Link>
        <div class="divisores"></div>
        <Link routerLink="/carrinho">Tintas e Vernizes</Link>
        <div class="divisores"></div>
        <Link href="">Automação</Link>
        <div class="divisores"></div>
        <Link href="">Paineis Eletricos</Link>
        <div class="divisores"></div>
        <Link href="">Segurança</Link>
        <div class="divisores"></div>
      </div></>
  )
}

export default Header