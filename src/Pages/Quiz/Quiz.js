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

//Importando as json
import Questions from "./Questions/Questions.json"

//Importando os ícones
import { FaStar } from 'react-icons/fa';


function Quiz() {
  const [progresso, setProgresso] = useState(0);
  const [verificacao, setVerificacao] = useState(localStorage.getItem('verificar') === 'sim' || localStorage.getItem('verificar2') === 'sim');

  const Question1 = () => progresso === 0;
  const [respostasAnteriores, setRespostasAnteriores] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [respostaSelecionada, setRespostaSelecionada] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = Questions ? Questions.perguntas_respostas[currentQuestionIndex] : null;
  const [concluido, setConcluido] = useState(false);
  const [campoCardaAberto, setCampoCardaAberto] = useState(false);
  const [numeroCarda, setNumeroCarda] = useState('');
  const [resposta, setResposta] = useState('');  // Adicionado aqui
  const [question, setQuestion] = useState(0);

  const verifyQuestion = () => {
    if (progresso > 4) {
      const newQuestionNumber = question + 1
      setQuestion(newQuestionNumber)
    }
    console.log(progresso)
    console.log(question)

  }

  const handleNextQuestion = () => {
    if (respostaSelecionada) {
      if (currentQuestionIndex < Questions.perguntas_respostas.length - 1) {
        const respostaAtual = currentQuestion.campo_digitacao ? resposta : getOpcaoSelecionada();
        if (currentQuestion.pergunta === "Qual o tipo do acoplamento?" && resposta === "Acoplamento por cardã") {
          setRespostasAnteriores(prevRespostas => [...prevRespostas, { tipo: respostaAtual, numeroCarda }]);
        } else {
          setRespostasAnteriores(prevRespostas => [...prevRespostas, respostaAtual]);
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setResposta('');
        setCampoCardaAberto(false);
        setNumeroCarda('');
        setRespostaSelecionada(false)
        setProgresso(prevProgresso => prevProgresso + 1);
    verifyQuestion()
      } else if (currentQuestionIndex === Questions.perguntas_respostas.length - 1) {
        console.log(respostasAnteriores);
        setConcluido(true);
      }
    }
  };


  const getOpcaoSelecionada = () => {
    const opcaoSelecionada = document.querySelector('input[name="opcoes_resposta"]:checked');
    return opcaoSelecionada ? opcaoSelecionada.value : '';
  };


  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCampoCardaAberto(false);
      setResposta(respostasAnteriores[respostasAnteriores.length - 1] || '');
      setRespostaSelecionada(!!respostasAnteriores[respostasAnteriores.length - 1]);
      setRespostasAnteriores(prevRespostas => prevRespostas.slice(0, -1));
      setProgresso(prevProgresso => prevProgresso - 1);
    } else {
      console.log('Quiz concluído!');
    }
  };


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
    verifyQuestion()
    if (progresso === 13) {
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
              <div className={` quiz title ${progresso == question ? 'selectedQuestion' : ''}`}>{question + 1}</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className={` quiz title ${progresso == question + 1 ? 'selectedQuestion' : ''}`}>{question + 2}</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className={` quiz title ${progresso == question + 2 ? 'selectedQuestion' : ''}`}>{question + 3}</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className={` quiz title ${progresso == question + 3 ? 'selectedQuestion' : ''}`}>{question + 4}</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className={` quiz title ${progresso == question + 4 ? 'selectedQuestion' : ''}`}>{question + 5}</div>
            </div>
          </div>
          <div className="box step quiz">
            <div className="box content quiz">
              <div className={` quiz title ${progresso == question + 5? 'selectedQuestion' : ''}`}>{question + 6}</div>
            </div>
          </div>
        </div>
      {!concluido ? (
        <>
          <div className="ui large header quiz">{currentQuestion.pergunta}</div>
          {currentQuestion.campo_digitacao ? (
            <input
              className='input_quiz'
              style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }}
              type="text"
              placeholder="Digite sua resposta"
              value={resposta}
              onChange={(e) => {
                setResposta(e.target.value);
                setRespostaSelecionada(!!e.target.value);
              }}
            />
          ) : (
            <ul>
              {currentQuestion.opcoes_resposta.map((opcao, index) => (
                <div className='radio_quiz' key={index}>
                  <input
                    type="radio"
                    id={`opcao-${index}`}
                    name="opcoes_resposta"
                    value={opcao}
                    checked={resposta === opcao}
                    onChange={() => {
                      setRespostaSelecionada(true);
                      setResposta(opcao);
                      if (opcao === "Acoplamento por cardã") {
                        setCampoCardaAberto(true);
                      } else {
                        setCampoCardaAberto(false);
                      }
                    }}
                  />
                  <label htmlFor={`opcao-${index}`}>{opcao}</label>
                </div>
              ))}
            </ul>
          )}
          {campoCardaAberto && (
            <input
              className='input_quiz'
              style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }}
              type="text"
              placeholder="Digite o número necessário"
              value={numeroCarda}
              onChange={(e) => setNumeroCarda(e.target.value)}
            />
          )}
          <div className='div_buttons_quiz'>
            <button className="ui big button back quiz_btn_options" onClick={handlePreviousQuestion}>Voltar</button>
            <button className="ui big button next quiz_btn_options" onClick={handleNextQuestion}>Próximo</button>
          </div>
        </>
      ) : (
        <div>
          <div className="ui large center aligned header quiz_recomendation">Motor W50</div>
          <img className="ui centered fluid image w50 quiz_recomendation" src={w50} />
          <p className="description">Os motores W50 são projetados para aplicações industriais e garantem excelente performance e confiabilidade nas mais severas aplicações.</p>
          <Link to='/product'>
            <button className="ui huge fluid button details quiz_recomendation">Mais detalhes</button>
          </Link>
        </div>
      )}
    </div>
      <div className='box_quiz_title_similar'>
        <i className="magic icon" color='var(--white)'></i>
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
                <div className="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-37" />
                  <label for="terms-checkbox-37" className="terms-label">
                    <svg
                      className="checkbox-svg"
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
                        className="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        className="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span className="label-text">Industrial</span>
                  </label>
                </div>
                <br />
                <div className="checkbox-wrapper-37">
                  <input type="checkbox" name="checkbox" id="terms-checkbox-38" />
                  <label for="terms-checkbox-38" className="terms-label">
                    <svg
                      className="checkbox-svg"
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
                        className="checkbox-box"
                        stroke-width="40"
                        mask="url(#path-1-inside-1_476_5-37)"
                      />
                      <path
                        className="checkbox-tick"
                        d="M52 111.018L76.9867 136L149 64"
                        stroke-width="15"
                      />
                    </svg>
                    <span className="label-text">Residencial</span>
                  </label>
                </div>
              </div></>
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
            <div className='div_buttons_quiz'>
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
            <div className="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-37" />
              <label for="terms-checkbox-37" className="terms-label">
                <svg
                  className="checkbox-svg"
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
                    className="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    className="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span className="label-text">Industrial</span>
              </label>
            </div>
            <br />
            <div className="checkbox-wrapper-37">
              <input type="checkbox" name="checkbox" id="terms-checkbox-38" />
              <label for="terms-checkbox-38" className="terms-label">
                <svg
                  className="checkbox-svg"
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
                    className="checkbox-box"
                    stroke-width="40"
                    mask="url(#path-1-inside-1_476_5-37)"
                  />
                  <path
                    className="checkbox-tick"
                    d="M52 111.018L76.9867 136L149 64"
                    stroke-width="15"
                  />
                </svg>
                <span className="label-text">Residencial</span>
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
          <div className='div_buttons_quiz'>
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
