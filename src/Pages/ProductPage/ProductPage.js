import React from 'react'
import motor from '../../assets/img/motor.png'
import save from '../../assets/img/salvo.png'
import './ProductPage.css'


function ProductPage() {
    return (
        <>
            <div class="body-product">
                <div class="save">
                    <img src={save} alt="" />
                </div>
                <div class="informacoes">
                    <div class="image">
                        <img src={motor} alt="" />
                    </div>
                    <div class="text">
                        <div class="title">
                            <h1>
                                Motor de Chapa Aberta (IP21)
                            </h1>

                            <ul class="avaliacao">
                                <li class="star-icon ativo" data-avaliacao="1"></li>
                                <li class="star-icon" data-avaliacao="2"></li>
                                <li class="star-icon" data-avaliacao="3"></li>
                                <li class="star-icon" data-avaliacao="4"></li>
                                <li class="star-icon" data-avaliacao="5"></li>
                            </ul>
                        </div>
                        <div class="price">
                            <div class="int">R$ 495</div>
                            <div class="cent">99</div>
                        </div>
                        <div class="payment">
                            <a href="">Ver meios de pagamento</a>
                        </div>
                        <div class="description">
                            Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações com o máximo desempenho e economia. Opcionalmente pode ser fornecido com capacitor de partida e eixo e flange conforme norma NEMA.
                        </div>
                        <div class="opcBuy">
                            <div class="Buy">
                                <button>Comprar agora</button>
                            </div>
                            <div class="Car">
                                <a>
                                    <button>
                                        Adicionar ao Carrinho
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aboutProduct">
                    <h1>Sobre o Produto</h1>
                    <h2>Aplicações</h2>
                    <h3>Ventiladores, compressores, moinhos, esteiras ergométricas, picadores, forradeiras e outras de uso em geral</h3>
                    <h2>Caracteristicas</h2>
                    <h3>Motor monofásico</h3>
                    <h2>Caracteristicas Gerais</h2>
                    <table border="1px">
                        <tr class="caracterisicas">
                            <td>
                                Potência
                            </td>
                            <td>
                                1/8 a 3cv
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Polaridade
                            </td>
                            <td>
                                2 ou 4
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Tensão
                            </td>
                            <td>
                                127/220 ou 220/440 V
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Frequência
                            </td>
                            <td>
                                60 ou 50 Hz
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Carcaça
                            </td>
                            <td>
                                B48 a G56H
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Tipo de carcaça
                            </td>
                            <td>
                                Chapa de Aço
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Grau de proteção
                            </td>
                            <td>
                                IP21
                            </td>
                        </tr>
                        <tr class="caracterisicas">
                            <td>
                                Cor
                            </td>
                            <td>
                                Preto fosco (Munsell N1)
                            </td>
                        </tr>
                    </table>
                    <div class="opcionais">
                        <h1>Opcionais</h1>
                        <h2><p>
                            Proteção térmica
                        </p>
                            Capacitor de partida, capacitor permanente ou ambos, conforme potência e aplicação.</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage