//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCardSmaller.css'

//importando as frameworks
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//importando service
import { CartService } from '../../Service/CartService'
import Cookies from 'js-cookie'
import { SaveService } from '../../Service'

function SmallProductCard({ product, user }) {

    const renderModel = () => {
        if (product.model.length > 25) {
            return product.model.substring(0, 25) + '...';
        } else {
            return product.model;
        }
    }

    const AddProductInCart = async () => {
        const cookie = Cookies.get('Cookie');
        if (cookie) {
            for (let i = 0; i < user.cart.size; i++) {
                if (user.cart.products[i].product.code === product.code) {
                    Swal.fire({
                        title: 'Produto já está no seu carrinho!',
                        icon: 'error',
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
                    return;
                }
            }

            await CartService.AddProductInCart(cookie, user.saves.id, product.code, 1);
            Swal.fire({
                title: 'Produto adicionado ao carrinho!',
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
        } else {
            Swal.fire({
                title: 'Para adicionar o produto ao carrinho é necessário fazer o login',
                icon: 'error',
                showConfirmButton: true,
                confirmButtonText: 'Ir para o Login',
                position: 'top-end',
                timer: 5000,
                timerProgressBar: true,
                background: 'var(--red)',
                toast: true,
                width: 400,
                color: 'var(--white)',
                confirmButtonColor: 'var(--dark-red)',
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/login"
                }
            }
            )
        }

    }

    const BuyProduct = async () => {
        const cookie = Cookies.get('Cookie');
        if (cookie) {
            await CartService.AddProductInCart(cookie, user.saves.id, product.code, 1);
            setTimeout(() => {
                window.location.href = "/cart"
            }, 200);
        } else {
            Swal.fire({
                title: 'Redirecionando para tela de login',
                icon: 'error',
                showConfirmButton: false,
                position: 'top-end',
                timer: 2000,
                timerProgressBar: true,
                background: 'var(--red)',
                toast: true,
                width: 400,
                color: 'var(--white)',
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            })
            setTimeout(() => {
                window.location.href = "/login"
            }, 2000);
        }
    }

    const AddProductInSave = async () => {
        const cookie = Cookies.get('Cookie');
        if (cookie) {
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
        } else {
            Swal.fire({
                title: 'Para adicionar o produto ao salvos é necessário fazer o login',
                icon: 'error',
                showConfirmButton: true,
                confirmButtonText: 'Ir para o Login',
                position: 'top-end',
                timer: 5000,
                timerProgressBar: true,
                background: 'var(--red)',
                toast: true,
                width: 400,
                color: 'var(--white)',
                confirmButtonColor: 'var(--dark-red)',
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/login"
                }
            }
            )
        }
    }

    const reload = () => {
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

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
        <div className="product_acessed" key={product.code} >
            <div className='container_product_card_smaller'>
                <div className='container_product_card_smaller_action_icon'>
                    <div className='product_card_small_button_compare'>
                        <button className="ui icon button product_card_smaller_compare">
                            <i className="exchange alternate icon"></i>
                        </button>
                    </div>
                    <button onClick={() => AddProductInSave(product)} className="ui icon button product_card_smaller">
                        <i className="bookmark icon "></i>
                    </button>
                    <button onClick={() => AddProductInCart(product)} className="ui icon button product_card_smaller">
                        <i className="cart plus icon"></i>
                    </button>
                </div>
                <Link to={`/product/${product.code}`} onClick={reload}>
                    <div className='box_product_card_smaller_image'>
                        <img src={product.image} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                    </div>
                </Link>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>{renderModel()}</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ {product.price}</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <div className='box_product_card_smaller_button'>
                    <button className="fluid ui button product_card_smaller" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </div>
        </div>
    )
    const renderTabletView = () => (
        <div className="product_acessed" key={product.id}>
            <div className='container_product_card_smaller'>
                <div className='container_product_card_smaller_action_icon'>
                    <div className='product_card_small_button_compare'>
                        <button className="ui icon button product_card_smaller_compare">
                            <i className="exchange alternate icon"></i>
                        </button>
                    </div>
                    <button onClick={() => AddProductInSave(product)} className="ui icon button product_card_smaller">
                        <i className="bookmark icon "></i>
                    </button>
                    <button onClick={() => AddProductInCart(product)} className="ui icon button product_card_smaller">
                        <i className="cart plus icon"></i>
                    </button>
                </div>
                <Link to='/product'>
                    <div className='box_product_card_smaller_image'>
                        <img src={product.image} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                    </div>
                </Link>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>{renderModel()}</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ {product.motors.price}</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <div className='box_product_card_smaller_button'>
                    <button className="fluid ui button product_card_smaller" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </div>
        </div>
    )
    const renderMobileView = () => (
        <div className="product_acessed" key={product.id}>
            <div className='container_product_card_smaller_mobile'>
                <div className='container_product_card_smaller_mobile_action_icon'>
                    <button onClick={() => AddProductInSave(product)} className="mini ui icon button product_card_smaller_mobile">
                        <i className="bookmark icon "></i>
                    </button>
                    <button onClick={() => AddProductInCart(product)} className="mini ui icon button product_card_smaller_mobile">
                        <i className="cart plus icon"></i>
                    </button>
                </div>
                <Link to='/product'>
                    <div className='box_product_card_smaller_image'>
                        <img src={product.image} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                    </div>
                </Link>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 title={product.model} className='product_card_smaller_title'>{product.model}</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ {product.motors.price}</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <div className='box_product_card_smaller_button'>
                    <button className="small ui button buy_product_card_smaller_mobile" onClick={() => BuyProduct(product)}>Comprar</button>
                </div>
            </div>
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

export default SmallProductCard