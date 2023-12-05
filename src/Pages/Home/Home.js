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
import agro from "../../assets/img/icone-rural.png"
import naval from "../../assets/img/NAVAL.png"
import mineracao from "../../assets/img/mineracao.png"
import construcao from "../../assets/img/CONSTRUCAO.png"
import siderurgia from "../../assets/img/metalurgica.png"
import alimenticia from "../../assets/img/ALIMENTAÇÃO.png"
import Qualidade from "../../assets/img/MOTORES-03.png"
import Compatibilidade from "../../assets/img/COMPATIBILIDADE-03.png"
import Sustentabilidade from "../../assets/img/ENERGIA_SOLAR-03.png"
import Inovação from "../../assets/img/ESTACOES_DE_RECARGA-03.png"
import Crescimento from "../../assets/img/GRAFICO_PRINCIPAL-03.png"
import Assistência from "../../assets/img/CALL_CENTER-03.png"
import IoT from "../../assets/img/PLATAFORMA_IOT_WEGNOLOGY-03.png"
import BannerAnnouncementOne from '../../assets/img/banner-motor.jpg'
import BannerAnnouncementTwo from '../../assets/img/banner-motor-2.jpg'
import BannerAnnouncementThree from '../../assets/img/BannerAnnun3.jpg'
import BannerAnnouncementFour from '../../assets/img/BannerAnnun4.jpg'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import motor from "../../assets/img/motor.png"

