//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './BannerCarousell.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importando as frameworks
import Carousel from 'react-bootstrap/Carousel';

//Importando as imagens
import Banner1 from '../../assets/img/Banner1.jpg';
import Banner3 from '../../assets/img/Banner2.jpg';



function BannerCarousell() {

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
    <Carousel variant="light" className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

  const renderTabletView = () => (
    <Carousel variant="light" className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

  const renderMobileView = () => (
    <Carousel variant="light" className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100 mobile"
          src={Banner1}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mobile"
          src={Banner3}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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

export default BannerCarousell;