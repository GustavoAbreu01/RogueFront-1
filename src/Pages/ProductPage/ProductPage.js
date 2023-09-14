//Importando o React e o CSS
import React, { useState, useEffect } from 'react'
import './ProductPage.css'

//importando as frameworks
import { Rating } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

//Importando os componentes
import Carousel from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';
import ProductTable from './ProductTable/ProductTable';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'

//Importando as imagens
import motor from '../../assets/img/motor.png'

//Importando os ícones
import { FaStar } from 'react-icons/fa'
import { ProductService } from '../../Service';

const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
        return true
    } else {
        return false
    }
}

function ProductPage() {
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

    const buttonComprar = () => {
        const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
        productsInCart.push(product);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
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

    const renderPrice = () => {
        if (productPage.price !== undefined) {
            const priceParts = productPage.price.toString().split('.');
            const integerPart = priceParts[0];
            const decimalPart = priceParts[1] || '00';
            return (
                <h1 className="price_product_page">
                    R$ {integerPart}
                    <sup> .{decimalPart}</sup>
                    <sub className='subtext_productPage'>10x sem juros</sub>
                </h1>
            );
        } else {
            return null;
        }
    };

    const renderDesktopView = () => (
        <>
            {!verify() ? <Header /> : <HeaderLogin />}
            <WeggnerModal />
            <div className="ui items product_page" >
                <p className="ui blue ribbon label">{productPage.categories}</p>
                <div className="ui item product_page">
                    <div className="img_product_page">
                        <img className="image_product" src={motor} />
                    </div>
                    <div className="content product_page">
                        <h1 className="ui header product_page">{productPage.name}</h1>
                        <br />
                        <Rating className="ui rating product_page" maxRating={5} style={{ marginTop: '1rem' }} />
                        {renderPrice()}
                        <div className="meta">
                            <span>Descrição</span>
                        </div>
                        <div className="description product_page">
                            <p>{productPage.description}</p>
                        </div>
                        <div className='buttons_product_page'>
                            <Link to={"/cart"}>
                                <button className="ui fluid button sell_product_page" onClick={buttonComprar}>
                                    Comprar Agora
                                </button>
                            </Link>
                            <div className='buttons_product_page_opc_add'>
                                <div>
                                    <button onClick={() => AddProductInCart(product)} className="ui fluid button cart_product_page">
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => AddProductInCompare(product)} className="ui fluid icon button cart_product_compare">
                                        <i className="exchange icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="ui header about_product_page">Sobre o Produto</h2>
                    <h3 className="ui header app_product_page"> Aplicações</h3>
                    <p>{productPage.application}</p>
                    <h3 className="ui header charac_product_page"> Características</h3>
                    <p>{productPage.caracteristics}</p>
                    <h3 className="ui header gl_charac_product_page"> Características Gerais</h3>
                    <ProductTable product={productPage} />
                    <h3 className="ui header optionals_product_page"> Opcionais</h3>
                    <p>{productPage.optional}</p>
                </div>
            </div>
            <div className='box_product_page_title_similar'>
                <i class="magic icon" color='var(--white)'></i>
                <h1>Produtos Semelhantes</h1>
            </div>
            <div className='box_product_page_carousel_similar'>
                <Carousel />
            </div>
            <div className='box_product_page_title_highlights'>
                <FaStar color='var(--white)' size={40} />
                <h1>Produtos Destaques</h1>
            </div>
            <div className='box_product_page_carousel_highlights'>
                <Carousel />
            </div>
            <Footer />
        </>
    )
    const renderMobileView = () => (
        <>
            {!verify() ? <Header /> : <HeaderLogin />}
            <WeggnerModal />
            <div className="ui items product_page_mobile" >
                <div className="ui item product_page_mobile">
                    <div className="img_product_page_mobile">
                        <img className="image_product_mobile" src={motor} />
                    </div>
                    <div className="content product_page_mobile">
                        <div className='title_price_product_page_mobile'>
                            <h1 className="ui header product_page_mobile">Motor W30</h1>
                            <h1 className="price_product_page_mobile">{renderPrice()}</h1>
                        </div>
                        <br />
                        <Rating className="ui rating product_page_mobile" maxRating={5} style={{ marginTop: '1rem' }} />
                        <div className='box_description_product_page'>
                            <div className="meta">
                                <span>Descrição</span>
                            </div>
                            <div className="description product_page_mobile">
                                <p className='description product_page_mobile_p'>Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações com o máximo desempenho e economia. Opcionalmente pode ser fornecido com capacitor de partida e eixo e flange conforme norma NEMA.</p>
                            </div>
                        </div>
                        <div className='buttons_product_page_mobile'>
                            <Link to={"/cart"}>
                                <button className="ui fluid button sell_product_page_mobile" onClick={buttonComprar}>
                                    Comprar Agora
                                </button>
                            </Link>
                            <div className='buttons_product_page_opc_add_mobile'>
                                <div className='div_button_product_page_mobile'>
                                    <button className="ui fluid button cart_product_page_mobile">
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                                <div>
                                    <button className="ui fluid icon button product_page_compare_mobile">
                                        <i className="exchange icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div_table_product_page_mobile'>
                    <h2 className="ui header about_product_page_mobile">Sobre o Produto</h2>
                    <h3 className="ui header app_product_page_mobile"> Aplicações</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 className="ui header charac_product_page_mobile"> Características</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 className="ui header gl_charac_product_page_mobile"> Características Gerais</h3>
                    <table className="ui small definition table product_page_mobile">
                        <tbody>
                            <tr>
                                <td>Potência</td>
                                <td className='table_item_product_page_mobile'>1/8 a 3 cv</td>
                            </tr>
                            <tr>
                                <td>Polaridade</td>
                                <td className='table_item_product_page_mobile'>2 ou 4</td>
                            </tr>
                            <tr>
                                <td>Tensão</td>
                                <td className='table_item_product_page_mobile'> 127/220 ou 220/440 V</td>
                            </tr>
                            <tr>
                                <td>Frequência</td>
                                <td className='table_item_product_page_mobile'> 60 ou 50 Hz</td>
                            </tr>
                            <tr>
                                <td>Carcaças</td>
                                <td className='table_item_product_page_mobile'>B48 a G56H</td>
                            </tr>
                            <tr>
                                <td>Tipo de Carcaça</td>
                                <td className='table_item_product_page_mobile'>Chapa de Aço</td>
                            </tr>
                            <tr>
                                <td>Grau de Proteção</td>
                                <td className='table_item_product_page_mobile'>IP21</td>
                            </tr>
                            <tr>
                                <td>Cor</td>
                                <td className='table_item_product_page_mobile'>Preto fosco (Munsell N1)</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='opcionais_product_page_mobile'>
                        <h3 className="ui header optionals_product_page_mobile"> Opcionais</h3>
                        <p> Proteção térmica.</p>
                        <p>Capacitor de partida, capacitor permanente ou ambos, conforme potência e aplicação.</p>
                    </div>
                </div>
            </div>
            <div className='box_product_page_title_similar_mobile'>
                <FaStar color='var(--white)' size={30} />
                <h1 className='title_product_page_mobile'>Produtos Semelhantes</h1>
            </div>
            <div className='box_product_page_carousel_similar'>
                <Carousel />
            </div>
            <div className='box_product_page_title_highlights_mobile'>
                <FaStar color='var(--white)' size={30} />
                <h1 className='title_product_page_mobile'>Produtos Destaques</h1>
            </div>
            <div className='box_product_page_carousel_highlights'>
                <Carousel />
            </div>
            <Footer />
        </>
    )
    const renderTabletView = () => (
        <>
            {!verify() ? <Header /> : <HeaderLogin />}
            <WeggnerModal />
            <div className="ui items product_page_tablet" >
                <div className="ui item product_page_tablet">
                    <div className="img_product_page_tablet">
                        <img className="image_product" src={motor} />
                    </div>
                    <div className="content product_page_tablet">
                        <div className='title_price_product_page_tablet'>
                            <h1 className="ui header product_page_tablet">Motor W30</h1>
                            <h1 className="price_product_page_tablet">{renderPrice()}</h1>
                        </div>
                        <br />
                        <Rating className="ui rating product_page_tablet" maxRating={5} />
                        <div className='box_description_product_page_tablet'>
                            <div className="meta">
                                <span>Descrição</span>
                            </div>
                            <div className="description product_page_tablet">
                                <p className='description product_page_tablet_p'>Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações com o máximo desempenho e economia. Opcionalmente pode ser fornecido com capacitor de partida e eixo e flange conforme norma NEMA.</p>
                            </div>
                        </div>
                        <div className='buttons_product_page_mobile'>
                            <Link to={"/cart"}>
                                <button className="ui fluid button sell_product_page_tablet" onClick={buttonComprar}>
                                    Comprar Agora
                                </button>
                            </Link>
                            <div className='buttons_product_page_opc_add_tablet'>
                                <div className='div_button_product_page_tablet'>
                                    <button className="ui fluid button cart_product_page_tablet">
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => AddProductInCompareTablet(product)} className="ui fluid icon button product_page_compare_mobile">
                                        <i className="exchange icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div_table_product_page_tablet'>
                    <h2 className="ui header about_product_page_tablet">Sobre o Produto</h2>
                    <h3 className="ui header app_product_page_tablet"> Aplicações</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 className="ui header charac_product_page_tablet"> Características</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 className="ui header gl_charac_product_page_tablet"> Características Gerais</h3>
                    <table className="ui small definition table product_page_tablet">
                        <tbody>
                            <tr>
                                <td>Potência</td>
                                <td className='table_item_product_page_mobile'>1/8 a 3 cv</td>
                            </tr>
                            <tr>
                                <td>Polaridade</td>
                                <td className='table_item_product_page_mobile'>2 ou 4</td>
                            </tr>
                            <tr>
                                <td>Tensão</td>
                                <td className='table_item_product_page_mobile'> 127/220 ou 220/440 V</td>
                            </tr>
                            <tr>
                                <td>Frequência</td>
                                <td className='table_item_product_page_mobile'> 60 ou 50 Hz</td>
                            </tr>
                            <tr>
                                <td>Carcaças</td>
                                <td className='table_item_product_page_mobile'>B48 a G56H</td>
                            </tr>
                            <tr>
                                <td>Tipo de Carcaça</td>
                                <td className='table_item_product_page_mobile'>Chapa de Aço</td>
                            </tr>
                            <tr>
                                <td>Grau de Proteção</td>
                                <td className='table_item_product_page_mobile'>IP21</td>
                            </tr>
                            <tr>
                                <td>Cor</td>
                                <td className='table_item_product_page_mobile'>Preto fosco (Munsell N1)</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='opcionais_product_page_tablet'>
                        <h3 className="ui header optionals_product_page_tablet"> Opcionais</h3>
                        <p> Proteção térmica.</p>
                        <p>Capacitor de partida, capacitor permanente ou ambos, conforme potência e aplicação.</p>
                    </div>
                </div>
            </div>
            <div className='box_product_page_title_similar_mobile'>
                <FaStar color='var(--white)' size={30} />
                <h1 className='title_product_page_tablet'>Produtos Semelhantes</h1>
            </div>
            <div className='box_product_page_carousel_similar'>
                <Carousel />
            </div>
            <div className='box_product_page_title_highlights_tablet'>
                <FaStar color='var(--white)' size={30} />
                <h1 className='title_product_page_tablet'>Produtos Destaques</h1>
            </div>
            <div className='box_product_page_carousel_highlights'>
                <Carousel />
            </div>
            <Footer />
        </>
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
export default ProductPage