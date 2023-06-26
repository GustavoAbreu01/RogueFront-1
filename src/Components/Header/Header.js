import React from 'react'
import './style.css'
import { FaShoppingCart } from 'react-icons/fa'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchModal/SearchModal'


function Header() {
  return (
    <><header>
      <div class="img">
        <a routerLink=""><img src={logo} alt="" /></a>
      </div>
      <div>
        <SearchBar/>
      </div>
      <div class="opc">
        <div class="opcDeEntrada">
          <a class="account" routerLink="/cadastro">Crie sua conta</a>/<a class="login" routerLink="/cadastro">Login</a>
        </div>
        <Link class="saves" routerLink="/salvos"><FaShoppingCart class="carrinho" /></Link>
      </div>
    </header><div class="navBar">
        <div id="menu">
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