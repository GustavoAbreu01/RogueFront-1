import React, { useEffect } from 'react'
import LanguageModal from '../../Components/LanguageModal/LanguageModal'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import Carousell from '../../Components/carousel/Carousel'
import logo from "../../assets/img/logo-weg.png"
import iconMotor from "../../assets/img/iconeMotor.png"
import salvo from "../../assets/img/salvo.png"
import { BiLineChart } from 'react-icons/bi'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsPaintBucket } from 'react-icons/bs'
import { CgSearchFound } from 'react-icons/cg'
import { CgSmartphoneChip } from 'react-icons/cg'
import { TfiPanel } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'
import './Home.css'
import { Link } from 'react-router-dom'
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel'
import ProductHighlight from '../../Components/ProductHighlight/ProductHighlight'
import ProductHighlightCarousel from '../../Components/ProductHighlightCarousel/ProductHighlightCarousel'

function Home() {

  const products = [
    {
      name: 'Logo',
      imageUrl: logo,
      description1: 'logo1',
      description2: 'logo2',
      description3: 'logo3',
      description4: 'logo4'
    },
    {
      name: 'Salvo',
      imageUrl: salvo,
      description1: 'salvo1',
      description2: 'salvo2',
      description3: 'salvo3',
      description4: 'salvo4'
    }
  ];

  localStorage.setItem("productsCompared", JSON.stringify(products))

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
      <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
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
          <Link to='/weggner' style={{ textDecoration: 'none' }}>
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
            <BiLineChart color='var(--blue-primary)' size={50} />
            <h1 className='titleAccessed' >Produtos mais acessados</h1>
          </div>
          <div className='sliderProductAccessed'>
            <ProductCarousel />
          </div>
        </div>

        <div className='boxHighlights' >
          <div className='boxTitleHighlights'>
            <FaStar color='var(--white)' size={40} />
            <h1 className='titleHighlights' >Destaques da semana</h1>
          </div>
          <div className='boxHighlightsProducts'>
            <ProductHighlightCarousel />
          </div>
        </div>

        <div className='boxCategoryButtons' >
          <h1 className='categoryTitleBox'>Departamentos</h1>
          <div className='categoryButtonsOpt'>
            <div className='categoryTitle'>
              <button className='categoryButton'>
                <MdOutlineSecurity color='var(--blue-primary)' className='categoryButtonImg' ></MdOutlineSecurity>
              </button>
              <h2>Segurança</h2>
            </div>
            <div className='categoryTitle'>
              <button className='categoryButton'>
                <BsPaintBucket color='var(--blue-primary)' className='categoryButtonImg' ></BsPaintBucket>
              </button>
              <h2>Tintas</h2>
            </div>
            <div className='categoryTitle'>
              <button className='categoryButton'>
                <CgSmartphoneChip color='var(--blue-primary)' className='categoryButtonImg' ></CgSmartphoneChip>
              </button>
              <h2>Automação</h2>
            </div>
            <div className='categoryTitle'>
              <button className='categoryButton'>
                <TfiPanel color='var(--blue-primary)' className='categoryButtonImg'></TfiPanel>
              </button>
              <h2>Painéis</h2>
            </div>
            <div className='categoryTitle'>
              <button className='categoryButton'>
                <img src={iconMotor} width={75} height={50}></img>
              </button>
              <h2>Motores</h2>
            </div>
          </div>
        </div>

        <div className='boxSearched' >
          <div className='containerTitleSearched'>
            <div className='boxTitleSearched'>
              <h1 className='titleSearched' >Mais procurados</h1>
              <CgSearchFound color='var(--white)' size={50} />
            </div>
          </div>
          <div className='boxSearchedProducts'>
            <ProductHighlightCarousel />
          </div>
        </div>

        benefits

        <div className='boxHighlights' >
          <div className='boxTitleHighlights'>
            <FaStar color='var(--white)' size={40} />
            <h1 className='titleHighlights' >Destaques da semana</h1>
          </div>
          <div className='boxHighlightsProducts'>
            <ProductHighlightCarousel />
          </div>
        </div>

        <Footer /></>
    </div>

  )
}

export default Home