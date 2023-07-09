import React from 'react'
import motors from "../../assets/img/motores.png"
import save from "../../assets/img/salvo.png"
import { Link } from "react-router-dom";
import './NewCard.css'

function NewCard() {
    return (
        <div className="ui segment itens categoryItens" id="itemCategory">
            <Link to="/product">
                <p class="ui blue ribbon label">Verificados</p>
                <div className="itemContentCategory" style={{ color: 'black' }}>
                    <div className="imgItensCategory">
                        <img src={motors} width="125" height="" />
                    </div>
                    <div class="itemInfoCategory">
                        <h3 className="itemNameCategory">W12 Monofásico</h3>
                        <h4 className="descricaoCategory">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                        <h2 className="itemPrecoCategory">R$ 495<sup> 99</sup><sub className='subtext Category'>10x Sem juros</sub></h2>
                    </div>
                </div>
            </Link>
            <div className='iconProductAction category'>
                <button className="ui blue icon button Category">
                    <i className="bookmark icon Category"></i>
                </button>
                <button class="ui blue icon button Category">
                    <i className="cart plus icon Category"></i>
                </button>
            </div>
            <div className='buyCategoryButton'>
                <button className="ui fluid blue button Category">Comprar</button>
            </div>
        </div>
    )
}

export default NewCard