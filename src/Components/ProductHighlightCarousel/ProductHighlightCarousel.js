//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductHighlightCarousel.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
import ProductCardHighlight from '../ProductCardHighlight/ProductCardHighlight';

function ProductHighlightCarousel() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    slidesToScroll: 1
                }
            }
        ],
    };

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderDesktopView = () => (
        < div className='container_product_hightlight_carousel_tablet' >
            <Slider {...settings}>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
                <div className='box_product_hightlight_carousel_tablet'>
                    <ProductCardHighlight />
                </div>
            </Slider>
        </div >
    )

    const renderTabletView = () => (
        < div className='container_product_hightlight_carousel_tablet' >
            <Slider {...settings}>
                <div className='box_product_accessed_hightlight_tablet'>
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

    const renderMobileView = () => (
        < div className='container_product_hightlight_carousel_mobile' >
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

    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;

}
export default ProductHighlightCarousel