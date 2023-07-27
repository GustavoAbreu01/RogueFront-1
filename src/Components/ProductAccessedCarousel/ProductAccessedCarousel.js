import './ProductAccessedCarousel.css';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCardAccessed from '../ProductCardAccessed/ProductCardAccessed';
import ProductService from '../../Service/ProductService'; // Importe o serviço de produtos aqui


function ProductAccessedCarousel() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Quando o componente for montado, buscar os produtos e atualizar o estado
      ProductService.findAll()
        .then((data) => setProducts(data))
        .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);

    var settings = {
        className: "center",
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1624,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };


    return (
        <div className='container_product_accessed_carousel'>
      <Slider {...settings}>
        {products.map((categories) => (
          <ProductCardAccessed key={categories.id} categories={categories} />
        ))}
      </Slider>
    </div>
    )
}

export default ProductAccessedCarousel