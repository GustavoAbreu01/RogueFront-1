import React, { useState } from 'react'
import './ProfileModal.css'
import { CgProfile } from 'react-icons/cg'
import logoWeg from "../../assets/img/logoWEG.png"
import LanguageModal from '../LanguageModal/LanguageModal'
import { useEffect } from 'react'
import { UserService } from '../../Service'

export default function ProfileModal() {
    const [openModal, setopenModal] = useState(false);
    const [user, setUser] = useState({});

    const open = () => {
      setopenModal(true);
    };
  
    const openAndClose = () => {
      setopenModal(false);
    };

    useEffect(() => {
      async function fetchData() {
        try {
          let users = await UserService.getAll();
          users.forEach((user) => {
            if (user.register === JSON.parse(localStorage.getItem('userCpf'))) {
              setUser(user)
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    
      fetchData();
    }, []);
  
    return (
      <>
        <CgProfile className="MenuIcon" onClick={open}>aa</CgProfile>
          {openModal && (
            <div className="openModal">
                <div className="modalProfile">
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
                    <p>{user.name}</p>
                </div>
                <div className='email'>
                    <h1>Email</h1>
                    <p>{user.email}</p>
                </div>
                <div className='cpf'>
                    <h1>CPF</h1>
                    <p>{user.register}</p>
                </div>
                </div>
                <div >
                    <h1>Idioma</h1>
                    <LanguageModal/>
                </div>
                </div>
              <div className="background" onClick={openAndClose}></div>
            </div>
          )}
      </>
    );
}
