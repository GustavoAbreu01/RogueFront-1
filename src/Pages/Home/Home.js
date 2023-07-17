import React from 'react'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import BannerCarousell from '../../Components/BannerCarousell/BannerCarousell'
import logo from "../../assets/img/logo-weg.png"
import iconMotor from "../../assets/img/iconeMotor.png"
import Qualidade from "../../assets/img/MOTORES-03.png"
import Compatibilidade from "../../assets/img/COMPATIBILIDADE-03.png"
import Sustentabilidade from "../../assets/img/ENERGIA_SOLAR-03.png"
import Inovação from "../../assets/img/ESTACOES_DE_RECARGA-03.png"
import Crescimento from "../../assets/img/GRAFICO_PRINCIPAL-03.png"
import Assistência from "../../assets/img/CALL_CENTER-03.png"
import IoT from "../../assets/img/PLATAFORMA_IOT_WEGNOLOGY-03.png"
import salvo from "../../assets/img/salvo.png"
import BannerAnnouncementOne from '../../assets/img/BannerAnnun1.jpg'
import BannerAnnouncementTwo from '../../assets/img/BannerAnnun2.jpg'
import { BiLineChart } from 'react-icons/bi'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsPaintBucket } from 'react-icons/bs'
import { CgSearchFound } from 'react-icons/cg'
import { CgSmartphoneChip } from 'react-icons/cg'
import { LiaCertificateSolid } from 'react-icons/lia'
import { MdOutlineNewReleases } from 'react-icons/md'
import { TfiPanel } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'
import './Home.css'
import motor from "../../assets/img/motor.png"
import { Link } from 'react-router-dom'
import ProductAccessedCarousel from '../../Components/ProductAccessedCarousel/ProductAccessedCarousel'
import ProductHighlightCarousel from '../../Components/ProductHighlightCarousel/ProductHighlightCarousel'
import Aos from 'aos'
import ProductSearchedCarousel from '../../Components/ProductSearchedCarousel/ProductSearchedCarousel'
import ProductNewCarousel from '../../Components/ProductNewCarousel/ProductNewCarousel'


