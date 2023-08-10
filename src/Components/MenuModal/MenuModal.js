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
        <BiMenu className="menu_icon" onClick={toggleModal}></BiMenu>
      </div>
      {openModal && (
        <div className="container_modal_menu_content_detail">
          <BsArrowBarLeft className="back_icon" onClick={toggleModal}></BsArrowBarLeft>
          <div className="box_modal_menu_content" data-aos="fade-right">
            <div className="box_modal_menu_content_header">
              <h1 className="modal_menu_title">Categorias</h1>
            </div>
            <div className="modal_menu_content_body">
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconMotor} alt="iconeMotor" width={30} />
                  <p className="category_title" >Motores Elétricos</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Monofásico</li></Link>
                  <Link to='/category'><li className="sub_category" >Trifásico - Baixa Tensão</li></Link>
                  <Link to='/category'><li className="sub_category" >Trifásico - Alta Tensão</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconTecSolutions} alt="iconeMotor" width={25} />
                  <p className="category_title">Digital Solutions</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Categorias Plataforma IoT</li></Link>
                  <Link to='/category'><li className="sub_category" >Gestão de Energia</li></Link>
                  <Link to='/category'><li className="sub_category" >Inteligência Artificial</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconPaint} alt="iconeMotor" width={25} />
                  <p className="category_title">Tintas e Vernizes</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Tinta Liquida</li></Link>
                  <Link to='/category'><li className="sub_category" >Tinta Pó</li></Link>
                  <Link to='/category'><li className="sub_category" >Vernizes Impregnação</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={generator} alt="iconeMotor" width={25} />
                  <p className="category_title">Geradores</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Aerogeradores</li></Link>
                  <Link to='/category'><li className="sub_category" >Gerador Solar Fotovoltaico</li></Link>
                  <Link to='/category'><li className="sub_category" >Turbinas Hidráulicas</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={industry} alt="iconeMotor" width={25} />
                  <p className="category_title">Automação e controle industrial</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Drives</li></Link>
                  <Link to='/category'><li className="sub_category" >Controls</li></Link>
                  <Link to='/category'><li className="sub_category" >Controle de Processos</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={iconEnergy} alt="iconeMotor" width={25} />
                  <p className="category_title">Painéis elétricos</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >cubículos MT</li></Link>
                  <Link to='/category'><li className="sub_category" >Load center</li></Link>
                  <Link to='/category'><li className="sub_category" >Eletrocentros</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={building} alt="iconeMotor" width={25} />
                  <p className="category_title">Building & Infrastructure</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Tomadas e interruptores residenciais</li></Link>
                  <Link to='/category'><li className="sub_category" >Plugues e tomadas residenciais</li></Link>
                  <Link to='/category'><li className="sub_category" >WEG home</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={power} alt="iconeMotor" width={25} />
                  <p className="category_title">Critical power</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Residencial</li></Link>
                  <Link to='/category'><li className="sub_category" >Industrial</li></Link>
                  <Link to='/category'><li className="sub_category" >Corporativo / Empresas</li></Link>
                </div>
              </div>
              <div className="ui inverted divider menu_modal"></div>
              <div className="category_selected">
                <div className="category_title_selected">
                  <img src={reducer} alt="iconeMotor" width={25} />
                  <p className="category_title">Redutores de velocidade</p>
                </div>
                <div className="sub_category_selected" >
                  <Link to='/category'><li className="sub_category" >Industrial</li></Link>
                  <Link to='/category'><li className="sub_category" >Coroa e rosca</li></Link>
                  <Link to='/category'><li className="sub_category" >Acoplamento</li></Link>
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

export default MenuModal;