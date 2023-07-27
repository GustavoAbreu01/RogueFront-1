import './ProductPage.css'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import motor from '../../assets/img/motor.png'
import { Rating } from 'semantic-ui-react';
import Carousel from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'

const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
        return true
    } else {
        return false
    }
}

function ProductPage() {

    return (
        <>
            {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />

            <div className="ui items product_page" >
            <p className="ui blue ribbon label">Destaque</p>
                <div className="ui item product_page">
                    <div className="img_product_page">
                        <img className="image_product" src={motor} />
                    </div>
                    <div className="content product_page">
                        <h1 className="ui header product_page">Motor W30</h1>
                        <br />
                        <Rating className="ui rating product_page" maxRating={5} style={{ marginTop: '1rem' }} />
                        <h1 className="price_product_page">R$ 495<sup> 99</sup><sub className='subtext CardCart'>10x sem juros</sub></h1>
                        <div className="meta">
                            <span>Descrição</span>
                        </div>
                        <div className="description product_page">
                            <p>Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações com o máximo desempenho e economia. Opcionalmente pode ser fornecido com capacitor de partida e eixo e flange conforme norma NEMA.</p>
                        </div>
                        <div className='buttons_product_page'>
                            <button className="ui fluid button sell_product_page">
                                Comprar Agora
                            </button>
                            <button className="ui fluid button cart_product_page">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="ui header about_product_page">Sobre o Produto</h2>
                    <h3 className="ui header app_product_page"> Aplicações</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 className="ui header charac_product_page"> Características</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 className="ui header gl_charac_product_page"> Características Gerais</h3>
                    <table className="ui small definition table product_page">
                        <tbody>
                            <tr>
                                <td>Potência</td>
                                <td>1/8 a 3 cv</td>
                            </tr>
                            <tr>
                                <td>Polaridade</td>
                                <td>2 ou 4</td>
                            </tr>
                            <tr>
                                <td>Tensão</td>
                                <td> 127/220 ou 220/440 V</td>
                            </tr>
                            <tr>
                                <td>Frequência</td>
                                <td> 60 ou 50 Hz</td>
                            </tr>
                            <tr>
                                <td>Carcaças</td>
                                <td>B48 a G56H</td>
                            </tr>
                            <tr>
                                <td>Tipo de Carcaça</td>
                                <td>Chapa de Aço</td>
                            </tr>
                            <tr>
                                <td>Grau de Proteção</td>
                                <td>IP21</td>
                            </tr>
                            <tr>
                                <td>Cor</td>
                                <td>Preto fosco (Munsell N1)</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="ui header optionals_product_page"> Opcionais</h3>
                    <p> Proteção térmica.</p>
                    <p> Capacitor de partida, capacitor permanente ou ambos, conforme potência e aplicação.</p>
                </div>
            </div> 
            <div className='box_product_page_title_similar'>
            <FaStar color='var(--white)' size={40} />
            <h1>Produtos Semelhantes</h1>
          </div>
            <Carousel/>
            <Footer />
        </>
    )
}

export default ProductPage