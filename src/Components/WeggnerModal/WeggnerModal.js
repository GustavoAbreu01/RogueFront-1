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
      {verify() && <div data-aos="fade-up" className='container_modalContent'>
        <div className='box_modalContent_textWeggnerModal'>
          <div class="modalContent_chat">
            <div class="yours modalContent_messages">
              <div id='text' class="modalContent_message last">
                <p>Olá, eu sou o Wegner, seu assistente virtual. Como posso te ajudar?</p>
              </div>
              <TypeWriter />
            </div>
          </div>
          <div className='box_inputWeggnerModal'>
            <div class="ui fluid action input">
              <input type="text" placeholder="Enviar Mensagem..."/>
            </div>
          </div>
        </div>
      </div>}
      <div className='box_modalContent_wegnerModal'>
        {!verify() ?
          <div onClick={() => setOpenModal(openModal + 1)}><img src={wegnerSleeping} alt='' className='modalContent_wegner'></img></div>
          :
          <div onClick={() => setOpenModal(openModal - 1)}><img src={wegnerAwake} alt='' className='modalContent_wegner'></img></div>
        }
      </div>
    </div>

  )

}

export default WeggnerModal