//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Compare.css'

//Importando os componentes
import CardCompare from '../../Components/CardCompare/CardCompare'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar'
import NotFound from '../NotFound/NotFound';
import weggner from '../../assets/img/weggnerSemiAcord.png';


import { Link } from 'react-router-dom'


//Importando as imagens
import motor from "../../assets/img/motor.png"

//react-icons
import { IoMdAddCircle } from 'react-icons/io'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'
import { BsArrowLeftShort } from 'react-icons/bs'


function Compare() {
  const [productsInCompare, setItems] = useState([]);
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

  useEffect(() => {
    const productComparedList = JSON.parse(localStorage.getItem('productsInCompare'));
    if (productComparedList) {
      setItems(productComparedList);
    }
  }, []);

  function verify() {
    if (productsInCompare.length === 3) {
      return true
    } else {
      return false
    }
  }

  function verifyTablet() {
    if (productsInCompare.length === 2) {
      return true
    } else {
      return false
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

  if(productsInCompare.length === 0){
    return(
      <>{!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_compare'>
        <div className='box_title_similar_compare'>
          <FaArrowRightArrowLeft color='var(--white)' size={40} />
          <h1 className='title_similar' >Comparação de Produtos</h1>
        </div>
        <img src={weggner} alt='' className="no_products_saved_img"></img>
        <div className='not_saved_text'>
          <h5>Ainda não há nenhum produto salvo...</h5>
          <div className='back_to_home_not_saved'>
            <BsArrowLeftShort size={15} />
            <Link to='/'> <p>Voltar para a Home</p> </Link>
          </div>

        </div>
        <div className='box_title_similar_recommended'>
          <FaStar color='var(--white)' size={40} />
          <h1 className='title_similar' >Produtos Recomendados</h1>
        </div>
        <div className='box_carousel_similar_recommended'>
          <ProductCarouselSmallSimilar />
        </div>
      </div>
      <Footer />
      </>
    )
}

  function addMoreProducts() {
    const product =
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
    const newProductsCompared = [...productsInCompare, product];
    setItems(newProductsCompared);
    localStorage.setItem('productsInCompare', JSON.stringify(newProductsCompared));
    console.log(newProductsCompared)
  }

  const renderDesktopView = () => (
    <>{!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_compare'>
        <div className='box_title_similar_compare'>
          <FaArrowRightArrowLeft color='var(--white)' size={40} />
          <h1 className='title_similar' >Comparação de Produtos</h1>
        </div>
        <div className='products'>
          <CardCompare />
          {!verify() && <div className='add_product_icon' onClick={() => addMoreProducts()}>
            <IoMdAddCircle size={'5rem'} />
          </div>}
        </div>
        <div className='box_title_similar_recommended'>
          <FaStar color='var(--white)' size={40} />
          <h1 className='title_similar' >Produtos Recomendados</h1>
        </div>
        <div className='box_carousel_similar_recommended'>
          <ProductCarouselSmallSimilar />
        </div>
      </div>
      <Footer />
    </>
  )

  const renderTabletView = () => (
    <>{!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_compare'>
        <div className='box_title_similar_compare'>
          <FaArrowRightArrowLeft color='var(--white)' size={40} />
          <h1 className='title_similar' >Comparação de Produtos</h1>
        </div>
        <div className='products'>
          <CardCompare />
          {!verifyTablet() && <div className='add_product_icon_tablet' onClick={() => addMoreProducts()}>
            <IoMdAddCircle size={'5rem'} />
          </div>}
        </div>
      </div>
      <Footer />
    </>
  )
  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    }
  }

  return <>{getViewToRender()}</>;

}

export default Compare