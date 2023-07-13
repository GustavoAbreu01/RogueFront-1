import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';

function EditProfile() {
  const [productsCompared, setItems] = useState([]);
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const productComparedList = JSON.parse(localStorage.getItem('productsCompared'));
    if (productComparedList) {
      setItems(productComparedList);
    }
  }, []);

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
              </div>
            </div>
          ) : activeSection === 2 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">a</h2>
              </div>
            </div>
          ) : activeSection === 3 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">b</h2>
              </div>
            </div>
          ) : activeSection === 4 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">c</h2>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
