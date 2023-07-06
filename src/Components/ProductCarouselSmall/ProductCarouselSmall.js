import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCarouselSmall.css';
import Obj from '../../Components/SmallProductCard/SmallProductCard';

function ProductCarouselSmall() {


    var settings = {
        className: "center",
        infinite: true,
        slidesToShow: 7,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1824,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1624,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <div className='carouselProduct' >
            <Slider {...settings}>
                <div className='box'>
                    <Obj />
                </div>
                <div className='box'>
                    <Obj />
                </div>
                <div className='box'>
                    <Obj />
                </div>
                <div className='box'>
                    <Obj />
                </div>
                <div className='box'>
                    <Obj />
                </div>
                <div className='box'>
                    <Obj />
                </div>
                <div className='box'>
                    <Obj />
                </div>
            </Slider>
        </div >
    )
}

export default ProductCarouselSmall