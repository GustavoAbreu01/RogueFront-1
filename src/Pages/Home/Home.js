import React from 'react'
import questIcon from "../../assets/img/questionario.png"
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Carousell from '../../Components/carousel/carousel'
import './style.css'
import { Divider } from 'semantic-ui-react'

function Home() {
  return (
    <><Header />
      <Carousell></Carousell>
      <div className="dividerCarrossel"></div>
      <div className="optionPages">
        <div className="optionQuest">
          <div className="questIcon">
            <img src={questIcon} alt="" />
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className=''></div>
        </div>
        <div className="optionQuest">
          <div className="questIcon">
            <img src={questIcon} alt="" />
            <p>aaaaaaaaaaaaa</p>
          </div>
        </div>
        <div className="optionQuest">
          <div className="questIcon">
            <img src={questIcon} alt="" />
            <p>aaaaaaaaaaaaa</p>
          </div>
        </div>
      </div>
      <Footer /></>
  )
}

export default Home