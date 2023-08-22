//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductSearchedCarousel.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
import ProductCardSearched from '../ProductCardSearched/ProductCardSearched';
import ProductService from '../../Service/ProductService';

function ProductSearchedCarousel() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.findAll()
            .then((data) => setProducts(data))
            .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);


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
                    slidesToScroll: 1,
                    arrows: false,
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
        <div className='container_product_searched_carousel' >
            <Slider {...settings}>
            {products.map((product) => (
            <div className='box_product_searched_carousel'>
                        <ProductCardSearched key={product.id} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderTabletView = () => (
        <div className='container_product_searched_carousel_tablet' >
            <Slider {...settings}>
            {products.map((product) => (
            <div className='box_product_searched_carousel'>
                        <ProductCardSearched key={product.id} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderMobileView = () => (
        <div className='container_product_searched_carousel_mobile' >
            <Slider {...settings}>
            {products.map((product) => (
            <div className='box_product_searched_carousel'>
                        <ProductCardSearched key={product.id} product={product} />
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

export default ProductSearchedCarousel