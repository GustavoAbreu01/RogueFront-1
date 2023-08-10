//Importando o React e o CSS
import React from 'react'
import './ProductCarouselSmallSimilar.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
import ProductCardSmaller from '../ProductCardSmaller/ProductCardSmaller';

function ProductCarouselSmallSimilar() {


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