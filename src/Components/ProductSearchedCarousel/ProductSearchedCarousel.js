//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductSearchedCarousel.css';

//importando as frameworks
import Slider from "react-slick";

//Importando os componentes
import ProductCardSearched from '../ProductCardSearched/ProductCardSearched';
import ProductService from '../../Service/ProductService';

function ProductSearchedCarousel( { user } ) {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [productsSearched, setProductsSearched] = useState([])

    const getProductsRev = async () => {
        const products = await ProductService.findSearched();
        if (products) {
            setProductsSearched(products);
        } else {
            setProductsSearched([]);
        }
    }



    var settings = {
        className: "center",
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
        autoplay: true,
        speed: 1500,
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
        getProductsRev();
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
            {productsSearched.map((product) => (
            <div className='box_product_searched_carousel' key={product.code}>
                        <ProductCardSearched user={user} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderTabletView = () => (
        <div className='container_product_searched_carousel_tablet' >
            <Slider {...settings}>
            {productsSearched.map((product) => (
            <div className='box_product_searched_carousel' key={product.code}>
                        <ProductCardSearched user={user} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderMobileView = () => (
        <div className='container_product_searched_carousel_mobile' >
            <Slider {...settings}>
            {productsSearched.map((product) => (
            <div className='box_product_searched_carousel' key={product.code}>
                        <ProductCardSearched user={user} product={product} />
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