//Importando o React e o CSS
import React, { useState, useEffect } from "react";
import './MenuModal.css';

//importando as frameworks
import { Link } from 'react-router-dom';

//import de icons do react-icons
import { BiMenu } from 'react-icons/bi';
import { BsArrowBarLeft } from 'react-icons/bs';

//import de imagens
import iconMotor from "../../assets/img/iconeMotor.png"
import iconTecSolutions from "../../assets/img/DIFERENTESTECNOLOGIAS.png"
import iconEnergy from "../../assets/img/ENERGIA FOTOVOLTAICA_SOLAR.png"
import iconPaint from "../../assets/img/PINTURA_TINTAS.png"
import generator from "../../assets/img/gerador.png"
import power from "../../assets/img/ENERGIA_POTÊNCIA.jpg"
import reducer from "../../assets/img/REDUTOR02.png"
import industry from "../../assets/img/Segurança_industria.png"
import building from "../../assets/img/CONSTRUÇÃO.png"

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

  const renderTabletView = () => (
    <>
      <div>
        <BiMenu className="menu_icon" onClick={toggleModal}></BiMenu>
      </div>
      {openModal && (
        <div className="container_modal_menu_content_detail_tablet">
          <BsArrowBarLeft className="back_icon" onClick={toggleModal}></BsArrowBarLeft>
          <div className="box_modal_menu_content_tablet" data-aos="fade-right">
            <div className="box_modal_menu_content_header">
              <h1 className="modal_menu_title">Segmentos</h1>
            </div>
            <div className="modal_menu_content_body">
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconMotor} alt="iconeMotor" width={30} />
                  <p className="category_title" >Agronegócio</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconTecSolutions} alt="iconeMotor" width={25} />
                  <p className="category_title">Naval</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconPaint} alt="iconeMotor" width={25} />
                  <p className="category_title">Mineração</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={generator} alt="iconeMotor" width={25} />
                  <p className="category_title">Edificação</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={industry} alt="iconeMotor" width={25} />
                  <p className="category_title">Siderurgica</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconEnergy} alt="iconeMotor" width={25} />
                  <p className="category_title">Alimentícia</p>
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
        <BiMenu className="menu_icon" onClick={toggleModal}></BiMenu>
      </div>
      {openModal && (
        <div className="container_modal_menu_content_detail_mobile">
          <BsArrowBarLeft className="back_icon" onClick={toggleModal}></BsArrowBarLeft>
          <div className="box_modal_menu_content_mobile" data-aos="fade-right">
            <div className="box_modal_menu_content_header">
              <h1 className="modal_menu_title">Segmentos</h1>
            </div>
            <div className="modal_menu_content_body">
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconMotor} alt="iconeMotor" width={30} />
                  <p className="category_title" >Agronegócio</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconTecSolutions} alt="iconeMotor" width={25} />
                  <p className="category_title">Naval</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconPaint} alt="iconeMotor" width={25} />
                  <p className="category_title">Mineração</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={generator} alt="iconeMotor" width={25} />
                  <p className="category_title">Edificação</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={industry} alt="iconeMotor" width={25} />
                  <p className="category_title">Siderurgica</p>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconEnergy} alt="iconeMotor" width={25} />
                  <p className="category_title">Alimentícia</p>
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
    if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;

}

export default MenuModal;