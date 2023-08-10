//Importando o React e o CSS
import React from 'react'
import './ProductHighlightCarousel.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
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
            </Slider>
        </div >
    )
}

export default ProductHighlightCarousel