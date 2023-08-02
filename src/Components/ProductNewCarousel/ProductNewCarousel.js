//Importando o React e o CSS
import React from 'react'
import './ProductNewCarousel.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
import Obj from '../ProductCardNew/ProductCardNew';

function ProductNewCarousel() {


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

export default ProductNewCarousel