import React, { useState } from 'react'
import './ProfileModal.css'
import { CgProfile } from 'react-icons/cg'
import logoWeg from "../../assets/img/logoWEG.png"
import LinguageModal from '../LanguageModal/LanguageModal'

export default function ProfileModal() {
    const [openModal, setopenModal] = useState(false);

    const open = () => {
      setopenModal(true);
    };
  
    const openAndClose = () => {
      setopenModal(false);
    };
  
    return (
      <>
        <CgProfile className="MenuIcon" onClick={open}>aa</CgProfile>
          {openModal && (
            <div className="openModal">
                <div className="modal">
                <div className='logoWeg'>
                    <img src={logoWeg} alt="" />
                </div>
                <div className='photo'>
                    <CgProfile size={'5rem'} />
                    <button className='btnPhoto'>Editar</button>
                </div>
                <div className='clientInfo'>
                <div className='name'>
                    <h1>Nome</h1>
                    <input type="text" placeholder='Nome do safado'/>
                </div>
                <div className='email'>
                    <h1>Email</h1>
                    <input type="text" placeholder='Email do safado'/>
                </div>
                <div className='cpf'>
                    <h1>CPF</h1>
                    <input type="text" placeholder='Cpf do safado'/>
                </div>
                </div>
                <div className='linguage'>
                    <h1>Idioma</h1>
                    <LinguageModal/>
                </div>
                </div>
              <div className="background" onClick={openAndClose}></div>
            </div>
          )}
      </>
    );
}
