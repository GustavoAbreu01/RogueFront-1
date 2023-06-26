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
      <div className="img">
        <Link to={"/"}><img src={logo} alt="" /></Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="opc">
        <div className="opcDeEntrada">
          <Link className="account" to="/register">Crie sua conta</Link>/<Link className="login" to="/register">Login</Link>
        </div>
        <Link className="saves" to="/cart"><FaShoppingCart className="carrinho" /></Link>
      </div>
    </header><div className="navBar">
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisores"></div>
        <Link to="/categoria">Motores</Link>
        <div className="divisores"></div>
        <Link to="/carrinho">Tintas e Vernizes</Link>
        <div className="divisores"></div>
        <Link href="#">Automação</Link>
        <div className="divisores"></div>
        <Link href="#">Paineis Eletricos</Link>
        <div className="divisores"></div>
        <Link href="#">Segurança</Link>
        <div className="divisores"></div>
      </div></>
  )
}

export default Header