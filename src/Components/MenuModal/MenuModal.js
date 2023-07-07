import React, { useState, useEffect, useRef } from "react";
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './MenuModal.css';


function MenuModal() {
  const [openModal, setOpenModal] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

  const verifyScreen = () => {
    if (screenSize.width > 900) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div>
        <BiMenu className="MenuIcon" onClick={toggleModal}></BiMenu>
      </div>
      {openModal && (
        <div className="modal-menu-content-detail">
          <div className="modal-menu-content" data-aos="fade-right">
            <div className="modal-menu-content-header">
              <h1 className="modal-menu-title">Categorias</h1>
            </div>
            <div className="modal-menu-content-body">
              <div className="categorySelected">
                
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}>
        <AiOutlineClose className="closeIcon" onClick={toggleModal}></AiOutlineClose></div>}
    </>
  );
}

export default MenuModal;

{/* <ul className="listCategory">
              <li className="categoryName">
                <a href="/category">Redutores de velocidade</a>
              </li>
              <div class="ui inverted divider"></div>
              <li className="categoryName">
                <a href="/category">Soluções Digitais</a>
              </li>
              <li className="categoryName">
                <a href="/category">Armazenamento de Energia em Baterias</a>
              </li>
              <li className="categoryName">
                <a href="/category">Partes e Peças</a>
              </li>
              <li className="categoryName">
                <a href="/category">Serviços
                </a>
              </li>
              <li className="categoryName">
                <a href="/category">Geração, Transmissão e Distribuição</a>
              </li>
            </ul> */}