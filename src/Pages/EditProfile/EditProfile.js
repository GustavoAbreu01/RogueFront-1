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
import { FaStar } from 'react-icons/fa';
import { CiSquareAlert } from 'react-icons/ci';
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
                      <div class={editMode ? "field" : "field disabled"}>
                        <label>Nome</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Gustavo" />
                      </div>
                      <div class={editMode ? "field" : "field disabled"}>
                        <label>Sobrenome</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="Abreu" />
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="fields">
                      <div class={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                        <label>Email Profissional</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="carlosabreu@gmail.com" />
                      </div>
                      <div class={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>CPF/CNPJ</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address-2]" placeholder="076.137.949-54" />
                      </div>
                    </div>
                  </div>
                  <div className="buttonsProfileEdit">
                    {!editMode ? (
                      <div className='editButton'>
                        <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                      </div>
                    ) : (
                      <div className='cancelButton'>
                        <button onClick={changeInfo} className="fluid ui button cancel">Cancelar</button>
                      </div>
                    )
                    }
                    {!editMode ? (
                      <div>
                      </div>
                    ) : (
                      <div className='conclusionButton'>
                        <button onClick={changeInfo} className="fluid ui button conclusion">Concluir</button>
                      </div>
                    )}
                  </div>
                </form>
                <div className='containerInformationProfile'>
                  {editMode ? (
                    <CiSquareAlert className='iconInformationProfileAlert' />
                  ) : (
                    <CiSquareAlert className='iconInformationProfile' />
                  )
                  }
                  <p>
                    Para garantir a precisão e integridade das informações,
                    pedimos que verifique cuidadosamente todos os dados antes de
                    concluir qualquer edição em sua conta de e-commerce. Lembre-se de que alterações
                    incorretas ou incompletas podem afetar negativamente sua experiência de compra e o
                    processamento adequado dos pedidos.
                  </p>
                </div>
              </div>
            </div>
          ) : activeSection === 2 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Mensagens</h2>
                <div className='messagesContainer'>
                  <Messages />
                  <Messages />
                  <Messages />
                  <Messages />
                  <Messages />
                  <Messages />
                </div>
              </div>

            </div>
          ) : activeSection === 3 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Endereço Registrado</h2>
                <form class="ui form edit">
                  <div class="field">
                    <div class="two fields">
                      <div class={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                        <label>Complemento</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Complemento" />
                      </div>
                      <div class={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>CEP</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="89256-890" />
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="fields">
                      <div class={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                        <label>Endereço</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="Rua, Bairro, Número" />
                      </div>
                      <div class={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>Estado</label>
                        <select class="ui fluid dropdown">
                          <option value="">Estado</option>
                          <option value="AC">Acre</option>
                          <option value="AL">Alagoas</option>
                          <option value="AP">Amapá</option>
                          <option value="AM">Amazonas</option>
                          <option value="BA">Bahia</option>
                          <option value="CE">Ceará</option>
                          <option value="DF">Distrito Federal</option>
                          <option value="ES">Espírito Santo</option>
                          <option value="GO">Goiás</option>
                          <option value="MA">Maranhão</option>
                          <option value="MT">Mato Grosso</option>
                          <option value="MS">Mato Grosso do Sul</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="PA">Pará</option>
                          <option value="PB">Paraíba</option>
                          <option value="PR">Paraná</option>
                          <option value="PE">Pernambuco</option>
                          <option value="PI">Piauí</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="RN">Rio Grande do Norte</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="RO">Rondônia</option>
                          <option value="RR">Roraima</option>
                          <option value="SC">Santa Catarina</option>
                          <option value="SP">São Paulo</option>
                          <option value="SE">Sergipe</option>
                          <option value="TO">Tocantins</option>
                        </select>
                      </div>
                      <div class={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>País</label>
                        <select class="ui fluid dropdown">
                          <option value="">País</option>
                          <option value="ZA">África do Sul</option>
                          <option value="DE">Alemanha</option>
                          <option value="AE">Emirados Árabes Unidos</option>
                          <option value="AR">Argentina</option>
                          <option value="DZ">Argélia</option>
                          <option value="AU">Austrália</option>
                          <option value="BR">Brasil</option>
                          <option value="BE">Bélgica</option>
                          <option value="CA">Canadá</option>
                          <option value="KZ">Cazaquistão</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CO">Colômbia</option>
                          <option value="KR">Coreia do Sul</option>
                          <option value="AE">Emirados Árabes Unidos</option>
                          <option value="ES">Espanha</option>
                          <option value="US">Estados Unidos</option>
                          <option value="FR">França</option>
                          <option value="IN">Índia</option>
                          <option value="IT">Itália</option>
                          <option value="MX">México</option>
                          <option value="PT">Portugal</option>
                          <option value="GB">Reino Unido</option>
                          <option value="TR">Turquia</option>

                          , Equador, Espanha, Estados Unidos, França, Gana, Itália, Japão, Malásia, Países Baixos, Peru, Polônia, Reino Unido, Rússia,[a] Singapura, Suécia, Tailândia, Turquia e Índia, além de 57 filiais[24] e distribuição em mais de 135 países.
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="buttonsProfileEdit">
                    {!editMode ? (
                      <div className='editButton'>
                        <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                      </div>
                    ) : (
                      <div className='cancelButton'>
                        <button onClick={changeInfo} className="fluid ui button cancel">Cancelar</button>
                      </div>
                    )
                    }
                    {!editMode ? (
                      <div>
                      </div>
                    ) : (
                      <div className='conclusionButton'>
                        <button onClick={changeInfo} className="fluid ui button conclusion">Concluir</button>
                      </div>
                    )}
                  </div>
                </form>
                <div className='containerInformationProfile'>
                  {editMode ? (
                    <CiSquareAlert className='iconInformationProfileAlert' />
                  ) : (
                    <CiSquareAlert className='iconInformationProfile' />
                  )
                  }
                  <p>
                    Para garantir a precisão e integridade das informações,
                    pedimos que verifique cuidadosamente todos os dados antes de
                    concluir qualquer edição em sua conta de e-commerce. Lembre-se de que alterações
                    incorretas ou incompletas podem afetar negativamente sua experiência de compra e o
                    processamento adequado dos pedidos.
                  </p>
                </div>
              </div>
            </div>
          ) : activeSection === 4 ? (
            <div className="column sections">
              <div className="edit-section-profile">
                <h2 className="edit-section-title-profile">Avaliações</h2>
                <div className='ratingContainer'>
                  <RatedProducts />
                  <RatedProducts />
                </div>
              </div>
            </div>
          ) : null}
        </div >
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