function Home() {

  Aos.init({
    duration: 200
  });


  const iconsInfoOne = [
    {
      id: 1,
      name: 'Assistência',
      icon: Assistência,
      description: 'A qualidade impecável de nossos produtos é a base do nosso compromisso com a satisfação do cliente.'
    },
    {
      id: 2,
      name: 'Compatibilidade',
      icon: Compatibilidade,
      description: 'Nossos produtos são compatíveis com diversos sistemas e equipamentos, facilitando sua integração.'
    },
    {
      id: 3,
      name: 'Sustentabilidade',
      icon: Sustentabilidade,
      description: 'Nossos produtos são compatíveis com diversos sistemas e equipamentos, facilitando sua integração.'
    },
    {
      id: 4,
      name: 'Inovação',
      icon: Inovação,
      description: 'Nossos produtos são inovadores, com tecnologias avançadas que atendem às demandas em constante mudança dos nossos clientes.'
    },
  ]

  const iconsInfoTwo = [
    {
      id: 5,
      name: 'Crescimento',
      icon: Crescimento,
      description: 'Nossos produtos impulsionam o crescimento das empresas ao oferecer soluções confiáveis e inovadoras.'
    },
    {
      id: 6,
      name: 'Qualidade',
      icon: Qualidade,
      description: 'A qualidade impecável de nossos produtos é a base do nosso compromisso com a satisfação do cliente.'
    },
    {
      id: 7,
      name: 'IoT',
      icon: IoT,
      description: 'Nossos produtos possuem tecnologia IoT, oferecendo conexão inteligente para uma experiência mais conveniente aos usuários.'
    },
  ]

  const products = [
    {
      name: 'W-12',
      imageUrl: motor,
      description1: 'Potência',
      description2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description3: 'Polaridade',
      description4: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description5: 'Tensão',
      description6: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description7: 'Frequência',
      description8: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description9: 'Carcaça',
      description10: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description11: 'Cor',
      description12: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    },
    {
      name: 'W-12',
      imageUrl: motor,
      description1: 'Potência',
      description2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description3: 'Polaridade',
      description4: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description5: 'Tensão',
      description6: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description7: 'Frequência',
      description8: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description9: 'Carcaça',
      description10: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description11: 'Cor',
      description12: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    }
  ];

  localStorage.setItem('productsCompared', JSON.stringify(products));

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
      <>{!verify() ? <Header /> : <HeaderLogin />}
        <WeggnerModal />
        <div className='boxCarrossel'>
          <BannerCarousell></BannerCarousell>
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
        </div>
        <div className='boxAccessed'>
          <div className='boxTitleAccessed'>
            <BiLineChart color='var(--blue-primary)' size={50} />
            <h1 className='titleAccessed' >Produtos mais acessados</h1>
          </div>
          <div className='sliderProductAccessed'>
            <ProductAccessedCarousel />
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
            <Link to='/category'>
              <div className='categoryTitle'>
                <button className='categoryButton'>
                  <MdOutlineSecurity color='var(--blue-primary)' className='categoryButtonImg' ></MdOutlineSecurity>
                </button>
                <h2>Segurança</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='categoryTitle'>
                <button className='categoryButton'>
                  <BsPaintBucket color='var(--blue-primary)' className='categoryButtonImg' ></BsPaintBucket>
                </button>
                <h2>Tintas</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='categoryTitle'>
                <button className='categoryButton'>
                  <CgSmartphoneChip color='var(--blue-primary)' className='categoryButtonImg' ></CgSmartphoneChip>
                </button>
                <h2>Automação</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='categoryTitle'>
                <button className='categoryButton'>
                  <TfiPanel color='var(--blue-primary)' className='categoryButtonImg'></TfiPanel>
                </button>
                <h2>Painéis</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='categoryTitle'>
                <button className='categoryButton'>
                  <img src={iconMotor} width={75} height={50} alt=''></img>
                </button>
                <h2>Motores</h2>
              </div>
            </Link>
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
            <ProductSearchedCarousel />
          </div>
        </div>

        <div className='boxBenefits'>
          <div className='boxBenefiitsTitle'>
            <LiaCertificateSolid color='var(--blue-primary)' size={50} />
            <h1 className='benefiitsTitle'>Benefícios de compra</h1>
          </div>
          <div className="containerBenefits">
            {iconsInfoOne.map((icon) => (
              <div className="infoBox" data-aos="fade-up" key={icon.id}>
                <div className="iconInfoBox">
                  <img src={icon.icon} className="iconInfo" alt='' />
                </div>
                <div className='infoDescriptionBox'>
                  <h1 className="titleInfo" >{icon.name}</h1>
                  <p className="descriptionInfo">{icon.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="containerBenefits">
            {iconsInfoTwo.map((icon) => (
              <div className="infoBox" data-aos="fade-up" key={icon.id}>
                <div className="iconInfoBox">
                  <img src={icon.icon} className="iconInfo" alt='' />
                </div>
                <div className='infoDescriptionBox'>
                  <h1 className="titleInfo" >{icon.name}</h1>
                  <p className="descriptionInfo" >{icon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='boxHighlights' >
          <div className='boxTitleHighlights'>
            <MdOutlineNewReleases color='var(--white)' size={40} />
            <h1 className='titleHighlights' >Novidades</h1>
          </div>
          <div className='boxHighlightsProducts'>
            <ProductNewCarousel />
          </div>
        </div>

        <div className='boxAnnouncements' data-aos="fade-up" >
          <img className='announBanner' src={BannerAnnouncementOne} />
          <img className='announBanner' src={BannerAnnouncementTwo} />
        </div>

        <Footer /></>
    </div>

  )
}

export default Home