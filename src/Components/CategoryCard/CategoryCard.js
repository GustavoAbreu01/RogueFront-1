//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './CategoryCard.css'
import 'animate.css';

//importando as frameworks
import { Link } from "react-router-dom";
import swal from 'sweetalert2';

//importando as Services
import { CartService } from '../../Service/CartService'
import Swal from 'sweetalert2';
import { SaveService } from '../../Service';
import Cookies from 'js-cookie';

function CategoryCard({ product, user }) {

    const AddProductInCart = () => {
        const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
        productsInCart.push(product);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
        swal.fire({
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

    const BuyProduct = () => {
        const user = JSON.parse(localStorage.getItem('user')) || [];
        const cartId = user.cart.id;
        CartService.AddProductInCart(cartId, product.code);
        window.location.href = "/cart"
    }

    const AddProductInSave = async () => {
        const cookie = Cookies.get('Cookie');
        for (let i = 0; i < user.saves.quantity; i++) {
            if (user.saves.products[i].code === product.code) {
                Swal.fire({
                    title: 'Produto já está na lista de salvos!',
                    icon: 'error',
                    showConfirmButton: true,
                    confirmButtonText: 'Ir para a lista de salvos',
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
                        window.location.href = "/save"
                    }
                }
                )
                return;
            }
        }

        await SaveService.AddProductInSave(cookie, user.saves.id, product.code);
        Swal.fire({
            title: 'Produto adicionado a lista de salvos!',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ir para a lista de salvos',
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
                window.location.href = "/save"
            }
        }
        )
    }

    const AddProductInCompare = () => {
        const productsInCompare = JSON.parse(localStorage.getItem('productsInCompare')) || [];

        if (productsInCompare.length <= 2) {
            productsInCompare.push(product);
            localStorage.setItem('productsInCompare', JSON.stringify(productsInCompare));

            swal.fire({
                title: 'Produto adicionado a comparação!',
                icon: 'success',
                showConfirmButton: true,
                confirmButtonText: 'Ir para a tela comparação',
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
                    window.location.href = "/compare";
                }
            });
        } else {
            swal.fire({
                title: 'Produto não pode ser adicionado no carrinho',
                icon: 'warning',
                showConfirmButton: true,
                confirmButtonText: 'Ir para a tela comparação',
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
                    window.location.href = "/compare";
                }
            });
        }

    }


    const AddProductInCompareTablet = () => {
        const productsInCompare = JSON.parse(localStorage.getItem('productsInCompare')) || [];

        if (productsInCompare.length <= 1) {
            productsInCompare.push(product);
            localStorage.setItem('productsInCompare', JSON.stringify(productsInCompare));

            swal.fire({
                title: 'Produto adicionado a comparação!',
                icon: 'success',
                showConfirmButton: true,
                confirmButtonText: 'Ir para a tela comparação',
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
                    window.location.href = "/compare";
                }
            });
        } else {
            swal.fire({
                title: 'Produto não pode ser adicionado no carrinho',
                icon: 'warning',
                showConfirmButton: true,
                confirmButtonText: 'Ir para a tela comparação',
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
                    window.location.href = "/compare";
                }
            });
        }

    }
    const renderPrice = () => {
        if (product.price !== undefined) {
            const priceParts = product.price.toString().split('.');
            const integerPart = priceParts[0];
            const decimalPart = priceParts[1] || '00';
            return (
                <h2 className="category_card_product_price">
                    R$ {integerPart}
                    <sup> .{decimalPart}</sup>
                    <sub className='subtext_productPage'>10x sem juros</sub>
                </h2>
            );
        } else {
            return null;
        }
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


    const renderDesktopView = () => (
        <div className="ui segment itens container_category_card" id="itemCategory" key={product.code}>
            <Link to={`/product/${product.motors.code}`}>
                <p className="ui blue ribbon label category_card">Verificados</p>
                <div className="category_card_content" style={{ color: 'black' }}>
                    <div className="category_card_image">
                        <img src={product.image} width="125" height="" />
                    </div>
                    <div className="category_card_product_info">
                        <h3 className="category_card_product_name">{product.motors.model}</h3>
                        <h4 className="category_card_product_description">{product.motors.typeDaCarcaca}, {product.motors.protection}</h4>
                        {renderPrice()}
                    </div>
                </div>
            </Link>
            <div className='iconProductAction category_card'>
                <button onClick={() => AddProductInSave(product)} className="ui blue icon button category_card">
                    <i className="bookmark icon Category category_card"></i>
                </button>
                <button onClick={() => AddProductInCart(product)} className="ui blue icon button category_card">
                    <i className="cart plus icon category_card"></i>
                </button>
                <button onClick={() => AddProductInCompare(product)} className="ui icon button category_card_compare">
                    <i className="exchange alternate icon category_card"></i>
                </button>
            </div>
            <Link to="/cart">
                <div className='category_card_buy_button'>
                    <button className="ui fluid blue button category_card" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </Link>
        </div>
    )

    const renderTabletView = () => (
        <div className="ui segment itens container_category_card" key={product.code}>
            <Link to={`/product/${product.motors.code}`}>
                <p className="ui blue ribbon label category_card">Verificados</p>
                <div className="category_card_content" style={{ color: 'black' }}>
                    <div className="category_card_image">
                        <img src={product.image} width="125" height="" />
                    </div>
                    <div className="category_card_product_info">
                        <h3 className="category_card_product_name">{product.motors.model}</h3>
                        <h4 className="category_card_product_description">{product.motors.typeDaCarcaca}, {product.motors.protection}</h4>
                        <h2 className="category_card_product_price">{renderPrice()}<sub className='category_card_product_subtext'>10x Sem juros</sub></h2>
                    </div>
                </div>
            </Link>
            <div className='iconProductAction category_card'>
                <button onClick={() => AddProductInSave(product)} className="ui blue icon button category_card">
                    <i className="bookmark icon Category category_card"></i>
                </button>
                <button onClick={() => AddProductInCart(product)} className="ui blue icon button category_card">
                    <i className="cart plus icon category_card"></i>
                </button>
                <button onClick={() => AddProductInCompareTablet(product)} className="ui icon button category_card_compare">
                    <i className="exchange alternate icon category_card"></i>
                </button>
            </div>
            <Link to="/cart">
                <div className='category_card_buy_button'>
                    <button className="ui fluid blue button category_card" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </Link>
        </div>
    )
    const renderMobileView = () => (
        <div className="ui segment itens container_category_card_mobile" key={product.code}>
            <Link to={`/product/${product.motors.code}`}>
                <p className="ui blue ribbon label category_card_mobile">Verificados</p>
                <div className="category_card_content_mobile" style={{ color: 'black' }}>
                    <div className="category_card_image_mobile">
                        <img src={product.image} width="100" height="" />
                    </div>
                    <div className="category_card_product_info_mobile">
                        <h3 className="category_card_product_name_mobile">{product.motors.name}</h3>
                        <h2 className="category_card_product_price_mobile">{renderPrice()}</h2>
                    </div>
                </div>
            </Link>
            <div className='iconProductAction category_card_mobile'>
                <button onClick={() => AddProductInSave(product)} className="ui blue icon button category_card">
                    <i className="bookmark icon Category category_card"></i>
                </button>
                <button onClick={() => AddProductInCart(product)} className="ui blue icon button category_card">
                    <i className="cart plus icon category_card"></i>
                </button>
            </div>
            <Link to="/cart">
                <div className='category_card_buy_button_mobile'>
                    <button className="ui fluid blue button category_card_mobile" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </Link>
        </div>

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

export default CategoryCard