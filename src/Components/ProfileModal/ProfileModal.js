//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProfileModal.css'

//importando as frameworks
import { Link } from 'react-router-dom'

//Importando as imagens
import logoDes from "../../assets/img/LogoWegDesing.png"

//Importando os ícones
import { CgProfile } from 'react-icons/cg'
import { BsArrowBarRight } from 'react-icons/bs'


export default function ProfileModal({ user }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalAcessibility, setOpenModalAcessibility] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.classList.contains('background')) {
        setOpenModalAcessibility(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.classList.contains('background')) {
        setOpenModal(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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

  function toggleModal() {
    setOpenModal(!openModal);
  }

  function toggleModalAcessibility() {
    setOpenModalAcessibility(!openModalAcessibility);
  }

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
      <div>
        <CgProfile className='profile_icon' onClick={toggleModal}></CgProfile>
      </div>
      {openModal && (
        <div className="modal_profile_content_container">
          {openModalAcessibility && (
            <div data-aos="fade-left" className='modal_profile_acessibility_container'>
              <div className='box_profile_acessibility'>
                <div className='title_acessibility'>
                  <p>Tamanhos</p>
                </div>
                <div className="grouped fields profile">
                  <div className="ui field left compact segment profile">
                    <p>Pequena</p>
                    <div className="ui fitted slider checkbox profile">
                      <input type="radio" name="throughput" value="small"
                        checked={selectedSize === 'small'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div className="ui field left compact segment profile">
                    <p>Média</p>
                    <div className="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="medium"
                        checked={selectedSize === 'medium'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div className="ui field left compact segment profile">
                    <p>Grande</p>
                    <div className="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="large"
                        checked={selectedSize === 'large'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div className="ui field left compact segment profile">
                    <p>Muito Grande</p>
                    <div className="ui fitted slider checkbox profile">
                      <input type="radio" name="throughput" value="veryLarge"
                        checked={selectedSize === 'veryLarge'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>

                </div>
                <div className='button_acessibility'>
                  <button onClick={applyFontSize} className="ui right labeled icon button">
                    <i className="low vision icon"></i>
                    Aplicar Mudaças
                  </button>
                </div>
              </div>

            </div>
          )}
          <BsArrowBarRight className="back_icon" onClick={toggleModal}></BsArrowBarRight>
          <div className="modal_profile_content" data-aos="fade-left">
            <div className=''>
              <div className='profile_modal_header'>
                <Link to='/edit-profile'>
                  <button className="circular ui icon button edit profile">
                    <i className="edit outline icon profile profile"></i>
                  </button>
                </Link>
                <CgProfile className='perfil_image'></CgProfile>
                <p className='username_profile'>Nome Sobrenome</p>
                <p className='cpf_profile'>076.137.949.54</p>
              </div>
              <div className='profile_opt'>
                <div className='profile_item'>
                  <button onClick={toggleModalAcessibility} className="ui icon button vision profile">
                    <i onClick={toggleModalAcessibility} className="low vision icon profile"></i>
                  </button>
                  <div className='text_profile_container'>
                    <p onClick={toggleModalAcessibility} className='text_profile_opt'>Alterar fonte</p>
                  </div>
                </div>

                <div className='profile_item'>
                  <Link to='/save'>
                    <button className="ui icon button shopping profile">
                      <i className="bookmark icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/save'><p className='text_profile_opt'>Produtos Salvos</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/orders'>
                    <button className="ui icon button basket profile">
                      <i className="shopping basket icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/orders'><p className='text_profile_opt'>Pedidos Realizados</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'>
                    <button className="ui icon button question profile">
                      <i className="question circle icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'><p className='text_profile_opt'>Ajuda</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/quiz'>
                    <button className="ui icon button shopping profile">
                      <i className="sign-out icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/quiz'><p className='text_profile_opt'>Sair</p></Link>
                  </div>
                </div>
              </div>
              <div className='profile_footer'>
                <div className='profile_logo'>
                  <img src={logoDes} alt='logoWeg' className='logo_weg'></img>
                </div>
                <div className='base_footer'>
                  <div className='profile_footer_icons'>
                    <i className="youtube circle icon profile"></i>
                    <i className="spotify circle icon profile"></i>
                    <i className="linkedin circle icon profile"></i>
                    <i className="skype circle icon profile"></i>
                    <i className="envelope circle icon profile"></i>
                  </div>
                  <div>
                    <p className='text_profile_footer'>Versão 1.0.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}></div>}
    </>
  )

  const renderTabletView = () => (
    <>
      <div>
        <CgProfile className='profile_icon' onClick={toggleModal}></CgProfile>
      </div>
      {openModal && (
        <div className="modal_profile_content_container_tablet">
          {openModalAcessibility && (
            <div data-aos="fade-left" className='modal_profile_acessibility_container'>
              <div className='box_profile_acessibility'>
                <div className='title_acessibility'>
                  <p>Tamanhos</p>
                </div>
                <div className="grouped fields profile">
                  <div className="ui field left compact segment profile">
                    <p>Pequena</p>
                    <div className="ui fitted slider checkbox profile">
                      <input type="radio" name="throughput" value="small"
                        checked={selectedSize === 'small'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div className="ui field left compact segment profile">
                    <p>Média</p>
                    <div className="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="medium"
                        checked={selectedSize === 'medium'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div className="ui field left compact segment profile">
                    <p>Grande</p>
                    <div className="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="large"
                        checked={selectedSize === 'large'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div className="ui field left compact segment profile">
                    <p>Muito Grande</p>
                    <div className="ui fitted slider checkbox profile">
                      <input type="radio" name="throughput" value="veryLarge"
                        checked={selectedSize === 'veryLarge'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>

                </div>
                <div className='button_acessibility'>
                  <button onClick={applyFontSize} className="ui right labeled icon button">
                    <i className="low vision icon"></i>
                    Aplicar Mudaças
                  </button>
                </div>
              </div>

            </div>
          )}
          <BsArrowBarRight className="back_icon" onClick={toggleModal}></BsArrowBarRight>
          <div className="modal_profile_content_tablet" data-aos="fade-left">
            <div className=''>
              <div className='profile_modal_header'>
                <Link to='/edit-profile'>
                  <button className="circular ui icon button edit profile">
                    <i className="edit outline icon profile profile"></i>
                  </button>
                </Link>
                <CgProfile className='perfil_image'></CgProfile>
                <p className='username_profile'>Nome Sobrenome</p>
                <p className='cpf_profile'>076.137.949.54</p>
              </div>
              <div className='profile_opt'>
                <div className='profile_item'>
                  <button onClick={toggleModalAcessibility} className="ui icon button vision profile">
                    <i onClick={toggleModalAcessibility} className="low vision icon profile"></i>
                  </button>
                  <div className='text_profile_container'>
                    <p onClick={toggleModalAcessibility} className='text_profile_opt'>Alterar fonte</p>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/quiz'>
                    <button className="ui icon button shopping profile">
                      <i className="exchange icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/compare'><p className='text_profile_opt'>Comparar Produtos</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/quiz'>
                    <button className="ui icon button shopping profile">
                      <i className="paste icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/quiz'><p className='text_profile_opt'>Questionário</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/save'>
                    <button className="ui icon button shopping profile">
                      <i className="bookmark icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/save'><p className='text_profile_opt'>Produtos Salvos</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/orders'>
                    <button className="ui icon button basket profile">
                      <i className="shopping basket icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/orders'><p className='text_profile_opt'>Pedidos Realizados</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'>
                    <button className="ui icon button question profile">
                      <i className="question circle icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'><p className='text_profile_opt'>Ajuda</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/quiz'>
                    <button className="ui icon button shopping profile">
                      <i className="sign-out icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/quiz'><p className='text_profile_opt'>Sair</p></Link>
                  </div>
                </div>
              </div>
              <div className='profile_footer'>
                <div className='profile_logo'>
                  <img src={logoDes} alt='logoWeg' className='logo_weg'></img>
                </div>
                <div className='base_footer'>
                  <div className='profile_footer_icons'>
                    <i className="youtube circle icon profile"></i>
                    <i className="spotify circle icon profile"></i>
                    <i className="linkedin circle icon profile"></i>
                    <i className="skype circle icon profile"></i>
                    <i className="envelope circle icon profile"></i>
                  </div>
                  <div>
                    <p className='text_profile_footer'>Versão 1.0.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}></div>}
    </>
  )

  const renderMobileView = () => (
    <>
      <div>
        <CgProfile className='profile_icon' onClick={toggleModal}></CgProfile>
      </div>
      {openModal && (
        <div className="modal_profile_content_container_mobile">
          <BsArrowBarRight className="back_icon" onClick={toggleModal}></BsArrowBarRight>
          <div className="modal_profile_content_moibile" data-aos="fade-left">
            <div className=''>
              <div className='profile_modal_header'>
                <Link to='/edit-profile'>
                  <button className="circular ui icon button edit profile">
                    <i className="edit outline icon profile profile"></i>
                  </button>
                </Link>
                <CgProfile className='perfil_image'></CgProfile>
                <p className='username_profile'>Nome Sobrenome</p>
                <p className='cpf_profile'>076.137.949.54</p>
              </div>
              <div className='profile_opt_mobile'>
                <div className='profile_item'>
                  <Link to='/quiz'>
                    <button className="ui icon button shopping profile">
                      <i className="paste icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/quiz'><p className='text_profile_opt'>Questionário</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/cart'>
                    <button className="ui icon button shopping profile">
                      <i className="cart icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/cart'><p className='text_profile_opt'>Carrinho</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/save'>
                    <button className="ui icon button shopping profile">
                      <i className="bookmark icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/save'><p className='text_profile_opt'>Produtos Salvos</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/orders'>
                    <button className="ui icon button basket profile">
                      <i className="shopping basket icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/orders'><p className='text_profile_opt'>Pedidos Realizados</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'>
                    <button className="ui icon button question profile">
                      <i className="question circle icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'><p className='text_profile_opt'>Ajuda</p></Link>
                  </div>
                </div>
                <div className='profile_item'>
                  <Link to='/quiz'>
                    <button className="ui icon button shopping profile">
                      <i className="sign-out icon profile"></i>
                    </button>
                  </Link>
                  <div className='text_profile_container'>
                    <Link to='/'><p className='text_profile_opt'>Sair</p></Link>
                  </div>
                </div>
              </div>
              <div className='profile_footer'>
                <div className='profile_logo'>
                  <img src={logoDes} alt='logoWeg' className='logo_weg'></img>
                </div>
                <div className='base_footer'>
                  <div className='profile_footer_icons'>
                    <i className="youtube circle icon profile"></i>
                    <i className="spotify circle icon profile"></i>
                    <i className="linkedin circle icon profile"></i>
                    <i className="skype circle icon profile"></i>
                    <i className="envelope circle icon profile"></i>
                  </div>
                  <div>
                    <p className='text_profile_footer'>Versão 1.0.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}></div>}
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