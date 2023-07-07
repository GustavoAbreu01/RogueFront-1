import React, { useState, useEffect, useRef } from "react";
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import iconMotor from "../../assets/img/iconeMotor.png"
import iconTecSolutions from "../../assets/img/DIFERENTESTECNOLOGIAS.png"
import iconEnergy from "../../assets/img/ENERGIA FOTOVOLTAICA_SOLAR.png"
import iconPaint from "../../assets/img/PINTURA_TINTAS.png"

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
            <div className="modal-menu-content-header">
              <h1 className="modal-menu-title">Categorias</h1>
            </div>
            <div className="modal-menu-content-body">
              <div className="categorySelected">
                <div className="categoryTitleSelected">
                  <img src={iconMotor} alt="iconeMotor" width={30} />
                  <p className="titleTitleCategory" >Motores Elétricos</p>
                </div>
                <div className="subCategorySelected" >
                  <Link to='/category'><li className="subCategory" >Monofásico</li></Link>
                  <Link to='/category'><li className="subCategory" >Trifásico - Baixa Tensão</li></Link>
                  <Link to='/category'><li className="subCategory" >Trifásico - Alta Tensão</li></Link>
                </div>
              </div>
              <div class="ui inverted divider"></div>
              <div className="categorySelected">
                <div className="categoryTitleSelected">
                  <img src={iconTecSolutions} alt="iconeMotor" width={25} />
                  <p className="titleTitleCategory">Digital Solutions</p>
                </div>
                <div className="subCategorySelected" >
                  <Link to='/category'><li className="subCategory" >Categorias Plataforma IoT</li></Link>
                  <Link to='/category'><li className="subCategory" >Gestão de Energia</li></Link>
                  <Link to='/category'><li className="subCategory" >Inteligência Artificial</li></Link>
                </div>
              </div>
              <div class="ui inverted divider"></div>
              <div className="categorySelected">
                <div className="categoryTitleSelected">
                  <img src={iconPaint} alt="iconeMotor" width={25} />
                  <p className="titleTitleCategory">Tintas e Vernizes</p>
                </div>
                <div className="subCategorySelected" >
                  <Link to='/category'><li className="subCategory" >Tinta Liquida</li></Link>
                  <Link to='/category'><li className="subCategory" >Tinta Pó</li></Link>
                  <Link to='/category'><li className="subCategory" >Vernizes Impregnação</li></Link>
                </div>
              </div>
              <div class="ui inverted divider"></div>
              <div className="categorySelected">
                <div className="categoryTitleSelected">
                  <img src={iconEnergy} alt="iconeMotor" width={25} />
                  <p className="titleTitleCategory">Geradores</p>
                </div>
                <div className="subCategorySelected" >
                  <Link to='/category'><li className="subCategory" >Aerogeradores</li></Link>
                  <Link to='/category'><li className="subCategory" >Gerador Solar Fotovoltaico</li></Link>
                  <Link to='/category'><li className="subCategory" >Turbinas Hidráulicas</li></Link>
                </div>
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