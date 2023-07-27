import React from 'react'
import motors from "../../assets/img/motores.png"
import { Link } from "react-router-dom";
import swal from 'sweetalert2';
import 'animate.css';
import './CategoryCard.css'

function CategoryCard() {

    const AddProductInCart = () => {
        swal.fire({
            title: 'Produto adicionado ao carrinho!',
            icon: 'success',
            showConfirmButton: false,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            width: 400,
            showClass: {
                popup: 'animate__animated animate__backInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
        })
    }

    const AddProductInCompare = () => {
        swal.fire({
            title: 'Produto adicionado a comparação!',
            icon: 'success',
            showConfirmButton: false,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            width: 400,
            showClass: {
                popup: 'animate__animated animate__backInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
        })
    }

    const AddProductInSave = () => {
        swal.fire({
            title: 'Produto adicionado a lista de salvos!',
            icon: 'success',
            showConfirmButton: false,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            width: 400,
            showClass: {
                popup: 'animate__animated animate__backInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
        })
    }


    return (
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
                <button onClick={AddProductInSave} className="ui blue icon button category_card" >
                    <i className="bookmark icon Category category_card"></i>
                </button>
                <button onClick={AddProductInCart} className="ui blue icon button category_card">
                    <i className="cart plus icon category_card"></i>
                </button>
                <button onClick={AddProductInCompare} className="ui icon button category_card_compare">
                    <i class="exchange alternate icon"></i>
                </button>
            </div>
            <Link to="/cart">
            <div className='category_card_buy_button'>
                <button className="ui fluid blue button category_card">Comprar</button>
            </div>
            </Link>
        </div>
    )
}

export default CategoryCard