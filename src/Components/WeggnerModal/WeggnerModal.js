import React, { useState } from 'react'
import './WeggnerModal.css'
import { Link } from 'react-router-dom'
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
       <Link to='/weggner'>
      {verify() &&<div data-aos="fade-up" className='modalContent'>
        <div className='textWeggnerModal'>
           <h5>Clique aqui para acessar o chat com Weggner</h5>
           </div>
        </div>}
        </Link>
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