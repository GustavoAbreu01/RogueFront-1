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
      <div class="img">
        <Link to={"/"}><img src={logo} alt="" /></Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div class="opc">
        <div class="opcDeEntrada">
          <Link class="account" to="/register">Crie sua conta</Link>/<Link class="login" to="/register">Login</Link>
        </div>
        <Link class="saves" to="/cart"><FaShoppingCart class="carrinho" /></Link>
      </div>
    </header><div class="navBar">
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