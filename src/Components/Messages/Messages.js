import React from 'react'
import './Messages.css'
import { useState } from 'react';
import { Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { GrNotification } from 'react-icons/gr'
import motors from "../../assets/img/motores.png"
import CartProduct from "../ProductCart/ProductCart";



function Messages() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <div className="cardMessage">
      
          <div className='itemContentMessage'>
            <div>
              <GrNotification className='notificationIconMessage' />
            </div>
            <div className="itemInfoMessage">
              <h4 className="itemNomeMessage">Verificação de E-mail</h4>
              <p className="itemComplementMessage">
               Verifique seu email para finalizar seu processo de cadastro
              </p>
            </div>

            <div class="ui checkbox notifications">
                  <input className="check" type="checkbox" id="visualizado" name="visualizado" value="visualizado" />
                  <label className="desc" htmlFor="visualizado"></label>
                </div>
          </div>
      </div >
    </>
  );
};
export default Messages