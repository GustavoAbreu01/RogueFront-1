import React, { useState } from 'react'
import './ProductCarouselSmallSimilar.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCardSmaller from '../ProductCardSmaller/ProductCardSmaller';

function ProductCarouselSmallSimilar() {


    var settings = {
        className: "center",
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1624,
                settings: {
                    slidesToShow: 5,
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
        <div className='product_similar_carousel' >
            <Slider {...settings}>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
                <div className='box_product_similar_carousel'>
                    <ProductCardSmaller />
                </div>
            </Slider>
        </div >
    )
}

export default ProductCarouselSmallSimilar