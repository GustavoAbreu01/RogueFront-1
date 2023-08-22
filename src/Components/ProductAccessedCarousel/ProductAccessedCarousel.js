//Importando o React e o CSS
import './ProductAccessedCarousel.css';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

//Importando os componentes
import ProductCardAccessed from '../ProductCardAccessed/ProductCardAccessed';
import ProductService from '../../Service/ProductService';


function ProductAccessedCarousel() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.findAll()
            .then((data) => setProducts(data))
            .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);

    var settings = {
        className: "center",
        accessibility: false,
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: false,
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
                    dots: true,
                    arrows: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    slidesToScroll: 2,
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
        <div className='container_product_accessed_carousel'>
            <Slider {...settings}>
                {products.map((product) => (
                    <div className='box_product_accessed_carousel'>
                        <ProductCardAccessed key={product.id} product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    )

    const renderTabletView = () => (
        <div className='container_product_accessed_carousel_tablet' >
            <Slider {...settings}>
                {products.map((product) => (
                    <div className='box_product_accessed_carousel'>
                        <ProductCardAccessed key={product.id} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderMobileView = () => (
        <div className='container_product_accessed_carousel_mobile' >
            <Slider {...settings}>
            {products.map((product) => (
                    <div className='box_product_accessed_carousel'>
                        <ProductCardAccessed key={product.id} product={product} />
                    </div>
                ))}
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

export default ProductAccessedCarousel