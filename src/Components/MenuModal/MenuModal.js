//Importando o React e o CSS
import React, { useState, useEffect } from "react";
import './MenuModal.css';

//importando as frameworks
import { Link } from 'react-router-dom';

//import de icons do react-icons
import { BiMenu } from 'react-icons/bi';
import { BsArrowBarLeft } from 'react-icons/bs';

//import de imagens

import agro from "../../assets/img/icone-rural.png"
import naval from "../../assets/img/NAVAL.png"
import mineracao from "../../assets/img/mineracao.png"
import construcao from "../../assets/img/CONSTRUCAO.png"
import siderurgia from "../../assets/img/metalurgica.png"
import alimenticia from "../../assets/img/ALIMENTAÇÃO.png"

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
    console.log(openModal)
    setOpenModal(!openModal);
    console.log(openModal)
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
                  <img src={agro} alt="iconeMotor" width={30} />
                  <Link onClick={() => setOpenModal(false)} className="category_title" to="/category/agronegocio">Agronegócio</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={naval} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/naval" className="category_title">Naval</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={mineracao} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/mineracao" className="category_title">Mineração</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={construcao} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/edificacao" className="category_title">Edificação</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={siderurgia} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/siderurgia" className="category_title">Siderurgia</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={alimenticia} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/alimenticia" className="category_title">Alimentícia</Link>
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
                  <img src={agro} alt="iconeMotor" width={30} />
                  <Link onClick={() => setOpenModal(false)} className="category_title" to="/category/agronegocio">Agronegócio</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={naval} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/naval" className="category_title">Naval</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={mineracao} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/mineracao" className="category_title">Mineração</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={construcao} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/edificacao" className="category_title">Edificação</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={siderurgia} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/siderurgia" className="category_title">Siderurgia</Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={alimenticia} alt="iconeMotor" width={25} />
                  <Link onClick={() => setOpenModal(false)}  to="/category/alimenticia" className="category_title">Alimentícia</Link>
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