//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductNewCarousel.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
import Obj from '../ProductCardNew/ProductCardNew';

function ProductNewCarousel() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    var settings = {
        className: "center",
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: false,
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
                    slidesToShow: 2,
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

    const renderTabletView = () => (
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

    const renderMobileView = () => (
        <div className='carouselProduct_mobile' >
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

export default ProductNewCarousel