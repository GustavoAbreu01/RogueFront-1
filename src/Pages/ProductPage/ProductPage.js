import './ProductPage.css'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import motor from '../../assets/img/motor.png'
import save from '../../assets/img/salvo.png'
import { Rating } from 'semantic-ui-react';
import Carousel from '../../Components/ProductCarouselSmall/ProductCarouselSmall';
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

            <div class="ui items producPage" >
                <div class="ui item producPage">
                    <div class="imgProductPage">
                        <img class="imageProduct" src={motor} />
                    </div>
                    <div class="content productPage">
                        <h1 class="ui header productPage">Motor W30</h1>
                        <br />
                        <Rating class="ui star rating productPage" maxRating={5} style={{ marginTop: '1rem' }} />
                        <h1 class="priceProductPage">R$ 495<sup> 99</sup><sub className='subtext CardCart'>10x sem juros</sub></h1>
                        <div class="meta">
                            <span>Descrição</span>
                        </div>
                        <div class="description productPage">
                            <p>Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações com o máximo desempenho e economia. Opcionalmente pode ser fornecido com capacitor de partida e eixo e flange conforme norma NEMA.</p>
                        </div>
                        <div className='buttonsProductPage'>
                            <button class="ui fluid button sellProductPage">
                                Comprar Agora
                            </button>
                            <button class="ui fluid button cartProductPage">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="ui header aboutProductPage">Sobre o Produto</h2>
                    <h3 class="ui header  appProductPage"> Aplicações</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 class="ui header  characProductPage"> Características</h3>
                    <p> Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral. </p>
                    <h3 class="ui header glCharacProductPage"> Características Gerais</h3>
                    <table class="ui small definition table productPage">
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
                    <h3 class="ui header optionalsProductPage"> Opcionais</h3>
                    <p> Proteção térmica.</p>
                    <p> Capacitor de partida, capacitor permanente ou ambos, conforme potência e aplicação.</p>
                </div>
            </div>
            <div className='boxTitleHighlights'>
                <FaStar color='var(--white)' size={40} />
                <h1 className='titleHighlights' >Destaques da semana</h1>
            </div>
            <Carousel />
            <Footer />
        </>
    )
}

export default ProductPage