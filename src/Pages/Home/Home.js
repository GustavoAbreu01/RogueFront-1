//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Home.css'

//importando as frameworks
import Aos from 'aos'
import { Link } from 'react-router-dom'

//Importando os componentes
import ProductCarousel from '../../Components/ProductAccessedCarousel/ProductAccessedCarousel'
import ProductHighlightCarousel from '../../Components/ProductHighlightCarousel/ProductHighlightCarousel'
import ProductSearchedCarousel from '../../Components/ProductSearchedCarousel/ProductSearchedCarousel'
import ProductNewCarousel from '../../Components/ProductNewCarousel/ProductNewCarousel'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import Carousell from '../../Components/BannerCarousell/BannerCarousell'

//Importando as imagens
import iconMotor from "../../assets/img/iconeMotor.png"
import Qualidade from "../../assets/img/MOTORES-03.png"
import Compatibilidade from "../../assets/img/COMPATIBILIDADE-03.png"
import Sustentabilidade from "../../assets/img/ENERGIA_SOLAR-03.png"
import Inovação from "../../assets/img/ESTACOES_DE_RECARGA-03.png"
import Crescimento from "../../assets/img/GRAFICO_PRINCIPAL-03.png"
import Assistência from "../../assets/img/CALL_CENTER-03.png"
import IoT from "../../assets/img/PLATAFORMA_IOT_WEGNOLOGY-03.png"
import BannerAnnouncementOne from '../../assets/img/BannerAnnun1.jpg'
import BannerAnnouncementTwo from '../../assets/img/BannerAnnun2.jpg'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import motor from "../../assets/img/motor.png"

