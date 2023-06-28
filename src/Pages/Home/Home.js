import React from 'react'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Carousell from '../../Components/carousel/carousel'
import './style.css'

function Home() {
  return (
    <><Header />
      <Carousell></Carousell>
      <div className="dividerCarrossel"></div>
      <div className="optionPages">
        <div className="optionQuest">
          <div className="questIcon">
            <img src={questIcon} alt="" width={75} />
            <p>aaaaaaaaaaaaa</p>
          </div>
        </div>
        <div className='divider'></div>
        <div className="optionQuest">
          <div className="questIcon">
            <img src={compare} alt="" width={150} />
            <p>aaaaaaaaaaaaa</p>
          </div>
        </div>
        <div className='divider'></div>
        <div className="optionQuest">
          <div className="questIcon">
            <img src={weggner} alt="" width={125} />
            <p>aaaaaaaaaaaaa</p>
          </div>
        </div>
      </div>
      <Footer /></>
  )
}

export default Home