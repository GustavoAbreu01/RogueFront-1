//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './EditProfile.css';

//importando as frameworks
import { Link } from 'react-router-dom';

//Importando os componentes
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';
import Messages from '../../Components/Messages/Messages'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RatedProducts from '../../Components/RatedProducts/RatedProducts';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';

//Importando os icones
import { FaStar } from 'react-icons/fa';
import { CiSquareAlert } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineBell } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { RxAccessibility } from 'react-icons/rx';


function EditProfile() {

  const [activeSection, setActiveSection] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('showComponent');
    if (storedValue) {
      setShowComponent(storedValue === 'true');
    }
  }, []);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setShowComponent(newValue);
    // Store checkbox value in localStorage
    localStorage.setItem('showComponent', newValue);
  };

  const changeInfo = (event) => {
    event.preventDefault();
    setEditMode(true);
  };

  const ConfirmChangeInfo = (event) => {
    event.preventDefault();
    setEditMode(false);
  };

  const dontChangeInfo = (event) => {
    event.preventDefault();
    setEditMode(false);
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

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const applyFontSize = () => {
    if (selectedSize === 'small')
      document.body.style.fontSize = "12px";
    else if (selectedSize === 'medium')
      document.body.style.fontSize = "14px";
    else if (selectedSize === 'large')
      document.body.style.fontSize = "16px";
    else if (selectedSize === 'veryLarge')
      document.body.style.fontSize = "18px";
  };



  const renderDesktopView = () => (
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}
      <WeggnerModal />
      <div className="container_edit_profile">
        <div className="ui grid edit">
          <div className="two column row edit">
            <div className="ui row edit">
              <div className="column edit">
                <div className="box_settings_bar_edit">
                  <div className="settings_bar_edit_profile">
                    <CgProfile className="edit_profile" />
                    <h4>Nome Sobrenome</h4>
                    <p>000.000.000-00</p>
                  </div>
                  <div className="ui vertical menu edit">
                    <div onClick={() => changeSection(1)} id="profileBoxContainer" className={`item ${activeSection === 1 ? 'active' : ''}`}>
                      <p className="title_section_edit_profile">Perfil</p>
                    </div>
                    <div onClick={() => changeSection(2)} id="menssageBoxContainer" className={`item ${activeSection === 2 ? 'active' : ''}`}>
                      <p className="title_section_edit_profile">Mensagens</p>
                    </div>
                    <div onClick={() => changeSection(3)} id="addressBoxContainer" className={`item ${activeSection === 3 ? 'active' : ''}`}>
                      <p className="title_section_edit_profile">Endereço</p>
                    </div>
                    <div onClick={() => changeSection(4)} id="ratingBoxContainer" className={`item ${activeSection === 4 ? 'active' : ''}`}>
                      <p className="title_section_edit_profile">Avaliações</p>
                    </div>
                    <div onClick={() => changeSection(5)} id="ratingBoxContainer" className={`item ${activeSection === 5 ? 'active' : ''}`}>
                      <p className="title_section_edit_profile">Acessibilidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui row edit">
          {activeSection === 1 ? (
            <div className="column sections">
              <div className="box_edit_section_profile">
                <h2 className="edit_section_title_profile">Informações Pessoais</h2>
                <form className="ui form edit">
                  <div className="field">
                    <div className="two fields">
                      <div className={editMode ? "field" : "field disabled"}>
                        <label>Nome</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Gustavo" />
                      </div>
                      <div className={editMode ? "field" : "field disabled"}>
                        <label>Sobrenome</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="Abreu" />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="fields">
                      <div className={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                        <label>Email Profissional</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="carlosabreu@gmail.com" />
                      </div>
                      <div className={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>CPF/CNPJ</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address-2]" placeholder="076.137.949-54" />
                      </div>
                    </div>
                  </div>
                  <div className="buttons_profile_edit">
                    {!editMode ? (
                      <div className='edit_profile_Button'>
                        <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                      </div>
                    ) : (
                      <div className='cancel_profile_Button'>
                        <button onClick={dontChangeInfo} className="fluid ui button cancel">Cancelar</button>
                      </div>
                    )
                    }
                    {!editMode ? (
                      <div>
                      </div>
                    ) : (
                      <div className='conclusion_profile_button'>
                        <button onClick={ConfirmChangeInfo} className="fluid ui button conclusion">Concluir</button>
                      </div>
                    )}
                  </div>
                </form>
                <div className='container_information_profile_edit'>
                  {editMode ? (
                    <CiSquareAlert className='icon_information_profile_alert' />
                  ) : (
                    <CiSquareAlert className='ico_information_profile' />
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
              <div className="box_edit_section_profile">
                <h2 className="edit_section_title_profile">Mensagens</h2>
                <div className='messages_container_profile'>
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
              <div className="box_edit_section_profile">
                <h2 className="edit_section_title_profile">Endereço Registrado</h2>
                <form className="ui form edit">
                  <div className="field">
                    <div className="two fields">
                      <div className={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                        <label>Complemento</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Complemento" />
                      </div>
                      <div className={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>CEP</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="89256-890" />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="fields">
                      <div className={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                        <label>Endereço</label>
                        <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="Rua, Bairro, Número" />
                      </div>
                      <div className={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>Estado</label>
                        <select className="ui fluid dropdown">
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
                      <div className={editMode ? "four wide field" : "four wide field disabled"}>
                        <label>País</label>
                        <select className="ui fluid dropdown">
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
                  <div className="buttons_profile_edit">
                    {!editMode ? (
                      <div className='edit_profile_Button'>
                        <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                      </div>
                    ) : (
                      <div className='cancel_profile_Button'>
                        <button onClick={dontChangeInfo} className="fluid ui button cancel">Cancelar</button>
                      </div>
                    )
                    }
                    {!editMode ? (
                      <div>
                      </div>
                    ) : (
                      <div className='conclusion_profile_button'>
                        <button onClick={ConfirmChangeInfo} className="fluid ui button conclusion">Concluir</button>
                      </div>
                    )}
                  </div>
                </form>
                <div className='container_information_profile_edit'>
                  {editMode ? (
                    <CiSquareAlert className='icon_information_profile_alert' />
                  ) : (
                    <CiSquareAlert className='ico_information_profile' />
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
              <div className="box_edit_section_profile">
                <h2 className="edit_section_title_profile">Avaliações</h2>
                <div className='rating_container_profile'>
                  <RatedProducts />
                  <RatedProducts />
                  <RatedProducts />
                  <RatedProducts />
                </div>
              </div>
            </div>

          ) : activeSection === 5 ? (
            <div className="column sections">
              <div className="box_edit_section_profile">

                <h2 className="edit_section_title_profile">Acessibilidade</h2>
                <div className='acessebility_containerscrowll_profile' >

                  <div className='acessebility_container_profile' >
                    <div className='acessebility_box_profile'>
                      <div className='acessebility_container_profile_title' >
                        <h5>Libras</h5>
                      </div>
                      <div className="acessebility_profile_switcher">
                        <div className="checkbox-wrapper-6">
                          <input className="tgl tgl-light" id="cb1-1" type="checkbox" />
                          <label className="tgl-btn" for="cb1-1" />
                        </div>
                      </div>
                    </div>
                    <div className="acessebility_profile_description">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                  </div>
                  <div className='divider'></div>
                  <div className='acessebility_container_profile' >
                    <div className='acessebility_box_profile'>
                      <div className='acessebility_container_profile_title' >
                        <h5>Leitura de Texto</h5>
                      </div>
                      <div className="acessebility_profile_switcher">
                        <div className="checkbox-wrapper-6">
                          <input className="tgl tgl-light" id="cb1-6" type="checkbox" />
                          <label className="tgl-btn" for="cb1-6" />
                        </div>
                      </div>
                    </div>
                    <div className="acessebility_profile_description">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                  </div>
                </div>

              </div>
            </div>
          ) : null}

        </div >
      </div >
      <div className='box_edit_profile_title_similar'>
        <FaStar color='var(--white)' size={40} />
        <h1 className='titleSimilar' >Recomendados</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  )
  const renderMobileView = () => (
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}
      <WeggnerModal />
      <div className="container_edit_profile_mobile">
        <div className="box_settings_bar_edit_mobile">
          <div className="settings_bar_edit_profile_mobile">
            <div onClick={() => changeSection(1)} id="profileBoxContainer" className={`item ${activeSection === 1 ? 'active' : ''}`}>
              <CgProfile className="edit_profile_mobile" />
            </div>
            <h4>Nome Sobrenome</h4>
            <p>000.000.000-00</p>
          </div>
          <div className="menu_edit_profile">
            <div onClick={() => changeSection(2)} id="menssageBoxContainer" className={`item ${activeSection === 2 ? 'active' : ''}`}>
              <AiOutlineBell className="edit_icon_mobile" />
            </div>
            <div onClick={() => changeSection(3)} id="addressBoxContainer" className={`item ${activeSection === 3 ? 'active' : ''}`}>
              <BiBuildingHouse className="edit_icon_mobile" />
            </div>
            <div onClick={() => changeSection(4)} id="ratingBoxContainer" className={`item ${activeSection === 4 ? 'active' : ''}`}>
              <AiOutlineStar className="edit_icon_mobile" />
            </div>
            <div onClick={() => changeSection(5)} id="ratingBoxContainer" className={`item ${activeSection === 5 ? 'active' : ''}`}>
              <RxAccessibility className="edit_icon_mobile" />
            </div>
          </div>
        </div>


        {activeSection === 1 ? (
          <div className="box_edit_section_profile_mobile">
            <h2 className="edit_section_title_profile_mobile">Informações Pessoais</h2>
            <form className="ui form edit">
              <div className="field">
                <div className="four fields">
                  <div className={editMode ? "field" : "field disabled"}>
                    <label>Nome</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Gustavo" />
                  </div>
                  <div className={editMode ? "field" : "field disabled"}>
                    <label>Sobrenome</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="Abreu" />
                  </div>
                </div>
                <div className={editMode ? "field" : "field disabled"}>
                  <label>Email Profissional</label>
                  <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="carlosabreu@gmail.com" />
                </div>
                <div className={editMode ? "field" : "field disabled"}>
                  <label>CPF/CNPJ</label>
                  <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address-2]" placeholder="076.137.949-54" />
                </div>
              </div>
              <div className="buttons_profile_edit">
                {!editMode ? (
                  <div className='edit_profile_Button_mobile'>
                    <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                  </div>
                ) : (
                  <div className='cancel_profile_Button_mobile'>
                    <button onClick={dontChangeInfo} className="fluid ui button cancel">Cancelar</button>
                  </div>
                )}
                {!editMode ? (
                  <div>
                  </div>
                ) : (
                  <div className='conclusion_profile_button_mobile'>
                    <button onClick={ConfirmChangeInfo} className="fluid ui button conclusion">Concluir</button>
                  </div>
                )}
              </div>
            </form>
            <div className='container_information_profile_edit_mobile'>
              {editMode ? (
                <CiSquareAlert className='icon_information_profile_alert_mobile' />
              ) : (
                <CiSquareAlert className='ico_information_profile_mobile' />
              )}
              <p>
                Para garantir a precisão e integridade das informações,
                pedimos que verifique cuidadosamente todos os dados antes de
                concluir qualquer edição em sua conta de e-commerce.
              </p>
            </div>
          </div>

        ) : activeSection === 2 ? (
          <div className="column sections">
            <div className="box_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Mensagens</h2>
              <div className='messages_container_profile_mobile'>
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
            <div className="box_edit_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Endereço Registrado</h2>
              <form className="ui form edit">
                <div className="field">

                  <div className={editMode ? "field" : "twelve wide field disabled"}>
                    <label>Complemento</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Complemento" />
                  </div>
                  <div className={editMode ? "field" : "field disabled"}>
                    <label>CEP</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="89256-890" />
                  </div>

                </div>
                <div className="field">
                  <div className="fields">
                    <div className={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                      <label>Endereço</label>
                      <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="Rua, Bairro, Número" />
                    </div>
                    <div className={editMode ? "four wide field" : "four wide field disabled"}>
                      <label className='state_edit_section_profile_mobile'>Estado</label>
                      <select className="ui fluid dropdown">
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
                    <div className={editMode ? "four wide field" : "four wide field disabled"}>
                      <label className='state_edit_section_profile_mobile' >País</label>
                      <select className="ui fluid dropdown">
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
                <div className="buttons_profile_edit">
                  {!editMode ? (
                    <div className='edit_profile_Button_mobile'>
                      <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                    </div>
                  ) : (
                    <div className='cancel_profile_Button_mobile'>
                      <button onClick={dontChangeInfo} className="fluid ui button cancel">Cancelar</button>
                    </div>
                  )}
                  {!editMode ? (
                    <div>
                    </div>
                  ) : (
                    <div className='conclusion_profile_button_mobile'>
                      <button onClick={ConfirmChangeInfo} className="fluid ui button conclusion">Concluir</button>
                    </div>
                  )}
                </div>
              </form>
              <div className='container_information_profile_edit_mobile'>
                {editMode ? (
                  <CiSquareAlert className='icon_information_profile_alert_mobile' />
                ) : (
                  <CiSquareAlert className='ico_information_profile_mobile' />
                )}
                <p>
                  Para garantir a precisão e integridade das informações,
                  pedimos que verifique cuidadosamente todos os dados antes de
                  concluir qualquer edição em sua conta de e-commerce.
                </p>
              </div>
            </div>
          </div>
        ) : activeSection === 4 ? (
          <div className="column sections">
            <div className="box_section_rating_mobile">
              <h2 className="edit_section_title_profile_mobile">Avaliações</h2>
              <div className='rating_container_profile_mobile'>
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />

              </div>
            </div>
          </div>

        ) : activeSection === 5 ? (
          <div className="column sections">
            <div className="box_edit_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Acessibilidade</h2>
              <div className='acessebility_containerscrowll_profile_mobile'>

                <div className='acessebility_container_profile_mobile'>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h5>Alterador de Fonte</h5>
                    </div>
                  </div>
                  <div className="acessebility_profile_description_mobile">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Pequena</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-2" type="checkbox" value="small" checked={selectedSize === 'small'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-2" />
                      </div>
                    </div>
                  </div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Média</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-3" type="checkbox" value="medium" checked={selectedSize === 'medium'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-3" />
                      </div>
                    </div>
                  </div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Grande</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-5" type="checkbox" value="large" checked={selectedSize === 'large'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-5" />
                      </div>
                    </div>
                  </div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Muito grande</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-7" type="checkbox" value="veryLarge" checked={selectedSize === 'veryLarge'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-7" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='divider'></div>
                <div className='acessebility_container_profile_mobile'>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h5>Libras</h5>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-1" type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={showComponent} />
                        <label className="tgl-btn" for="cb1-1" />
                      </div>
                    </div>
                  </div>
                  <div className="acessebility_profile_description_mobile">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                </div>
                <div className='divider'></div>
                <div className='acessebility_container_profile_mobile'>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h5>Leitura de Texto</h5>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-6" type="checkbox" />
                        <label className="tgl-btn" for="cb1-6" />
                      </div>
                    </div>
                  </div>
                  <div className="acessebility_profile_description_mobile">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                </div>
              </div>
              <button className="fluid ui button conclusion" onClick={applyFontSize} >Aplicar</button>
            </div>
          </div>
        ) : null}


      </div>

      <div className='edit_profile_footer_margin'>

      </div>

      <Footer />
    </>
  )
  const renderTabletView = () => (
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}
      <WeggnerModal />
      <div className="container_edit_profile_mobile">
        <div className="box_settings_bar_edit_mobile">
          <div className="settings_bar_edit_profile_mobile">
            <div onClick={() => changeSection(1)} id="profileBoxContainer" className={`item ${activeSection === 1 ? 'active' : ''}`}>
              <CgProfile className="edit_profile_mobile" />
            </div>
            <h4>Nome Sobrenome</h4>
            <p>000.000.000-00</p>
          </div>
          <div className="menu_edit_profile">
            <div onClick={() => changeSection(2)} id="menssageBoxContainer" className={`item ${activeSection === 2 ? 'active' : ''}`}>
              <AiOutlineBell className="edit_icon_mobile" />
            </div>
            <div onClick={() => changeSection(3)} id="addressBoxContainer" className={`item ${activeSection === 3 ? 'active' : ''}`}>
              <BiBuildingHouse className="edit_icon_mobile" />
            </div>
            <div onClick={() => changeSection(4)} id="ratingBoxContainer" className={`item ${activeSection === 4 ? 'active' : ''}`}>
              <AiOutlineStar className="edit_icon_mobile" />
            </div>
            <div onClick={() => changeSection(5)} id="ratingBoxContainer" className={`item ${activeSection === 5 ? 'active' : ''}`}>
              <RxAccessibility className="edit_icon_mobile" />
            </div>
          </div>
        </div>


        {activeSection === 1 ? (
          <div className="box_edit_section_profile_mobile">
            <h2 className="edit_section_title_profile_mobile">Informações Pessoais</h2>
            <form className="ui form edit">
              <div className="field">
                <div className="four fields">
                  <div className={editMode ? "field" : "field disabled"}>
                    <label>Nome</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Gustavo" />
                  </div>
                  <div className={editMode ? "field" : "field disabled"}>
                    <label>Sobrenome</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="Abreu" />
                  </div>
                </div>
                <div className={editMode ? "field" : "field disabled"}>
                  <label>Email Profissional</label>
                  <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="carlosabreu@gmail.com" />
                </div>
                <div className={editMode ? "field" : "field disabled"}>
                  <label>CPF/CNPJ</label>
                  <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address-2]" placeholder="076.137.949-54" />
                </div>
              </div>
              <div className="buttons_profile_edit">
                {!editMode ? (
                  <div className='edit_profile_Button_mobile'>
                    <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                  </div>
                ) : (
                  <div className='cancel_profile_Button_mobile'>
                    <button onClick={dontChangeInfo} className="fluid ui button cancel">Cancelar</button>
                  </div>
                )}
                {!editMode ? (
                  <div>
                  </div>
                ) : (
                  <div className='conclusion_profile_button_mobile'>
                    <button onClick={ConfirmChangeInfo} className="fluid ui button conclusion">Concluir</button>
                  </div>
                )}
              </div>
            </form>
            <div className='container_information_profile_edit_mobile'>
              {editMode ? (
                <CiSquareAlert className='icon_information_profile_alert_mobile' />
              ) : (
                <CiSquareAlert className='ico_information_profile_mobile' />
              )}
              <p>
                Para garantir a precisão e integridade das informações,
                pedimos que verifique cuidadosamente todos os dados antes de
                concluir qualquer edição em sua conta de e-commerce.
              </p>
            </div>
          </div>

        ) : activeSection === 2 ? (
          <div className="column sections">
            <div className="box_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Mensagens</h2>
              <div className='messages_container_profile_mobile'>
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
            <div className="box_edit_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Endereço Registrado</h2>
              <form className="ui form edit">
                <div className="field">

                  <div className={editMode ? "field" : "twelve wide field disabled"}>
                    <label>Complemento</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[first-name]" placeholder="Complemento" />
                  </div>
                  <div className={editMode ? "field" : "field disabled"}>
                    <label>CEP</label>
                    <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[last-name]" placeholder="89256-890" />
                  </div>

                </div>
                <div className="field">
                  <div className="fields">
                    <div className={editMode ? "twelve wide field" : "twelve wide field disabled"}>
                      <label>Endereço</label>
                      <input style={{ border: editMode ? '1px solid #000' : 'none' }} type="text" name="shipping[address]" placeholder="Rua, Bairro, Número" />
                    </div>
                    <div className={editMode ? "four wide field" : "four wide field disabled"}>
                      <label className='state_edit_section_profile_mobile'>Estado</label>
                      <select className="ui fluid dropdown">
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
                    <div className={editMode ? "four wide field" : "four wide field disabled"}>
                      <label className='state_edit_section_profile_mobile' >País</label>
                      <select className="ui fluid dropdown">
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
                <div className="buttons_profile_edit">
                  {!editMode ? (
                    <div className='edit_profile_Button_mobile'>
                      <button onClick={changeInfo} className="fluid ui button edit">Editar</button>
                    </div>
                  ) : (
                    <div className='cancel_profile_Button_mobile'>
                      <button onClick={dontChangeInfo} className="fluid ui button cancel">Cancelar</button>
                    </div>
                  )}
                  {!editMode ? (
                    <div>
                    </div>
                  ) : (
                    <div className='conclusion_profile_button_mobile'>
                      <button onClick={ConfirmChangeInfo} className="fluid ui button conclusion">Concluir</button>
                    </div>
                  )}
                </div>
              </form>
              <div className='container_information_profile_edit_mobile'>
                {editMode ? (
                  <CiSquareAlert className='icon_information_profile_alert_mobile' />
                ) : (
                  <CiSquareAlert className='ico_information_profile_mobile' />
                )}
                <p>
                  Para garantir a precisão e integridade das informações,
                  pedimos que verifique cuidadosamente todos os dados antes de
                  concluir qualquer edição em sua conta de e-commerce.
                </p>
              </div>
            </div>
          </div>
        ) : activeSection === 4 ? (
          <div className="column sections">
            <div className="box_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Avaliações</h2>
              <div className='rating_container_profile_tablet'>
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />
                <RatedProducts />

              </div>
            </div>
          </div>

        ) : activeSection === 5 ? (
          <div className="column sections">
            <div className="box_edit_section_profile_mobile">
              <h2 className="edit_section_title_profile_mobile">Acessibilidade</h2>
              <div className='acessebility_containerscrowll_profile_mobile'>

                <div className='acessebility_container_profile_mobile'>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h5>Alterador de Fonte</h5>
                    </div>
                  </div>
                  <div className="acessebility_profile_description_mobile">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Pequena</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-2" type="checkbox" value="small" checked={selectedSize === 'small'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-2" />
                      </div>
                    </div>
                  </div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Média</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-3" type="checkbox" value="medium" checked={selectedSize === 'medium'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-3" />
                      </div>
                    </div>
                  </div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Grande</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-5" type="checkbox" value="large" checked={selectedSize === 'large'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-5" />
                      </div>
                    </div>
                  </div>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h6>Muito grande</h6>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-7" type="checkbox" value="veryLarge" checked={selectedSize === 'veryLarge'}
                          onChange={handleSizeChange} />
                        <label className="tgl-btn" for="cb1-7" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='divider'></div>
                <div className='acessebility_container_profile_mobile'>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h5>Libras</h5>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-1" type="checkbox" />
                        <label className="tgl-btn" for="cb1-1" />
                      </div>
                    </div>
                  </div>
                  <div className="acessebility_profile_description_mobile">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                </div>
                <div className='divider'></div>
                <div className='acessebility_container_profile_mobile'>
                  <div className='acessebility_box_profile_mobile'>
                    <div className='acessebility_container_profile_title_mobile'>
                      <h5>Leitura de Texto</h5>
                    </div>
                    <div className="acessebility_profile_switcher">
                      <div className="checkbox-wrapper-6">
                        <input className="tgl tgl-light" id="cb1-6" type="checkbox" />
                        <label className="tgl-btn" for="cb1-6" />
                      </div>
                    </div>
                  </div>
                  <div className="acessebility_profile_description_mobile">Auxilio de todo o site com um assistente de libras. Clique na palavra que deseja transcrever para ver seu signficado em libras.</div>
                </div>
              </div>
              <button className="fluid ui button conclusion" onClick={applyFontSize} >Aplicar</button>
            </div>
          </div>
        ) : null}


      </div>

      <div className='edit_profile_footer_margin'>

      </div>

      <Footer />
    </>
  )
  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}

export default EditProfile;
