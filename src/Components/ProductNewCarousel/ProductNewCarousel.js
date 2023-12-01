//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductNewCarousel.css';

//importando as frameworks
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importando os componentes
import ProductCardNew from '../ProductCardNew/ProductCardNew';
import ProductService from '../../Service/ProductService';

function ProductNewCarousel( { user } ) {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [productsNew, setProductsNew] = useState([])

    const getProductsRev = async () => {
        const products = await ProductService.findNew();
        if (products) {
            setProductsNew(products);
        } else {
            setProductsNew([]);
        }
    }


    var settings = {
        className: "center",
        infinite: true,
        slidesToShow: 4,
        swipeToSlide: true,
        autoplay: true,
        speed: 5000,
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
                    arrows: false,
                    dots: true,
                    slidesToScroll: 2,
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
        <div className='container_product_new_carousel' >
            <Slider {...settings}>
            {productsNew.map((product) => (
                    <div className='box_product_new_carousel' key={product.code}>
                        <ProductCardNew user={user} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderTabletView = () => (
        <div className='carouselProduct_tablet' >
            <Slider {...settings}>
            {productsNew.map((product) => (
                    <div className='box_product_new_carousel' key={product.code}>
                        <ProductCardNew user={user} product={product} />
                    </div>
                ))}
            </Slider>
        </div >
    )

    const renderMobileView = () => (
        <div className='carouselProduct_mobile' >
            <Slider {...settings}>
            {productsNew.map((product) => (
                    <div className='box_product_new_carousel' key={product.code}>
                        <ProductCardNew user={user} product={product} />
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

export default ProductNewCarousel