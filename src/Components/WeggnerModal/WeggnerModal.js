import React, { useState } from 'react'
import './WeggnerModal.css'
import { Link } from 'react-router-dom'
import wegnerSleeping from "../../assets/img/weggnerDormindo.png"
import wegnerAwake from "../../assets/img/weggnerAcordado.PNG"
import TypeWriter from '../../animations/Transition/TypeWriter';
import { render } from '@testing-library/react'

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
      {verify() && <div data-aos="fade-up" className='modalContent'>
        <div className='textWeggnerModal'>
          <div class="chat">
            <div class="yours messages">
              <div id='text' class="message last">
                <p>Olá, eu sou o Wegner, seu assistente virtual. Como posso te ajudar?</p>
              </div>
              <TypeWriter />
            </div>
          </div>
          <div className='inputWeggnerModal'>
            <div class="ui fluid action input">
              <input type="text" placeholder="Enviar Mensagem..."/>
            </div>
          </div>
        </div>
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