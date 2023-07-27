import React from 'react'
import './SaveCard.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import motors from "../../assets/img/motores.png"
import Swal from 'sweetalert2';


function SaveCard() {

    const [isOpen, setIsOpen] = useState(false);

    const AddProductInCart = () => {
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
            <div className="ui segment itens save_card" id="itemCategory">
                <Link to="/product">
                    <div className="box_save_card_product_info" style={{ color: 'black' }}>
                        <div className="save_card_image">
                            <img src={motors} width="125" height="" />
                        </div>
                        <div class="save_card_product_info">
                            <h3 className="save_card_product_name">W12 Monofásico</h3>
                            <h4 className="save_card_product_description">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                            <h2 className="save_card_product_price">R$ 495<sup> 99</sup><sub className='save_card_product_subtext'>10x Sem juros</sub></h2>
                        </div>
                    </div>
                </Link>
                <div className='iconProductAction save_card'>
                    <button className="ui blue icon button save_card" onClick={deleteItens} >
                        <i className="trash alternate icon save_card" ></i>
                    </button>
                    <button onClick={AddProductInCart} class="ui blue icon button save_card">
                        <i className="cart plus icon save_card"></i>
                    </button>
                </div>
                <div className='save_card_buy_button'>
                    <Link to='/cart'>
                        <button className="ui fluid blue button save_card">Comprar</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default SaveCard