import React, { useEffect, useState } from 'react'
import './ProfileModal.css'
import { CgProfile } from 'react-icons/cg'
import logoWeg from "../../assets/img/logoWEG.png"
import logoDes from "../../assets/img/LogoWegDesing.png"
import LanguageModal from '../LanguageModal/LanguageModal'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
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
      document.body.style.fontSize = "16px";
    else if (selectedSize === 'large')
      document.body.style.fontSize = "18px";
    else if (selectedSize === 'veryLarge')
      document.body.style.fontSize = "20px";
  };

  return (
    <>
      <div>
        <CgProfile className='profileIcon' onClick={toggleModal}></CgProfile>
      </div>
      {openModal && (
        <div className="modal-profile-content-detail">
          {openModalAcessibility && (
            <div data-aos="fade-left" className='modal-profile-acessibility-container'>
              <div className='profile-acessibility-container'>
                <div className='titleAcessibility'>
                  <p>Tamanhos</p>
                </div>
                <div class="grouped fields">
                  <div class="ui field left compact segment">
                    <p>Pequena</p>
                    <div class="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="small"
                        checked={selectedSize === 'small'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div class="ui field left compact segment">
                    <p>Média</p>
                    <div class="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="medium"
                        checked={selectedSize === 'medium'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div class="ui field left compact segment">
                    <p>Grande</p>
                    <div class="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="large"
                        checked={selectedSize === 'large'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>
                  <div class="ui field left compact segment">
                    <p>Muito Grande</p>
                    <div class="ui fitted slider checkbox">
                      <input type="radio" name="throughput" value="veryLarge"
                        checked={selectedSize === 'veryLarge'}
                        onChange={handleSizeChange} />
                      <label></label>
                    </div>
                  </div>

                </div>
                <div className='buttonAcessibility'>
                  <button onClick={applyFontSize} class="ui right labeled icon button">
                    <i class="low vision icon"></i>
                    Aplicar Mudaças
                  </button>
                </div>
              </div>

            </div>
          )}
          <BsArrowBarRight className="backIcon" onClick={toggleModal}></BsArrowBarRight>
          <div className="modal-profile-content" data-aos="fade-left">
            <div className=''>
              <div className='profile-modal-header'>
                <Link to='/edit-profile'>
                <button class="circular ui icon button edit">
                  <i class="edit outline icon"></i>
                </button>
                </Link>
                <CgProfile className='perfil-image'></CgProfile>
                <p className='usernameProfile'>Nome Sobrenome</p>
                <p className='cpfProfile'>076.137.949.54</p>
              </div>
              <div className='profileOpt'>
                <div className='profileItem'>
                  <button onClick={toggleModalAcessibility} class="ui icon button vision">
                    <i onClick={toggleModalAcessibility} class="low vision icon"></i>
                  </button>
                  <div className='textProfileContainer'>
                    <p onClick={toggleModalAcessibility} className='textProfileOpt'>Alterar fonte</p>
                  </div>
                </div>

                <div className='profileItem'>
                  <Link to='/save'>
                    <button class="ui icon button shopping">
                      <i class="bookmark icon"></i>
                    </button>
                  </Link>
                  <div className='textProfileContainer'>
                    <Link to='/save'><p className='textProfileOpt'>Produtos Salvos</p></Link>
                  </div>
                </div>
                <div className='profileItem'>
                  <Link to='/orders'>
                    <button class="ui icon button basket">
                      <i class="shopping basket icon"></i>
                    </button>
                  </Link>
                  <div className='textProfileContainer'>
                    <Link to='/orders'><p className='textProfileOpt'>Pedidos Realizados</p></Link>
                  </div>
                </div>
                <div className='profileItem'>
                  <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'>
                    <button class="ui icon button question">
                      <i class="question circle icon"></i>
                    </button>
                  </Link>
                  <div className='textProfileContainer'>
                    <Link to='https://www.weg.net/institutional/BR/pt/contact/violation-of-the-code-of-ethics'><p className='textProfileOpt'>Ajuda</p></Link>
                  </div>
                </div>
              </div>
              <div className='profileFooter'>
                <div className='profileLogo'>
                  <img src={logoDes} alt='logoWeg' className='logoWeg'></img>
                </div>
                <div className='baseFooter'>
                  <div className='profileFooterIcons'>
                    <i className="youtube circle icon"></i>
                    <i className="spotify circle icon"></i>
                    <i className="linkedin circle icon"></i>
                    <i className="skype circle icon"></i>
                    <i className="envelope circle icon"></i>
                  </div>
                  <div>
                    <p className='textProfileFooter'>Versão 1.0.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}></div>}
    </>
  );
}
