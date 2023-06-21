import React from 'react'
import './style.css'
import SubHeader from '../SubHeader/SubHeader'
import logo from "../../assets/img/logo-weg.png"


function Header() {
  return (
    <><div class="ui menu header">
      <div class="item logo">
        <img src={logo} class="tiny ui fluid image"></img>
      </div>
      <div class="item fluid search">
        <div class="ui icon input">
          <input type="text" placeholder="Search..."/>
            <i class="search icon"></i>
        </div>
      </div>
    </div><SubHeader /></>
  )
}

export default Header