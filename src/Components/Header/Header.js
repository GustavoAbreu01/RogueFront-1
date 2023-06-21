import React from 'react'
import './style.css'
import pokeball from '../../assets/img/pokeball.png';
import SubHeader from '../SubHeader/SubHeader'

function Header() {
  return (
    <><div class="ui menu header">
      <div class="item logo">
      <img class="ui fluid image" src={pokeball}/>
      </div>
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." />
          <i class="search icon"></i>
        </div>
      </div>
    </div><SubHeader /></>
  )
}

export default Header