//Importando os icones
import { BiLineChart } from 'react-icons/bi'
import { CgSearchFound } from 'react-icons/cg'
import { LiaCertificateSolid } from 'react-icons/lia'
import { MdOutlineNewReleases } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import Cookies from 'js-cookie'
import { UserService } from '../../Service'


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
    const Registered = Cookies.get('Cookie')
    if (Registered) {
      return true
    } else {
      return false
    }
  }

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getUser= async () => {
    const token = Cookies.get('Cookie');
    if (token) {
      const tokenPayload = token.split('.');
      const decodedPayload = atob(tokenPayload[1]);
      const userClaims = JSON.parse(decodedPayload);
      try {
        const userPrin = await UserService.findOne(userClaims.sub);
        if (userPrin) {
          setUser(userPrin);
        } else {
          setUser([]);
        }
      } catch (error) {
        console.error('Erro ao obter usuário:', error);
      }
    }
  };

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
            <ProductCarousel user={user} />
          </div>
        </div>

        <div className='home_titles' >
          <div className='home_highlights_title'>
            <FaStar color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text' >Destaques da semana</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductHighlightCarousel user={user} />
          </div>
        </div>

        <div className='container_home_category_buttons' >
          <h1 className='home_category_title'>Segmentos</h1>
          <div className='box_home_category_buttons'>
            <Link to='/category/agronegocio'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img className='home_optional_category_button_image' src={agro} alt="" width={125} />
                </button>
                <h2 className='home_optional_category_title'>Agronegócio</h2>
              </div>
            </Link>
            <Link to='/category/naval'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img className='home_optional_category_button_image' src={naval} alt="" width={125} />
                </button>
                <h2 className='home_optional_category_title'>Naval</h2>
              </div>
            </Link>
            <Link to='/category/mineracao'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img className='home_optional_category_button_image' src={mineracao} alt="" width={125} />
                </button>
                <h2 className='home_optional_category_title'>Mineração</h2>
              </div>
            </Link>
            <Link to='/category/edificacao'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img className='home_optional_category_button_image' src={construcao} alt="" width={125} />
                </button>
                <h2 className='home_optional_category_title'>Edificação</h2>
              </div>
            </Link>
            <Link to='/category/siderurgia'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img className='home_optional_category_button_image' src={siderurgia} alt="" width={125} />
                </button>
                <h2 className='home_optional_category_title'>Siderurgia</h2>
              </div>
            </Link>
            <Link to='/category/alimenticia'>
              <div className='home_optional_category'>
                <button className='home_optional_category_button'>
                  <img className='home_optional_category_button_image_food' src={alimenticia} alt="" />
                </button>
                <h2 className='home_optional_category_title'>Alimentícia</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className='home_titles' >
          <div className='home_searched_title'>
            <div className='home_searched_aling'>
              <h1 className='home_searched_title_text' >Mais procurados</h1>
              <CgSearchFound color='var(--white)' size={50} />
            </div>
          </div>
          <div className='home_slider_product_searched'>
            <ProductSearchedCarousel user={user} />
          </div>
        </div>

        <div>
          <div className='home_benefiits'>
            <LiaCertificateSolid color='var(--blue-primary)' size={50} />
            <h1 className='home_benefiits_title'>Benefícios de compra</h1>
          </div>

          <div className="container_home_benefits">
            {iconsInfoOne.map((iconOne) => (
              <div className="home_benefits_info" data-aos="fade-up" key={iconOne.id}>
                <div className="home_benefits_info_icon">
                  <img src={iconOne.icon} className="home_benefits_icon" alt='' />
                </div>
                <div className='home_benefits_description_info'>
                  <h1 className="home_benefits_description_title" >{iconOne.name}</h1>
                  <p className="home_benefits_description">{iconOne.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="container_home_benefits">
            {iconsInfoTwo.map((iconTwo) => (
              <div className="home_benefits_info" data-aos="fade-up" key={iconTwo.id}>
                <div className="home_benefits_info_icon">
                  <img src={iconTwo.icon} className="home_benefits_icon" alt='' />
                </div>
                <div className='home_benefits_description_info'>
                  <h1 className="home_benefits_description_title" >{iconTwo.name}</h1>
                  <p className="home_benefits_description" >{iconTwo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='home_titles' >
          <div className='home_highlights_title'>
            <MdOutlineNewReleases color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text' >Novidades</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductNewCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements' data-aos="fade-up" >
          <img className='home_announcements_banner' src={BannerAnnouncementOne} />
          <img className='home_announcements_banner' src={BannerAnnouncementTwo} />
        </div>

        <Footer /></>
    </div>
  )

  const renderTabletView = () => (
    <div>
      <>{!verify() ? <Header /> : <HeaderLogin />}
        <div className='boxCarrossel_mobile'>
          <Carousell></Carousell>
        </div>
        <div className="home_divider_carousel"></div>
        <div className="box_home_option_pages_tablet">
          <Link to='/category/agronegocio'>
            <div className='home_optional_category_tablet'>
              <button className='home_optional_category_button_tablet'>
                <img className='home_optional_category_button_image_tablet' src={agro} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_tablet'>Agronegócio</h2>
            </div>
          </Link>
          <Link to='/category/naval'>
            <div className='home_optional_category_tablet'>
              <button className='home_optional_category_button_tablet'>
                <img className='home_optional_category_button_image_tablet' src={naval} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_tablet'>Naval</h2>
            </div>
          </Link>
          <Link to='/category/mineracao'>
            <div className='home_optional_category_tablet'>
              <button className='home_optional_category_button_tablet'>
                <img className='home_optional_category_button_image_tablet' src={mineracao} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_tablet'>Mineração</h2>
            </div>
          </Link>
          <Link to='/category/edificacao'>
            <div className='home_optional_category_tablet'>
              <button className='home_optional_category_button_tablet'>
                <img className='home_optional_category_button_image_tablet' src={construcao} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_tablet'>Edificação</h2>
            </div>
          </Link>
          <Link to='/category/siderurgia'>
            <div className='home_optional_category_tablet'>
              <button className='home_optional_category_button_tablet'>
                <img className='home_optional_category_button_image_tablet' src={siderurgia} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_tablet'>Siderurgia</h2>
            </div>
          </Link>
          <Link to='/category/alimenticia'>
            <div className='home_optional_category_tablet'>
              <button className='home_optional_category_button_tablet'>
                <img className='home_optional_category_button_image_tablet' src={alimenticia} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_tablet'>Alimentícia</h2>
            </div>
          </Link>
        </div>
        <div>
          <div className='home_accessed_tablet'>
            <BiLineChart color='var(--blue-primary)' size={40} />
            <h1 className='home_accessed_title' >Produtos mais acessados</h1>
          </div>
          <div className='home_slider_product_accessed_tablet'>
            <ProductCarousel user={user} />
          </div>
        </div>

        <div className='home_titles_mobile' >
          <div className='home_highlights_title_tablet'>
            <FaStar color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text_tablet' >Destaques da semana</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductHighlightCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements_products_tablet' data-aos="fade-up" >
          <img className='home_announcements_banner_products_tablet' src={BannerAnnouncementThree} />
        </div>

        <div className='home_titles_mobile' >
          <div className='home_searched_title'>
            <div className='home_searched_aling_tablet'>
              <h1 className='home_searched_title_text_tablet' >Mais procurados</h1>
              <CgSearchFound color='var(--white)' size={50} />
            </div>
          </div>
          <div className='home_slider_product_searched'>
            <ProductSearchedCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements_products_tablet' data-aos="fade-up" >
          <img className='home_announcements_banner_products_tablet' src={BannerAnnouncementFour} />
        </div>

        <div className='home_titles_mobile' >
          <div className='home_highlights_title_tablet'>
            <MdOutlineNewReleases color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text_tablet' >Novidades</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductNewCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements_tablet' data-aos="fade-up" >
          <img className='home_announcements_banner_tablet' src={BannerAnnouncementTwo} />
        </div>

        <Footer /></>
    </div>
  )

  const renderMobileView = () => (
    <div>
      <>{!verify() ? <Header /> : <HeaderLogin />}
        <div className='boxCarrossel_mobile'>
          <Carousell></Carousell>
        </div>
        <div className="home_divider_carousel"></div>
        <div className="box_home_option_pages_mobile">
          <Link to='/category/agronegocio'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img className='home_optional_category_button_image_mobile' src={agro} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_mobile'>Agronegócio</h2>
            </div>
          </Link>
          <Link to='/category/naval'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img className='home_optional_category_button_image_mobile' src={naval} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_mobile'>Naval</h2>
            </div>
          </Link>
          <Link to='/category/mineracao'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img className='home_optional_category_button_image_mobile' src={mineracao} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_mobile'>Mineração</h2>
            </div>
          </Link>
          <Link to='/category/edificacao'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img className='home_optional_category_button_image_mobile' src={construcao} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_mobile'>Edificação</h2>
            </div>
          </Link>
          <Link to='/category/siderurgia'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img className='home_optional_category_button_image_mobile' src={siderurgia} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_mobile'>Siderurgia</h2>
            </div>
          </Link>
          <Link to='/category/alimenticia'>
            <div className='home_optional_category_mobile'>
              <button className='home_optional_category_button_mobile'>
                <img className='home_optional_category_button_image_mobile' src={alimenticia} alt="" width={125} />
              </button>
              <h2 className='home_optional_category_title_mobile'>Alimentícia</h2>
            </div>
          </Link>
        </div>
        <div>
          <div className='home_accessed_mobile'>
            <BiLineChart color='var(--blue-primary)' size={30} />
            <h1 className='home_accessed_title_mobile' >Produtos mais acessados</h1>
          </div>
          <div className='home_slider_product_accessed'>
            <ProductCarousel user={user} />
          </div>
        </div>

        <div className='home_titles_mobile' >
          <div className='home_highlights_title_mobile'>
            <FaStar color='var(--white)' size={30} />
            <h1 className='home_highlights_title_text_mobile' >Destaques da semana</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductHighlightCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements_products_mobile' data-aos="fade-up" >
          <img className='home_announcements_banner_products_mobile' src={BannerAnnouncementThree} />
        </div>

        <div className='home_titles_mobile' >
          <div className='home_searched_title'>
            <div className='home_searched_aling_mobile'>
              <h1 className='home_searched_title_text_mobile' >Mais procurados</h1>
              <CgSearchFound color='var(--white)' size={40} />
            </div>
          </div>
          <div className='home_slider_product_searched'>
            <ProductSearchedCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements_products_mobile' data-aos="fade-up" >
          <img className='home_announcements_banner_products_mobile' src={BannerAnnouncementFour} />
        </div>

        <div className='home_titles_mobile' >
          <div className='home_highlights_title_mobile'>
            <MdOutlineNewReleases color='var(--white)' size={40} />
            <h1 className='home_highlights_title_text_mobile' >Novidades</h1>
          </div>
          <div className='home_slider_product_highlights'>
            <ProductNewCarousel user={user} />
          </div>
        </div>

        <div className='home_announcements_mobile' data-aos="fade-up" >
          <img className='home_announcements_banner_mobile' src={BannerAnnouncementTwo} />
        </div>

        <div className='home_announcements_mobile' data-aos="fade-up" >
          <img className='home_announcements_banner_mobile' src={BannerAnnouncementOne} />
        </div>

        <Footer /></>
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