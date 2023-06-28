import React from 'react'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Carousell from '../../Components/carousel/Carousel'
import './style.css'

function Home() {
  return (
    <><Header />
    <div className='boxCarrossel'>
      <Carousell></Carousell>
      </div>
      <div className="dividerCarrossel"></div>
      <div className="optionPages">
        <div className="optionQuest">
          <div className="questIcon">
            <img src={questIcon} alt="" width={75} />
            <div>
              <h4>Descubra qual é<br />
                o produto para você!</h4>
              <p>Faça o nosso questionário</p>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className="optionQuest">
          <div className="questIcon">
            <img src={compare} alt="" width={150} />
            <div>
              <h3>Compare</h3>
              <p>Veja qual se encaixa melhor<br />
                com a sua necessidade</p>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className="optionQuest">
          <div className="questIcon">
            <img src={weggner} alt="" width={125} />
            <div>
              <h3>Conheça o nosso<br/>
                Assistente Virtual!</h3>
              <p>Navegar ficou ainda mais fácil</p>
            </div>
          </div>
        </div>
      </div>
      <Footer /></>
  )
}

export default Home