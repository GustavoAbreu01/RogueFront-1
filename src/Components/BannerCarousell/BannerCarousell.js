//Importando o React e o CSS
import React from 'react'
import './BannerCarousell.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importando as frameworks
import Carousel from 'react-bootstrap/Carousel';

//Importando as imagens
import Banner1 from '../../assets/img/Banner1.jpg';
import Banner3 from '../../assets/img/Banner2.jpg';



function BannerCarousell() {
  return (
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
  );
}

export default BannerCarousell;