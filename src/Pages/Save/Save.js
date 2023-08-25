//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Save.css';


import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import SaveCard from '../../Components/SaveCard/SaveCard';
import RecommendedSave from '../../Components/RecomandedProductsSave/RecommendedSave';
import weggner from '../../assets/img/weggnerSemiAcord.png';
import SaveService from '../../Service/SaveService'
import { Link } from 'react-router-dom'

//Importando os ícones
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort } from 'react-icons/bs'


function Salvos({ product }) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [productsSave, setProductsSave] = useState([]);

  useEffect(() => {
    getSave();
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSave = async () => {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const cartId = user.saves.id;
    const products = await SaveService.getSave(cartId);
    if (products) {
      setProductsSave(products);
    } else {
      setProductsSave([]);
    }
  }
  const hasProductsInSave = () => {
    if (productsSave.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }


  const renderDesktopView = () => (<>
    {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
    <div className='container_save_titles'>
      <div className='save_saved_product'>
        <div className='box_title_similar_save'>
          <BsFillBookmarkFill color='var(--white)' size={30} />
          <h1 className='save_title'>Salvos</h1>
        </div>
        {hasProductsInSave() ? (
          <>
            {productsSave.map((item, index) => (
              <div key={index}>
                <SaveCard item={item} />
              </div>
            ))}
          </>
        ) : (
          <>
            <img src={weggner} alt='' className="no_products_saved_img"></img>
            <div className='not_saved_text'>
              <h5>Ainda não há nenhum produto salvo...</h5>
              <div className='back_to_home_not_saved'>
                <BsArrowLeftShort size={15} />
                <Link to='/'> <p>Voltar para a Home</p> </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    <Footer />
  </>
  )

  const renderMobileView = () => (<>
    {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
    <WeggnerModal />
    <div className='container_save_titles'>
      <div className='save_saved_product'>
        <div className='box_title_similar_save'>
          <BsFillBookmarkFill color='var(--white)' size={30} />
          <h1 className='save_title'>Salvos</h1>
        </div>
        {hasProductsInSave() ? (
          <>
            {productsSave.map((item, index) => (
              <div key={index}>
                <SaveCard item={item} />
              </div>
            ))}
          </>
        ) : (
          <>
            <img src={weggner} alt='' className="no_products_saved_img_mobile"></img>
            <div className='not_saved_text'>
              <h5>Ainda não há nenhum produto salvo...</h5>
              <div className='back_to_home_not_saved'>
                <BsArrowLeftShort size={15} />
                <Link to='/'> <p>Voltar para a Home</p> </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    <Footer />
  </>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}


export default Salvos;