//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './CategoryCard.css'
import 'animate.css';

//importando as frameworks
import { Link } from "react-router-dom";
import swal from 'sweetalert2';

//Importando as imagens
import motors from "../../assets/img/motores.png"



function CategoryCard(product) {

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


    const AddProductInSave = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
        savedProducts.push(product);
        localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
        swal.fire({
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


const renderDesktopView = (product) => (
    <div className="ui segment itens container_category_card" id="itemCategory">
        <Link to="/product">
            <p className="ui blue ribbon label category_card">Verificados</p>
            <div className="category_card_content" style={{ color: 'black' }}>
                <div className="category_card_image">
                    <img src={motors} width="125" height="" />
                </div>
                <div className="category_card_product_info">
                    <h3 className="category_card_product_name">W12 Monofásico</h3>
                    <h4 className="category_card_product_description">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                    <h2 className="category_card_product_price">R$ 495<sup> 99</sup><sub className='category_card_product_subtext'>10x Sem juros</sub></h2>
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
                <button className="ui fluid blue button category_card">Comprar</button>
            </div>
        </Link>
    </div>
)

const renderTabletView = (product) => (
    <div className="ui segment itens container_category_card" id="itemCategory">
        <Link to="/product">
            <p className="ui blue ribbon label category_card">Verificados</p>
            <div className="category_card_content" style={{ color: 'black' }}>
                <div className="category_card_image">
                    <img src={motors} width="125" height="" />
                </div>
                <div className="category_card_product_info">
                    <h3 className="category_card_product_name">W12 Monofásico</h3>
                    <h4 className="category_card_product_description">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                    <h2 className="category_card_product_price">R$ 495<sup> 99</sup><sub className='category_card_product_subtext'>10x Sem juros</sub></h2>
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
                <button className="ui fluid blue button category_card">Comprar</button>
            </div>
        </Link>
    </div>
)
const renderMobileView = (product) => (
    <div className="ui segment itens container_category_card_mobile" id="itemCategory">
        <Link to="/product">
            <p className="ui blue ribbon label category_card_mobile">Verificados</p>
            <div className="category_card_content_mobile" style={{ color: 'black' }}>
                <div className="category_card_image_mobile">
                    <img src={motors} width="100" height="" />
                </div>
                <div className="category_card_product_info_mobile">
                    <h3 className="category_card_product_name_mobile">W12 Monofásico</h3>
                    <h2 className="category_card_product_price_mobile">R$ 495<sup> 99</sup><sub className='category_card_product_subtext_mobile'>10x Sem juros</sub></h2>
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
            <button onClick={AddProductInCompare} className="ui icon button category_card_compare">
                <i className="exchange alternate icon category_card"></i>
            </button>
        </div>
        <Link to="/cart">
            <div className='category_card_buy_button_mobile'>
                <button className="ui fluid blue button category_card_mobile">Comprar</button>
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