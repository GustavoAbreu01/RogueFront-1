import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import Messages from '../../Components/Messages/Messages'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RatedProducts from '../../Components/RatedProducts/RatedProducts';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';


function EditProfile() {

  const [activeSection, setActiveSection] = useState(1);
  const [editMode, setEditMode] = useState(false);

  const changeInfo = () => {
    setEditMode(true);
  };

  const verifyHeader = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === 'yes') {
      return true;
    } else {
      return false;
    }
  };

  const changeSection = (section) => {
    setActiveSection(section);
  };


  return (
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}
      <WeggnerModal />
      <div className="containerEdit">
        <div className="ui grid edit">
          <div className="two column row edit">
            <div className="ui row edit">
              <div className="column edit">
                <div className="settingsBarEdit">
                  <div className="mainInfoEdit">
                    <CgProfile className="profileEdit" />
                    <h4>Nome Sobrenome</h4>
                    <p>000.000.000-00</p>
                  </div>
                  <div className="ui vertical menu edit">
                    <div onClick={() => changeSection(1)} id="profileBoxContainer" className={`item ${activeSection === 1 ? 'active' : ''}`}>
                      <p className="titleSectionEdit">Perfil</p>
                    </div>
                    <div onClick={() => changeSection(2)} id="menssageBoxContainer" className={`item ${activeSection === 2 ? 'active' : ''}`}>
                      <p className="titleSectionEdit">Mensagens</p>
                    </div>
                    <div onClick={() => changeSection(3)} id="addressBoxContainer" className={`item ${activeSection === 3 ? 'active' : ''}`}>
                      <p className="titleSectionEdit">Endereço</p>
                    </div>
                    <div onClick={() => changeSection(4)} id="ratingBoxContainer" className={`item ${activeSection === 4 ? 'active' : ''}`}>
                      <p className="titleSectionEdit">Avaliações</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui row editSectionProfile">
          {activeSection === 1 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Informações Pessoais</h2>
                <form className="ui form editOptions">
                  <div className='field name label'>
                    <label>Nome: <AiFillEdit className="" /></label>
                    <label>Sobrenome: <AiFillEdit className="" /></label>
                  </div>
                  <div className="field name surname" >
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} className='butaum' type="text" name="emailLogin" placeholder="Nome Sobrenome" />
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="emailLogin" placeholder="Nome Sobrenome" />
                  </div>
                  <div className='field password label'>
                    <label>Senha: <AiFillEdit className="" /></label>
                    <label>Confirmar Senha: <AiFillEdit className="" /></label>
                  </div>
                  <div className="field password">
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="emailLogin" placeholder="SuaSenha/123455" />
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="emailLogin" placeholder="SuaSenha/123455" />
                  </div>
                  <div onClick={changeInfo}>
                    <button className="editButton">Editar</button>
                  </div>
                </form>
              </div>
            </div>
          ) : activeSection === 2 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Mensagens</h2>
                <Messages/>
              </div>

            </div>
          ) : activeSection === 3 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Endereço</h2>
              </div>
            </div>
          ) : activeSection === 4 ? (
            <div className="column sections">
              <div className="edit-section-ratings">
                <h2 className="edit-section-title-profile">Avaliações</h2>
                <RatedProducts/>
                <RatedProducts/>
              </div>
            </div>
          ) : null}
        </div>
      </div >
      <Footer />
    </>
  );
}

export default EditProfile;
