import React from 'react'
import './style.css'
import { FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchModal/SearchModal'
import MenuModal from '../MenuModal/MenuModal'



function HeaderLogin() {
  return (
    <><header>
      <div className="img">
        <Link routerLink="#"><img src={logo} alt="" /></Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="opc">
        <div className='icons'>
          <BsFillBookmarkFill size={'2rem'} routerLink="/salvos" className='saves'/>
        </div>
        <div className='icons'>
          <Link className="cart" routerLink="/salvos"><FaShoppingCart className="carrinho" /></Link>
        </div>
        <div className='icons'>
          <CgProfile size={'3.5rem'} className='profile' />
        </div>
      </div>
    </header><div className="navBar">
        <div id="menu">
          <MenuModal />
        </div>
        <div className="divisores"></div>
        <Link routerLink="/categoria">Motores</Link>
        <div className="divisores"></div>
        <Link routerLink="/carrinho">Tintas e Vernizes</Link>
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

export default HeaderLogin