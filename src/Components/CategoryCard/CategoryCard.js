//Importando o React e o CSS
import React from 'react'
import './CategoryCard.css'
import 'animate.css';

//importando as frameworks
import { Link } from "react-router-dom";
import swal from 'sweetalert2';

//Importando as imagens
import motors from "../../assets/img/motores.png"



function CategoryCard() {

    const AddProductInCart = () => {
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
                window.location.href = "/compare"
            }
        }
        )
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
                    <i className="exchange alternate icon"></i>
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