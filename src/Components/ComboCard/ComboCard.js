import React, { useState, useEffect } from 'react'

//Importando o React e o CSS
import './ComboCard.css'

//importando as frameworks
import { Link, useParams } from 'react-router-dom'

//Importando os componentes

//Importando as icones
import { FaPlus, FaCartArrowDown, FaEquals } from 'react-icons/fa'

//Importando as Services
import { ProductService } from '../../Service/ProductService';

function ComboCard({ product }) {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [productPage, setProductPage] = useState([]);
    const getRandom = Math.floor(Math.random() * 10);

    const { code } = useParams();

    useEffect(() => {
        searchProduct();
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const searchProduct = async () => {
        const productSearched = await ProductService.findAll();
        if (productSearched) {
            setProductPage(productSearched);
        } else {
            setProductPage([]);
        }
    }

    const renderModel = (product) => {
        if (product.motors.model.length > 17) {
            return product.motors.model.slice(0, 17) + '...';
        } else {
            return product.motors.model;
        }
    }

    const sumPrices = () => {
        let sum = productPage[getRandom].price + product.price;
        let newDecimal = 0;
        const priceParts = sum.toString().split('.');
        const integerPart = priceParts[0];
        const decimalPart = priceParts[1] || '00';
        if (decimalPart.length > 2) {
            newDecimal = decimalPart.slice(0, 2);
        }
        return (
            <h1 className="combo_card_sum_price">
                R$ {integerPart}
                <sup> .{newDecimal}</sup>
            </h1>
        );
    };

    const renderPrice = (product) => {
        if (product.price !== undefined) {
            const priceParts = product.price.toString().split('.');
            const integerPart = priceParts[0];
            const decimalPart = priceParts[1] || '00';
            if (decimalPart.length > 2) {
                decimalPart.slice(0, 2);
            }
            return (
                <h1 className="combo_card_price">
                    R$ {integerPart}
                    <sup> .{decimalPart}</sup>
                </h1>
            );
        } else {
            return null;
        }
    };

    const Reload = () => {
        setTimeout(() => {
            window.location.reload()
        },1000)
    }

    const BuyProduct = () => {
    }

    

    return (
        <>
            <div className='div_combo_card'>
                {productPage[getRandom] && (
                    <>
                        <div className='div_product_page_recomendation'>
                            <p className="ui blue ribbon label combo_product_page">Frequentemente comprado juntos</p>
                            <div className='container_product_page_recomendation'>
                                <div className='box_product_page_combo_card'>
                                    <img className="image_combo_card" src={product.image} />
                                    <h1 className="ui header combo_card">{renderModel(product)}</h1>
                                    {renderPrice(product)}
                                    <div className='combo_card_buy_button'>
                                        <button className="fluid ui button combo_card_button" onClick={() => BuyProduct()}>Comprar</button>
                                    </div>
                                </div>
                                <FaPlus color='var(--blue-primary)' fontSize={50} />
                                <Link to={`/product/${productPage[getRandom].code}`}>
                                    <div className='box_product_page_combo_card' onClick={Reload}>
                                        <img className="image_combo_card" src={productPage[getRandom].image} />
                                        <h1 className="ui header combo_card">{renderModel(productPage[getRandom])}</h1>
                                        {renderPrice(productPage[getRandom])}
                                        <div className='combo_card_buy_button'>
                                            <button className="fluid ui button combo_card_button" onClick={() => BuyProduct()}>Comprar</button>
                                        </div>
                                    </div>
                                </Link>
                                <FaEquals color='var(--blue-primary)' fontSize={40} />
                                <div className='final_price_produc_page_combo'>
                                    <h1 className='total_combo_product_page'>Total do combo</h1>
                                    <FaCartArrowDown className='icon_combo' />
                                    {sumPrices()}
                                    <div className='product_page_combo_buy_button'>
                                        <button className="fluid ui button product_page_combo_button" onClick={() => BuyProduct()}>Comprar Combo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ComboCard