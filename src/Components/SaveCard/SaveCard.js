import React from 'react'
import './SaveCard.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import motors from "../../assets/img/motores.png"


function SaveCard() {

    const [isOpen, setIsOpen] = useState(false);
    

    const deleteItens = (item) => {
        const products = JSON.parse(localStorage.getItem('products'))
        const index = products.indexOf(item)
        products.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(products))
        console.log(products)
        window.location.reload()
    }

    return (
        <>
            <div className="ui segment itens  Save" id="itemCategory">
                <Link to="/product">
                    <div className="itemContent Save" style={{ color: 'black' }}>
                        <div className="imgItens Save">
                            <img src={motors} width="125" height="" />
                        </div>
                        <div class="itemInfo Save">
                            <h3 className="itemName Save">W12 Monofásico</h3>
                            <h4 className="descricao Save">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                            <h2 className="itemPreco Save">R$ 495<sup> 99</sup><sub className='subtext Save'>10x Sem juros</sub></h2>
                        </div>
                    </div>
                </Link>
                <div className='iconProductAction Save'>
                    <button className="ui blue icon button Save" onClick={deleteItens} >
                        <i className="trash alternate icon Save" ></i>
                    </button>
                    <button class="ui blue icon button  Save">
                        <i className="cart plus icon Save"></i>
                    </button>
                </div>
                <div className='buyButton Save'>
                    <button className="ui fluid blue button Save">Comprar</button>
                </div>
            </div>
        </>
    );
};
export default SaveCard