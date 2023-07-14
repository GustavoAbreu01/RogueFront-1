import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RatedProducts from '../../Components/RatedProducts/RatedProducts';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { FaStar } from 'react-icons/fa';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';


function EditProfile() {

  const [activeSection, setActiveSection] = useState(1);
  const [editMode, setEditMode] = useState(false);

  const changeInfo = (event) => {
    event.preventDefault();
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
                <form class="ui form edit">
                  <div class="field">
                    <div class="two fields">
                      <div class="field">
                        <label>Nome</label>
                        <input type="text" name="shipping[first-name]" placeholder="Primiero Nome" />
                      </div>
                      <div class="field">
                        <label>Sobrenome</label>
                        <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" />
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="fields">
                      <div class="twelve wide field">
                        <label>Email Profissional</label>
                        <input type="text" name="shipping[address]" placeholder="Complemento" />
                      </div>
                      <div class="four wide field">
                        <label>CPF/CNPJ</label>
                        <input type="text" name="shipping[address-2]" placeholder="CEP " />
                      </div>
                    </div>
                  </div>
                </form>
                  <button onClick={changeInfo} className="ui button edit">Salvar</button>
              </div>
            </div>
          ) : activeSection === 2 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Mensagens</h2>
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
                <RatedProducts />
                <RatedProducts />
              </div>
            </div>
          ) : null}
        </div>
      </div >
      <div className='boxTitleSimilarCompare'>
        <FaStar color='var(--white)' size={40} />
        <h1 className='titleSimilar' >Recomendados</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  );
}

export default EditProfile;
