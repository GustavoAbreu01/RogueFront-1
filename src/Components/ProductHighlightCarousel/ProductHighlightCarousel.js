import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductHighlightCarousel.css';
import ProductCardHighlight from '../ProductCardHighlight/ProductCardHighlight';

function ProductHighlightCarousel() {


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
        <div className='container_product_hightlight_carousel' >
            <Slider {...settings}>
                <div className='box_product_hightlight_carousel'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel'>
                    <ProductCardHighlight />
                </div>
                <div className='box'>
                    <ProductCardHighlight />
                </div>
                <div className='box'>
                    <ProductCardHighlight />
                </div>
            </Slider>
        </div >
    )
}

export default ProductHighlightCarousel