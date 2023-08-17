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
        {Question1() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title">I</div>
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
            <div className="ui large header quiz">Qual é a linha do produto que você deseja?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-37" />
              <label for="terms-checkbox-37" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">Industrial</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-38" />
              <label for="terms-checkbox-38" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">Residencial</span>
              </label>
            </div>
          </div>
        )}

        {Question2() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title ">II</div>
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
            <div className="ui large header">Qual a voltagem necessária para o seu produto?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-40" />
              <label for="terms-checkbox-40" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">12V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-41" />
              <label for="terms-checkbox-41" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">20V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-42" />
              <label for="terms-checkbox-42" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">40V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-43" />
              <label for="terms-checkbox-43" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">80V</span>
              </label>
            </div>
          </div>
        )}

        {Question3() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title ">II</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title">III</div>
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
            <div className="ui large header quiz">Quantas células são necessárias?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-44" />
              <label for="terms-checkbox-44" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">6</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-45" />
              <label for="terms-checkbox-45" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">8</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-46" />
              <label for="terms-checkbox-46" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">10</span>
              </label>
            </div>
          </div>
        )}

        {Question4() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title ">II</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">III</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title">IV</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">V</div>
                </div>
              </div>
            </div>
            <div className="ui large header quiz">Qual o grau de proteção necessário?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-47" />
              <label for="terms-checkbox-47" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP23</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-48" />
              <label for="terms-checkbox-48" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP24(W)</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-49" />
              <label for="terms-checkbox-49" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP55</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-50" />
              <label for="terms-checkbox-50" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP56</span>
              </label>
            </div>
          </div>
        )}

        {Question5() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title ">II</div>
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
                  <div className="quiz_blue title">V</div>
                </div>
              </div>
            </div>
            <div className="ui large header quiz">Qual a tensão necessária?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-51" />
              <label for="terms-checkbox-51" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">220/380 V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-52" />
              <label for="terms-checkbox-52" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">220/380/440 V</span>
              </label>
            </div>
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
          <div className='div_buttons_quiz_desktop'>
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
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className="ui raised very padded text container segment quiz_mobile">
        <p className="ui blue ribbon label quiz_mobile">Quiz</p>
        <div className='conatiner_quiz_mobile'>
          {Question1() && (
            <>
              <div>
                <div className="steps_quiz_mobile">
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile_blue">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ui large header quiz_mobile">Qual é a linha do produto que você deseja?</div>
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-37" />
                  <label for="terms-checkbox-37" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">Industrial</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-38" />
                  <label for="terms-checkbox-38" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">Residencial</span>
                  </label>
                </div>
              </div></>
          )}

          {Question2() && (
            <>
              <div>
                <div className="steps_quiz_mobile">
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile_blue">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ui large header quiz_mobile">Qual a voltagem necessária para o seu produto?</div>
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-40" />
                  <label for="terms-checkbox-40" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">12V</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-41" />
                  <label for="terms-checkbox-41" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">20V</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-42" />
                  <label for="terms-checkbox-42" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">40V</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-43" />
                  <label for="terms-checkbox-43" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">80V</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {Question3() && (
            <>
              <div>
                <div className="steps_quiz_mobile">
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile_blue">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ui large header quiz_mobile">Quantas células são necessárias?</div>
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-44" />
                  <label for="terms-checkbox-44" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">6</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-45" />
                  <label for="terms-checkbox-45" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">8</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-46" />
                  <label for="terms-checkbox-46" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">10</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {Question4() && (
            <>
              <div>
                <div className="steps_quiz_mobile">
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile_blue">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ui large header quiz_mobile">Qual o grau de proteção necessário?</div>
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-47" />
                  <label for="terms-checkbox-47" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">IP23</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-48" />
                  <label for="terms-checkbox-48" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">IP24(W)</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-49" />
                  <label for="terms-checkbox-49" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">IP55</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-50" />
                  <label for="terms-checkbox-50" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">IP56</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {Question5() && (
            <>
              <div>
                <div className="steps_quiz_mobile">
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz_mobile">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile">
                    </div>
                  </div>
                  <div className="box_step_quiz">
                    <div className="box_content_quiz_mobile_blue">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ui large header quiz_mobile">Qual a tensão necessária?</div>
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-51" />
                  <label for="terms-checkbox-51" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">220/380 V</span>
                  </label>
                </div>
                <br />
                <div class="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-52" />
                  <label for="terms-checkbox-52" class="terms-label">
                    <svg
                      class="checkbox-svg"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_476_5-37" fill="white">
                        <rect width="200" height="200" />
                      </mask>
                      <rect
                        width="200"
                        height="200"
                        class="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        class="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span class="label-text">220/380/440 V</span>
                  </label>
                </div>
              </div>
            </>
          )}
          {progresso === 5 ? (
            <div>
              <div className="ui large center aligned header quiz_recomendation_mobile">Motor W50</div>
              <img className="ui centered fluid image w50 quiz_recomendation_mobile" src={w50} />
              <p className="description">Os motores W50 são projetados para aplicações industriais e garantem excelente performance e confiabilidade nas mais severas aplicações.</p>
              <Link to='/product'>
                <button className="ui huge fluid button details quiz_recomendation_mobile">Mais detalhes</button>
              </Link>
            </div>
          ) : (
            <div className='div_buttons_quiz_mobile'>
              <button className="ui big button back quiz_btn_options_mobile" onClick={voltar}>Voltar</button>
              <button className="ui big button next quiz_btn_options_mobile" onClick={proximo}>Próximo</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )

  const renderTabletView = () => (
    <>
      {!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className="ui raised very padded text container segment quiz">
        <p className="ui blue ribbon label quiz">Quiz</p>
        {Question1() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title">I</div>
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
            <div className="ui large header quiz">Qual é a linha do produto que você deseja?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-37" />
              <label for="terms-checkbox-37" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">Industrial</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-38" />
              <label for="terms-checkbox-38" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">Residencial</span>
              </label>
            </div>
          </div>
        )}

        {Question2() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title ">II</div>
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
            <div className="ui large header">Qual a voltagem necessária para o seu produto?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-40" />
              <label for="terms-checkbox-40" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">12V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-41" />
              <label for="terms-checkbox-41" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">20V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-42" />
              <label for="terms-checkbox-42" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">40V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-43" />
              <label for="terms-checkbox-43" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">80V</span>
              </label>
            </div>
          </div>
        )}

        {Question3() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title ">II</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title">III</div>
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
            <div className="ui large header quiz">Quantas células são necessárias?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-44" />
              <label for="terms-checkbox-44" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">6</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-45" />
              <label for="terms-checkbox-45" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">8</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-46" />
              <label for="terms-checkbox-46" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">10</span>
              </label>
            </div>
          </div>
        )}

        {Question4() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title ">II</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">III</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz_blue title">IV</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">V</div>
                </div>
              </div>
            </div>
            <div className="ui large header quiz">Qual o grau de proteção necessário?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-47" />
              <label for="terms-checkbox-47" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP23</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-48" />
              <label for="terms-checkbox-48" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP24(W)</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-49" />
              <label for="terms-checkbox-49" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP55</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-50" />
              <label for="terms-checkbox-50" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">IP56</span>
              </label>
            </div>
          </div>
        )}

        {Question5() && (
          <div>
            <div className="ui mini steps quiz">
              <i className="clipboard list icon quiz"></i>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title">I</div>
                </div>
              </div>
              <div className="box step quiz">
                <div className="box content quiz">
                  <div className="quiz title ">II</div>
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
                  <div className="quiz_blue title">V</div>
                </div>
              </div>
            </div>
            <div className="ui large header quiz">Qual a tensão necessária?</div>
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-51" />
              <label for="terms-checkbox-51" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">220/380 V</span>
              </label>
            </div>
            <br />
            <div class="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-52" />
              <label for="terms-checkbox-52" class="terms-label">
                <svg
                  class="checkbox-svg"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" />
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    class="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    class="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span class="label-text">220/380/440 V</span>
              </label>
            </div>
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
          <div className='div_buttons_quiz_desktop'>
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

export default Quiz