//Importando os icones
import { BiLineChart } from 'react-icons/bi'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsPaintBucket } from 'react-icons/bs'
import { CgSearchFound } from 'react-icons/cg'
import { CgSmartphoneChip } from 'react-icons/cg'
import { LiaCertificateSolid } from 'react-icons/lia'
import { MdOutlineNewReleases } from 'react-icons/md'
import { TfiPanel } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'


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

  const renderDesktopView = () => (
    <div>
      <>{!verify() ? <Header /> : <HeaderLogin />}
        <WeggnerModal />
        <div className='boxCarrossel'>
          <Carousell></Carousell>
        </div>
        <div className="home_divider_carousel"></div>
        <div className="box_home_option_pages">
          <Link to='/quiz' style={{ textDecoration: 'none' }}>
            <div>
              <div className="home_optional_icons">
                <img src={questIcon} alt="" width={75} />
                <div>
                  <h4 className='home_optional_title'>Descubra qual é<br />
                    o produto para você!</h4>
                  <p className='home_optional_description'>Faça o nosso questionário</p>
                </div>
              </div>
            </div>
          </Link>
          <div className='home_divider_icons'></div>
          <Link to='/compare' style={{ textDecoration: 'none' }}>
            <div>
              <div className="home_optional_icons">
                <img src={compare} alt="" width={150} />
                <div>
                  <h4 className='home_optional_title'>Compare produtos</h4>
                  <p className='home_optional_description'>Veja qual se encaixa melhor<br />
                    com a sua necessidade</p>
                </div>
              </div>
            </div>
          </Link>
          <div className='home_divider_icons'></div>
          <div>
            <div className="home_optional_icons">
              <img src={weggner} alt="" width={125} />
              <div>
                <h4 className='home_optional_title'>Conheça o nosso<br />
                  Assistente Virtual!</h4>
                <p className='home_optional_description'>Navegar ficou ainda mais fácil</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='home_accessed'>
            <BiLineChart color='var(--blue-primary)' size={50} />
            <h1 className='home_accessed_title' >Produtos mais acessados</h1>
          </div>
          <div className='sliderProductAccessed'>
            <ProductCarousel />
          </div>
        </div>

        <div className='home_highlights' >
          <div className='home_highlights_title'>
            <FaStar color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text' >Destaques da semana</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductHighlightCarousel />
          </div>
        </div>

        <div className='container_home_category_buttons' >
          <h1 className='home_category_title'>Departamentos</h1>
          <div className='box_home_category_buttons'>
            <Link to='/category'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <MdOutlineSecurity color='var(--blue-primary)' className='home_optional_category_button_image' ></MdOutlineSecurity>
                </button>
                <h2 className='home_optional_category_title'>Segurança</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <BsPaintBucket color='var(--blue-primary)' className='home_optional_category_button_image' ></BsPaintBucket>
                </button>
                <h2 className='home_optional_category_title'>Tintas</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <CgSmartphoneChip color='var(--blue-primary)' className='home_optional_category_button_image' ></CgSmartphoneChip>
                </button>
                <h2 className='home_optional_category_title'>Automação</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <TfiPanel color='var(--blue-primary)' className='home_optional_category_button_image'></TfiPanel>
                </button>
                <h2 className='home_optional_category_title'>Painéis</h2>
              </div>
            </Link>
            <Link to='/category'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img src={iconMotor} width={75} height={50} alt=''></img>
                </button>
                <h2 className='home_optional_category_title'>Motores</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className='home_searched' >
          <div className='home_searched_title'>
            <div className='home_searched_aling'>
              <h1 className='home_searched_title_text' >Mais procurados</h1>
              <CgSearchFound color='var(--white)' size={50} />
            </div>
          </div>
          <div className='home_slider_product_searched'>
            <ProductSearchedCarousel />
          </div>
        </div>

        <div>
          <div className='home_benefiits'>
            <LiaCertificateSolid color='var(--blue-primary)' size={50} />
            <h1 className='home_benefiits_title'>Benefícios de compra</h1>
          </div>

          <div className="container_home_benefits">
            {iconsInfoOne.map((icon) => (
              <div className="home_benefits_info" data-aos="fade-up" key={icon.id}>
                <div className="home_benefits_info_icon">
                  <img src={icon.icon} className="home_benefits_icon" alt='' />
                </div>
                <div className='home_benefits_description_info'>
                  <h1 className="home_benefits_description_title" >{icon.name}</h1>
                  <p className="home_benefits_description">{icon.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="container_home_benefits">
            {iconsInfoTwo.map((icon) => (
              <div className="home_benefits_info" data-aos="fade-up" key={icon.id}>
                <div className="home_benefits_info_icon">
                  <img src={icon.icon} className="home_benefits_icon" alt='' />
                </div>
                <div className='home_benefits_description_info'>
                  <h1 className="home_benefits_description_title" >{icon.name}</h1>
                  <p className="home_benefits_description" >{icon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='home_highlights' >
          <div className='home_highlights_title'>
            <MdOutlineNewReleases color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text' >Novidades</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductNewCarousel />
          </div>
        </div>

        <div className='home_announcements' data-aos="fade-up" >
          <img className='home_announcements_banner' src={BannerAnnouncementOne} />
          <img className='home_announcements_banner' src={BannerAnnouncementTwo} />
        </div>

        <Footer /></>
    </div>
  )

  const renderMobileView = () => (
    <div>
      <>{!verify() ? <Header /> : <HeaderLogin />}
        <WeggnerModal />
        <div className='boxCarrossel_mobile'>
          <Carousell></Carousell>
        </div>
        <div className="home_divider_carousel"></div>
        <div className="box_home_option_pages_mobile">
          <Link to='/category'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <MdOutlineSecurity color='var(--blue-primary)' className='home_optional_category_button_image_mobile' ></MdOutlineSecurity>
              </button>
              <h2 className='home_optional_category_title_mobile'>Segurança</h2>
            </div>
          </Link>
          <Link to='/category'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <BsPaintBucket color='var(--blue-primary)' className='home_optional_category_button_image_mobile' ></BsPaintBucket>
              </button>
              <h2 className='home_optional_category_title_mobile'>Tintas</h2>
            </div>
          </Link>
          <Link to='/category'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <CgSmartphoneChip color='var(--blue-primary)' className='home_optional_category_button_image_mobile' ></CgSmartphoneChip>
              </button>
              <h2 className='home_optional_category_title_mobile'>Automação</h2>
            </div>
          </Link>
          <Link to='/category'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <TfiPanel color='var(--blue-primary)' className='home_optional_category_button_image_mobile'></TfiPanel>
              </button>
              <h2 className='home_optional_category_title_mobile'>Painéis</h2>
            </div>
          </Link>
          <Link to='/category'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img src={iconMotor} width={40} height={25} alt=''></img>
              </button>
              <h2 className='home_optional_category_title_mobile'>Motores</h2>
            </div>
          </Link>
        </div>
        <div>
          <div className='home_accessed_mobile'>
            <BiLineChart color='var(--blue-primary)' size={30} />
            <h1 className='home_accessed_title_mobile' >Produtos mais acessados</h1>
          </div>
          <div className='sliderProductAccessed'>
            <ProductCarousel />
          </div>
        </div>

        <div className='home_highlights' >
          <div className='home_highlights_title'>
            <FaStar color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text' >Destaques da semana</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductHighlightCarousel />
          </div>
        </div>


        <div className='home_searched' >
          <div className='home_searched_title'>
            <div className='home_searched_aling'>
              <h1 className='home_searched_title_text' >Mais procurados</h1>
              <CgSearchFound color='var(--white)' size={50} />
            </div>
          </div>
          <div className='home_slider_product_searched'>
            <ProductSearchedCarousel />
          </div>
        </div>

        <div>


          <div className="container_home_benefits">

          </div>

          <div className="container_home_benefits">

          </div>
        </div>

        <div className='home_highlights' >
          <div className='home_highlights_title'>
            <MdOutlineNewReleases color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text' >Novidades</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductNewCarousel />
          </div>
        </div>

        <Footer /></>
    </div>
  )

  const renderTabletView = () => (
    <div>
      <>{!verify() ? <Header /> : <HeaderLogin />}

      </>
    </div>
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

export default Home