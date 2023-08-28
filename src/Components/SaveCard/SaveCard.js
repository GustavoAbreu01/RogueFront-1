//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './SaveCard.css'

//importando as frameworks
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

//importando as imagens
import motors from "../../assets/img/motores.png"

import { CartService } from '../../Service/CartService'


function SaveCard({ item }) {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        console.log(item)
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const AddProductInCart = () => {
        const user = JSON.parse(localStorage.getItem('user')) || [];
        const cartId = user.cart.id;
        CartService.AddProductInCart(cartId, item.code);
        Swal.fire({
            title: 'Produto adicionado a carrinho!',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ir para o carrinho',
            confirmButtonColor: 'var(--blue-primary)',
            position: 'top-end',
            timer: 5000,
            timerProgressBar: true,
            toast: true,
            width: 400,
            showClass: {
                popup: 'animate__animated animate__backInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/cart"
            }
        }
        )
    }
    
    const deleteItens = (item) => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
        const index = savedProducts.findIndex(item => item.id === item.id);
        if (index !== -1) {
            savedProducts.splice(index, 1);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            // You might also want to update the component state to reflect the change
        }
        window.location.reload();
    };

    const BuyProduct = () => {
        const user = JSON.parse(localStorage.getItem('user')) || [];
        const cartId = user.cart.id;
        CartService.AddProductInCart(cartId, item.product.code);
        window.location.href = "/cart"
    }

    const renderPrice = () => {
        if (item.price !== undefined) {
            const priceParts = item.price.toString().split('.');
            const integerPart = priceParts[0];
            const decimalPart = priceParts[1] || '00'; // If no decimal part, default to '00'
            return (
                <h1 className="save_card_product_price">
                    R$ {integerPart}
                    <sup> .{decimalPart}</sup>
                    <sub className='save_card_product_subtext'>10x sem juros</sub>
                </h1>
            );
        } else {
            return null; // Handle the case where productPage.price is undefined
        }
    };

    const renderDesktopView = () => (
        <>
            <div className="save_products" >
                <div className="ui segment itens save_card" id="itemCategory">
                    <Link to="/product">
                        <div className="box_save_card_product_info" style={{ color: 'black' }}>
                            <div className="save_card_image">
                                <img src={item.image} width="125" height="" />
                            </div>
                            <div className="save_card_product_info">
                                <h3 className="save_card_product_name">{item.name}</h3>
                                <h4 className="save_card_product_description">{item.description}</h4>
                                {renderPrice()}
                            </div>
                        </div>
                    </Link>
                    <div className='iconProductAction save_card'>
                        <button
                            className="ui blue icon button save_card"
                            onClick={() => deleteItens(item)}>
                            <i className="trash alternate icon save_card" ></i>
                        </button>

                        <button onClick={() => AddProductInCart(item)} className="ui blue icon button save_card">
                            <i className="cart plus icon save_card"></i>
                        </button>
                    </div>
                    <div className='save_card_buy_button'>
                        <Link to='/cart'>
                            <button className="ui fluid blue button save_card" onClick={() => BuyProduct(item)}>Comprar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
    const renderMobileView = () => (
        <div className="save_products_mobile" >
            <div className="ui segment itens save_card_mobile" id="itemCategory">
                <Link to="/product">
                    <div className="box_save_card_product_info_mobile" style={{ color: 'black' }}>
                        <div className="save_card_image_mobile">
                            <img src={item.image} width="100" height="" />
                        </div>
                        <div className="save_card_product_info_mobile">
                            <h3 className="save_card_product_name_mobile">W12 Monofásico</h3>
                            <h2 className="save_card_product_price_mobile">R$ 495<sup> 99</sup><sub className='save_card_product_subtext'>10x Sem juros</sub></h2>
                        </div>
                    </div>
                </Link>
                <div className='iconProductAction save_card_mobile'>
                    <button
                        className="ui blue icon button save_card_mobile"
                        onClick={() => deleteItens(item)}>
                        <i className="trash alternate icon save_card_mobile" ></i>
                    </button>
                    <button onClick={() => AddProductInCart(item)} className="ui blue icon button save_card_mobile">
                        <i className="cart plus icon save_card_mobile"></i>
                    </button>
                </div>
                <div className='save_card_buy_button_mobile'>
                    <Link to='/cart'>
                        <button className="ui fluid blue button save_card_mobile"  onClick={() => BuyProduct(item)}>Comprar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
            // } else if (screenSize.width < 900 && screenSize.width > 500) {
            //   return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;
};
export default SaveCard