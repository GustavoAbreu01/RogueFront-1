//Importando o React e o CSS
import React, { useState, useEffect } from 'react'
import './Quiz.css'

//importando as frameworks
import { Link } from "react-router-dom";

//Importando os componentes
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import ProductSmallCarousel from '../../Components/ProductSmallCarousel/ProductSmallCarousel'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';

//Importando as imagens
import w50 from "../../assets/img/motorW50.png"

//Importando os ícones
import { FaStar } from 'react-icons/fa';

function Quiz() {
  const [progresso, setProgresso] = useState(0);
  const [verificacao, setVerificacao] = useState(localStorage.getItem('verificar') === 'sim' || localStorage.getItem('verificar2') === 'sim');

  const Question1 = () => progresso === 0;
  const Question2 = () => progresso === 1;
  const Question3 = () => progresso === 2;
  const Question4 = () => progresso === 3;
  const Question5 = () => progresso === 4;

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

  const proximo = () => {

    setProgresso(prevProgresso => prevProgresso + 1);
    if (progresso === 4) {
      console.log("fim");
    }
  }

  const voltar = () => {
    if (progresso === 0) {
      setProgresso(0);
    } else {
      setProgresso(prevProgresso => prevProgresso - 1);
    }
  }

  const verify = () => {
    console.log(localStorage.getItem('verificar'))
    if (localStorage.getItem('verificar') === "sim" || localStorage.getItem('verificar2') === "sim") {
      setVerificacao(true);
    }
  }

  const verifyHeader = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const renderDesktopView = () => (
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className="ui raised very padded text container segment quiz">
        <p className="ui blue ribbon label quiz">Quiz</p>
        <div className="ui mini steps quiz">
          <i className="clipboard list icon quiz"></i>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className="quiz title">I</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className="title">II</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className="quiz title">III</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className="quiz title">IV</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className="quiz title">V</div>
            </div>
          </div>
        </div>
        {Question1() && (
          <div>
            <div className="ui large header quiz">Qual é a linha do produto que você deseja?</div>
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="industrial" name="industrial" value="Industrial" />
              <label className="quiz_desc_option" htmlFor="industrial">Industrial</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="residencial" name="residencial" value="Residencial" />
              <label className="quiz_desc_option" htmlFor="residencial">Residencial</label><br />
            </div>
          </div>
        )}

        {Question2() && (
          <div>
            <div className="ui large header">Qual a voltagem necessária para o seu produto?</div>

            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="12v" name="12v" value="12v" />
              <label className="quiz_desc_option" htmlFor="12v">12V</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="20V" name="20V" value="20V" />
              <label className="quiz_desc_option" htmlFor="20V">20V</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="40V" name="40V" value="40V" />
              <label className="quiz_desc_option" htmlFor="40V">40V</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="80V" name="80V" value="80V" />
              <label className="quiz_desc_option" htmlFor="80V">80V</label>
              <br />
            </div>
          </div>
        )}

        {Question3() && (
          <div>
            <div className="ui large header quiz">Quantas células são necessárias?</div>
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="6" name="6" value="6" />
              <label className="quiz_desc_option" htmlFor="6">6</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="8" name="8" value="8" />
              <label className="quiz_desc_option" htmlFor="8">8</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="10" name="10" value="10" />
              <label className="quiz_desc_option" htmlFor="10">10</label></div>
            <br />
          </div>
        )}

        {Question4() && (
          <div>
            <div className="ui large header quiz">Qual o grau de proteção necessário?</div>
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="IP23" name="IP23" value="IP23" />
              <label className="quiz_desc_option" htmlFor="IP23">IP23</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="IP24(W)" name="IP24(W)" value="IP24(W)" />
              <label className="quiz_desc_option" htmlFor="IP24(W)">IP24(W)</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="IP55" name="IP55" value=" IP55" />
              <label className="quiz_desc_option" htmlFor="IP55"> IP55</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="IP56" name="IP56" value="IP56" />
              <label className="quiz_desc_option" htmlFor="IP56">IP56</label>
            </div>
            <br />
          </div>
        )}

        {Question5() && (
          <div>
            <div className="ui large header quiz">Qual a tensão necessária?</div>
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="220/380V" name="220/380V" value="220/380V" />
              <label className="quiz_desc_option" htmlFor="220/380V">220/380V</label>
            </div>
            <br />
            <div className="ui checkbox quiz">
              <input className="quiz_check_option" type="checkbox" id="220/380/440V" name="220/380/440V" value="220/380/440V" />
              <label className="quiz_desc_option" htmlFor="220/380/440V">220/380/440V</label>
            </div>
            <br />
          </div>
        )}

        {progresso === 5 ? (
          <div>
            <div className="ui large center aligned header quiz_recomendation">Motor W50</div>
            <img className="ui centered fluid image w50 quiz_recomendation" src={w50} />
            <p className="description">Os motores W50 são projetados para aplicações industriais e garantem excelente performance e confiabilidade nas mais severas aplicações.</p>
            <Link to='/product'>
              <button className="ui huge fluid button details quiz_recomendation">Mais detalhes</button>
            </Link>
          </div>
        ) : (
          <div>
            <button className="ui big button back quiz_btn_options" onClick={voltar}>Voltar</button>
            <button className="ui big button next quiz_btn_options" onClick={proximo}>Próximo</button>
          </div>
        )}
      </div>
      <div className='box_quiz_title_similar'>
        <FaStar color='var(--white)' size={40} />
        <h1 className='quiz_title_similar' >Produtos Semelhantes</h1>
      </div>
      <ProductSmallCarousel />
      <Footer />
    </>
  )
  const renderMobileView = () => (
    <></>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
        return renderDesktopView();
        // } else if (screenSize.width < 900 && screenSize.width > 500) {
        //   return renderTabletView();
    } else {
        return renderMobileView();
    }
};
return <>{getViewToRender()}</>;
}

export default Quiz