import React, { useState, useEffect } from 'react'

//Importando o React e o CSS
import './ComboCard.css'

//importando as frameworks
import { Link, useParams } from 'react-router-dom'

//Importando os componentes

//Importando as imagens
import motor from '../../assets/img/motor.png'

//Importando as Services
import { ProductService } from '../../Service/ProductService';
import { CartService } from '../../Service/CartService'

function ComboCard() {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [productPage, setProductPage] = useState({});
    const { code } = useParams();

    const product = 0;

    useEffect(() => {
        searchProduct(code);
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const searchProduct = async (code) => {
        const productSearched = await ProductService.findOne(code);
        if (productSearched) {
            setProductPage(productSearched);
        } else {
            setProductPage([]);
        }
    }

    const renderPrice = () => {
        if (productPage.price !== undefined) {
            const priceParts = productPage.price.toString().split('.');
            const integerPart = priceParts[0];
            const decimalPart = priceParts[1] || '00'; // If no decimal part, default to '00'
            return (
                <h1 className="combo_card_price">
                    R$ {integerPart}
                    <sup> .{decimalPart}</sup>
                </h1>
            );
        } else {
            return null; // Handle the case where productPage.price is undefined
        }
    };

    const BuyProduct = () => {
        const user = JSON.parse(localStorage.getItem('user')) || [];
        const cartId = user.cart.id;
        CartService.AddProductInCart(cartId, product.code);
        window.location.href = "/cart"
      }

    return (
        <>
            <div className='div_combo_card'>
                <img className="image_combo_card" src={motor} />
                <h1 className="ui header combo_card">{productPage.name}</h1>
                {renderPrice()}
                <div className='combo_card_buy_button'>
                    <button className="fluid ui button combo_card_button" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default ComboCard