import React from 'react'
import './style.css'
import SubHeader from '../SubHeader/SubHeader'
import logo from "../../assets/img/logo-weg.png"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <div className="ui grid header">
        <div className="three wide column">
          <img src={logo} className='logo image' />
        </div>
        <div className="eight wide column">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." className='search input' />
            <i class="search icon"></i>
          </div>
        </div>
        <div className="three wide column">
          <Link to={'/register'}><p className='text header'>Crie sua conta / Login</p></Link>
        </div>
        <div className="two wide column">
          <Link to={'/cart'} className='text header'>
            <i class="shopping cart icon"></i>
          </Link>
        </div>
      </div>
      <SubHeader /></>
  )
}

export default Header