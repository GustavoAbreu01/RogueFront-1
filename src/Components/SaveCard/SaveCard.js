//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './SaveCard.css'

//importando as frameworks
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

//importando as imagens
import motors from "../../assets/img/motores.png"


function SaveCard({ item }, product) {

    const [isOpen, setIsOpen] = useState(false);

    const AddProductInCart = () => {
        const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
        productsInCart.push(product);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
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
        const index = savedProducts.findIndex(product => product.id === item.id);
        if (index !== -1) {
            savedProducts.splice(index, 1);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            // You might also want to update the component state to reflect the change
        }
        window.location.reload();
    };



    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

    const buttonComprar = () => {
        const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
        productsInCart.push(product);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
    }


    const renderDesktopView = () => (
        <>
            <div className="save_products" >
                <div className="ui segment itens save_card" id="itemCategory">
                    <Link to="/product">
                        <div className="box_save_card_product_info" style={{ color: 'black' }}>
                            <div className="save_card_image">
                                <img src={motors} width="125" height="" />
                            </div>
                            <div className="save_card_product_info">
                                <h3 className="save_card_product_name">W12 Monofásico</h3>
                                <h4 className="save_card_product_description">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                                <h2 className="save_card_product_price">R$ 495<sup> 99</sup><sub className='save_card_product_subtext'>10x Sem juros</sub></h2>
                            </div>
                        </div>
                    </Link>
                    <div className='iconProductAction save_card'>
                        <button
                            className="ui blue icon button save_card"
                            onClick={() => deleteItens(item)}>
                            <i className="trash alternate icon save_card" ></i>
                        </button>

                        <button onClick={() => AddProductInCart(product)} className="ui blue icon button save_card">
                            <i className="cart plus icon save_card"></i>
                        </button>
                    </div>
                    <div className='save_card_buy_button'>
                        <Link to='/cart'>
                            <button className="ui fluid blue button save_card" onClick={buttonComprar}>Comprar</button>
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
                            <img src={motors} width="100" height="" />
                        </div>
                        <div className="save_card_product_info_mobile">
                            <h3 className="save_card_product_name_mobile">W12 Monofásico</h3>
                            <h2 className="save_card_product_price_mobile">R$ 495<sup> 99</sup><sub className='save_card_product_subtext'>10x Sem juros</sub></h2>
                        </div>
                    </div>
                </Link>
                <div className='iconProductAction save_card_mobile'>
                    <button
                        className="ui blue icon button save_card"
                        onClick={() => deleteItens(item)}>
                        <i className="trash alternate icon save_card" ></i>
                    </button>
                    <button onClick={() => AddProductInCart(product)} className="ui blue icon button save_card_mobile">
                        <i className="cart plus icon save_card_mobile"></i>
                    </button>
                </div>
                <div className='save_card_buy_button_mobile'>
                    <Link to='/cart'>
                        <button className="ui fluid blue button save_card_mobile" onClick={buttonComprar}>Comprar</button>
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