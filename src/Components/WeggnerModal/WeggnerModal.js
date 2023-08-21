//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './WeggnerModal.css'

//Importando as imagens
import wegnerSleeping from "../../assets/img/weggnerDormindo.png"
import wegnerAwake from "../../assets/img/weggnerAcordado.PNG"

//Importando as animações
import TypeWriter from '../../animations/Transition/TypeWriter';


function WeggnerModal() {

  
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [openModal, setOpenModal] = useState(0)

  function verify() {
    if (openModal != 0) {
      return true
    } else {
      return false
    }
  }

  const renderDesktopView = () => (
    <div>
      {verify() && <div data-aos="fade-up" className='container_modalContent'>
        <div className='box_modalContent_textWeggnerModal'>
          <div className="modalContent_chat">
            <div className="yours modalContent_messages">
              <div id='text' className="modalContent_message last">
                <p>Olá, eu sou o Wegner, seu assistente virtual. Como posso te ajudar?</p>
              </div>
              <TypeWriter />
            </div>
          </div>
          <div className='box_inputWeggnerModal'>
            <div className="ui fluid action input">
              <input type="text" placeholder="Enviar Mensagem..." />
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
  const renderMobileView = () => (
    <div>
    {verify() && <div data-aos="fade-up" className='container_modalContent_mobile'>
      <div className='box_modalContent_textWeggnerModal_mobile'>
        <div className="modalContent_chat_mobile">
          <div className="yours modalContent_messages_mobile">
            <div id='text' className="modalContent_message last_mobile">
              <p className='text_weggner_modal_mobile'>Olá, eu sou o Wegner, seu assistente virtual. Como posso te ajudar?</p>
            </div>
            <TypeWriter />
          </div>
        </div>
        <div className='box_inputWeggnerModal_mobile'>
          <div className="ui fluid action input">
            <input type="text" placeholder="Enviar Mensagem..." />
          </div>
        </div>
      </div>
    </div>}
    <div className='box_modalContent_wegnerModal_mobile'>
      {!verify() ?
        <div onClick={() => setOpenModal(openModal + 1)}><img src={wegnerSleeping} alt='' className='modalContent_wegner_mobile'></img></div>
        :
        <div onClick={() => setOpenModal(openModal - 1)}><img src={wegnerAwake} alt='' className='modalContent_wegner_mobile'></img></div>
      }
    </div>
  </div>

    )
    const getViewToRender = () => {
      if (screenSize.width > 900) {
        return renderDesktopView();
        // } else if (screenSize.width < 900 && screenSize.width > 500) {
        //   return renderTabletView();
      } else {
        return renderMobileView();
      }
    };
  
    return <>{getViewToRender()}</>;
  }

export default WeggnerModal