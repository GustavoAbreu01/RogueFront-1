import './ProductAccessedCarousel.css';
import React, { useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCardAccessed from '../ProductCardAccessed/ProductCardAccessed';

function ProductAccessedCarousel() {


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
        <div className='container_product_accessed_carousel' >
            <Slider {...settings}>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
                <div className='box_product_accessed_carousel'>
                    <ProductCardAccessed />
                </div>
            </Slider>
        </div >
    )
}

export default ProductAccessedCarousel