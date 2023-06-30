import React from 'react'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Carousell from '../../Components/carousel/carousel'
import Carousel from "react-multi-carousel";
import { BiLineChart } from 'react-icons/bi'
import './style.css'
import { Link } from 'react-router-dom'
import Product from '../../Components/Product/Product'

function Home() {

  const login = localStorage.getItem("verifyLogin")

  const verifyLogin = () => {
    if (login === 'yes') {
      return true
    } else {
      return false
    }
  }


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <><Header /><WeggnerModal />
        <div className='boxCarrossel'>
          <Carousell></Carousell>
        </div>
        <div className="dividerCarrossel"></div>
        <div className="optionPages">
          <Link to='/quiz' style={{ textDecoration: 'none' }}>
            <div className="optionQuest">
              <div className="questIcon">
                <img src={questIcon} alt="" width={75} />
                <div>
                  <h4 className='titleOpc'>Descubra qual é<br />
                    o produto para você!</h4>
                  <p className='descOpc'>Faça o nosso questionário</p>
                </div>
              </div>
            </div>
          </Link>
          <div className='dividerIcons'></div>
          <Link to='/compare' style={{ textDecoration: 'none' }}>
            <div className="optionQuest">
              <div className="questIcon">
                <img src={compare} alt="" width={150} />
                <div>
                  <h4 className='titleOpc'>Compare produtos</h4>
                  <p className='descOpc'>Veja qual se encaixa melhor<br />
                    com a sua necessidade</p>
                </div>
              </div>
            </div>
          </Link>
          <div className='dividerIcons'></div>
          <Link to='*' style={{ textDecoration: 'none' }}>
            <div className="optionWeggner">
              <div className="questIcon">
                <img src={weggner} alt="" width={125} />
                <div>
                  <h4 className='titleOpc'>Conheça o nosso<br />
                    Assistente Virtual!</h4>
                  <p className='descOpc'>Navegar ficou ainda mais fácil</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className='boxAccessed'>
          <div className='boxTitleAccessed'>
            <BiLineChart color='var(--blue-primary)' size={30} />
            <h3 className='titleAccessed' >Produtos mais acessados</h3>
          </div>
          <div className='sliderProductAccessed'>
          </div>
        </div>
      <Footer /></>
      </div>
      
  )
}

export default Home