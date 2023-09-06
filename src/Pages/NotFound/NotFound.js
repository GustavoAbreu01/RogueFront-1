//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './NotFound.css'

// importando framework
import { Link } from 'react-router-dom'

// importando imagens
import weggner from "../../assets/img/NotFoundWeggner.gif"

// importando icones
import { BsArrowLeftShort } from 'react-icons/bs'

function NotFound() {

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
    <>
      <div className='container_not_found'>
        <img src={weggner} alt="weggner" className="not_found_img" />
        <h2 className="not_found_title">Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi removida.</p>
        <div className='not_found_text'>
          <BsArrowLeftShort size={15} />
          <Link to='/'> <p>Voltar para a Home</p> </Link>
        </div>
      </div>
    </>
  )

  const renderTabletView = () => (
    <>
      <div className='container_not_found_mobile'>
        <img src={weggner} alt="weggner" className="not_found_img_tablet" />
        <h2 className="not_found_title_tablet">Página não encontrada</h2>
        <p className='not_found_text__detail_tablet'>A página que você está procurando não existe ou foi removida.</p>
        <div className='not_found_text_tablet'>
          <BsArrowLeftShort size={15} />
          <Link to='/'> <p>Voltar para a Home</p> </Link>
        </div>
      </div>
    </>
  )

  const renderMobileView = () => (
    <>
      <div className='container_not_found_mobile'>
        <img src={weggner} alt="weggner" className="not_found_img_mobile" />
        <h2 className="not_found_title">Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi removida.</p>
        <div className='not_found_text'>
          <BsArrowLeftShort size={15} />
          <Link to='/'> <p>Voltar para a Home</p> </Link>
        </div>
      </div>
    </>
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

export default NotFound