//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCardSmaller.css'

//importando as frameworks
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//Importando as imagens
import motor from '../../assets/img/motor.png'



function SmallProductCard(product) {

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

    const AddProductInSave = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
        savedProducts.push(product);
        localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
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
    
            Swal.fire({
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
            Swal.fire({
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
    
            Swal.fire({
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
            Swal.fire({
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


    const renderDesktopView = ({product}) => (
        <div className="product_acessed" key={product.id}>
        <div className='container_product_card_smaller'>
            <div className='container_product_card_smaller_action_icon'>
                <div className='product_card_small_button_compare'>
                    <button onClick={() => AddProductInCompare(product)} className="ui icon button product_card_smaller_compare">
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
                    <img src={motor} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                </div>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>{product.name}</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ {product.price}</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <Link to='/cart'>
                    <div className='box_product_card_smaller_button'>
                        <button className="fluid ui button product_card_smaller">Comprar</button>
                    </div>
                </Link>
            </Link >
            </div>
        </div>
    )
    const renderTabletView = ({product}) => (
        <div className="product_acessed" key={product.id}>
        <div className='container_product_card_smaller'>
            <div className='container_product_card_smaller_action_icon'>
                <div className='product_card_small_button_compare'>
                    <button onClick={() => AddProductInCompareTablet(product)} className="ui icon button product_card_smaller_compare">
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
                    <img src={motor} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                </div>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>{product.name}</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ {product.price}</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <Link to='/cart'>
                    <div className='box_product_card_smaller_button'>
                        <button className="fluid ui button product_card_smaller">Comprar</button>
                    </div>
                </Link>
            </Link >
        </div>
        </div>
    )
    const renderMobileView = ({product}) => (
        <div className="product_acessed" key={product.id}>
        <div className='container_product_card_smaller_mobile'>
            <div className='container_product_card_smaller_mobile_action_icon'>
                <div className='product_card_small_button_compare'>
                    <button onClick={AddProductInCompare} className="mini ui icon button product_card_smaller_compare">
                        <i className="exchange alternate icon"></i>
                    </button>
                </div>
                <button onClick={() => AddProductInSave(product)} className="mini ui icon button product_card_smaller_mobile">
                    <i className="bookmark icon "></i>
                </button>
                <button onClick={() => AddProductInCart(product)} className="mini ui icon button product_card_smaller_mobile">
                    <i className="cart plus icon"></i>
                </button>
            </div>
            <Link to='/product'>
                <div className='box_product_card_smaller_image'>
                    <img src={motor} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                </div>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>{product.name}</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ {product.price}</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <Link to='/cart'>
                    <div className='box_product_card_smaller_button'>
                        <button className="small ui button buy_product_card_smaller_mobile">Comprar</button>
                    </div>
                </Link>
            </Link >
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