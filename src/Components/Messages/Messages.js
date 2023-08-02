//Importando o React e o CSS
import React from 'react'
import './Messages.css'

//Importando os ícones
import { GrNotification } from 'react-icons/gr'

function Messages() {

  return (
    <>
      <div className="container_card_message">
        <div className='box_card_message_content'>
          <div className='card_message_icon'>
            <GrNotification color='var(--white)' className='' />
          </div>
          <div className="box_card_message_info">
            <h4 className="box_card_message_name">Verificação de E-mail</h4>
            <p className="box_card_message_description">
              Verifique seu email para finalizar seu processo de cadastro
            </p>
          </div>

          <div className="ui checkbox card_message">
            <input className="check" type="checkbox" id="visualizado" name="visualizado" value="visualizado" />
            <label className="desc" htmlFor="visualizado"></label>
          </div>
        </div>
      </div >
    </>
  );
};
export default Messages