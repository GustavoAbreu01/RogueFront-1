import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './Quiz.css'
import Footer from '../../Components/Footer/Footer'
import logoWeg from "../../assets/img/logoWEG.png"
import w50 from "../../assets/img/motorW50.png"
import spanish from "../../assets/img/spanish.png"
import Header from '../../Components/Header/Header';

function Quiz() {
  const [progresso, setProgresso] = useState(0);
  const [verificacao, setVerificacao] = useState(localStorage.getItem('verificar') === 'sim' || localStorage.getItem('verificar2') === 'sim');

  const Question1 = () => progresso === 0;
  const Question2 = () => progresso === 1;
  const Question3 = () => progresso === 2;
  const Question4 = () => progresso === 3;
  const Question5 = () => progresso === 4;

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
  return (
    <>
    <Header/>
      {/* {verificacao ? <AppHeaderLogin /> : <AppHeader />} */}
      <div class="ui raised very padded text container segment quiz">
        <div class="ui mini steps">
          <i class="clipboard list icon"></i>
          <div class="step">
            <div class="content">
              <div class="title">I</div>
            </div>
          </div>
          <div class="step">
            <div class="content">
              <div class="title">II</div>
            </div>
          </div>
          <div class="step">
            <div class="content">
              <div class="title">III</div>
            </div>
          </div>
          <div class="step">
            <div class="content">
              <div class="title">IV</div>
            </div>
          </div>
          <div class="step">
            <div class="content">
              <div class="title">V</div>
            </div>
          </div>
        </div>
        {Question1() && (
          <div>
            <div class="ui large header">Qual é a linha do produto que você deseja?</div>
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="industrial" name="industrial" value="Industrial" />
              <label className="desc" htmlFor="industrial">Industrial</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="residencial" name="residencial" value="Residencial" />
              <label className="desc" htmlFor="residencial">Residencial</label><br />
            </div>
          </div>
        )}

        {Question2() && (
          <div>
            <div class="ui large header">Qual a voltagem necessária para o seu produto?</div>

            <div class="ui checkbox">
              <input className="check" type="checkbox" id="12v" name="12v" value="12v" />
              <label className="question" htmlFor="12v">12V</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="20V" name="20V" value="20V" />
              <label className="question" htmlFor="20V">20V</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="40V" name="40V" value="40V" />
              <label className="question" htmlFor="40V">40V</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="80V" name="80V" value="80V" />
              <label className="question" htmlFor="80V">80V</label>
              <br />
            </div>
          </div>
        )}

        {Question3() && (
          <div>
            <div class="ui large header">Quantas células são necessárias?</div>
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="6" name="6" value="6" />
              <label className="desc" htmlFor="6">6</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="8" name="8" value="8" />
              <label className="desc" htmlFor="8">8</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="10" name="10" value="10" />
              <label className="desc" htmlFor="10">10</label></div>
            <br />
          </div>
        )}

        {Question4() && (
          <div>
            <div class="ui large header">Qual o grau de proteção necessário?</div>
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="IP23" name="IP23" value="IP23" />
              <label className="desc" htmlFor="IP23">IP23</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="IP24(W)" name="IP24(W)" value="IP24(W)" />
              <label className="desc" htmlFor="IP24(W)">IP24(W)</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="IP55" name="IP55" value=" IP55" />
              <label className="desc" htmlFor="IP55"> IP55</label>
            </div>
            <br />
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="IP56" name="IP56" value="IP56" />
              <label className="desc" htmlFor="IP56">IP56</label>
            </div>
            <br />
          </div>
        )}

        {Question5() && (
          <div>
            <div class="ui large header">Qual a tensão necessária?</div>
            <div class="ui checkbox">
              <input className="check" type="checkbox" id="220/380V" name="220/380V" value="220/380V" />
              <label className="desc" htmlFor="220/380V">220/380V</label>
            </div>
            <br />
            <div class="ui checkbox">
            <input className="check" type="checkbox" id="220/380/440V" name="220/380/440V" value="220/380/440V" />
            <label className="desc" htmlFor="220/380/440V">220/380/440V</label>
            </div>
            <br />
          </div>
        )}

        {progresso === 5 ? (
          <div>
            <div class="ui large center aligned  header">Motor W50</div>
            <img class="ui centered fluid image w50" src={w50} />
            <p className="descricao">Os motores W50 são projetados para aplicações industriais e garantem excelente performance e confiabilidade nas mais severas aplicações.</p>
            <button class="ui huge fluid button details">Mais detalhes</button>
          </div>
        ) : (
          <div>
            <button class="ui big button back" onClick={voltar}>Voltar</button>
            <button class="ui big button next" onClick={proximo}>Próximo</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Quiz