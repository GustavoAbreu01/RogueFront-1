import React, { useState, useEffect, useRef } from "react";
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './MenuModal.css';


function MenuModal() {
  const [openModal, setOpenModal] = useState(false);

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

  function toggleModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <div>
        <BiMenu className="MenuIcon" onClick={toggleModal}></BiMenu>
      </div>
      {openModal && (
        <div className="modal-menu-content-detail">
          <div className="modal-menu-content" data-aos="fade-right">
            <ul className="listCategory">
              <li className="categoryName">
                <a href="/category">Redutores de velocidade</a>
              </li>
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
            </ul>
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}></div>}
    </>
  );
}

export default MenuModal;