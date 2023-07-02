import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Banner1 from '../../assets/img/Banner1.jpg';
import Banner3 from '../../assets/img/Banner2.jpg';
import './Carousel.css';

function Carousell() {
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

export default Carousell;