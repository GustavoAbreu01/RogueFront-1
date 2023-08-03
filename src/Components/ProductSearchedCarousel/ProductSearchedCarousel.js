import React, { useState, useEffect } from 'react';
import './ProductSearchedCarousel.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ProductCardSearched from '../ProductCardSearched/ProductCardSearched';
import ProductService from '../../Service/ProductService';

function ProductSearchedCarousel() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
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
        <div className='container_product_searched_carousel' >
            <Slider {...settings}>
            {products.map((product) => (
            <div className='box_product_searched_carousel'>
                        <ProductCardSearched key={product.id} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )
}

export default ProductSearchedCarousel