import React, { useState } from 'react'
import './style.css'
import wegnerSleeping from "../../assets/img/weggnerDormindo.png"
import wegnerAwake from "../../assets/img/weggnerAcordado.PNG"

function WeggnerModal() {

  const [openModal, setOpenModal] = useState(0)

  function verify() {
    if (openModal != 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
      {verify() &&<div className='modalContent'>
            ffff
        </div>}
    <div className='wegnerModal'>
      {!verify() ?
        <div onClick={() => setOpenModal(openModal + 1)}><img src={wegnerSleeping} alt='' className='wegner'></img></div>
        : 
        <div onClick={() => setOpenModal(openModal - 1)}><img src={wegnerAwake} alt='' className='wegner'></img></div>   
        }
    </div>
    </div>
  )
}

export default WeggnerModal