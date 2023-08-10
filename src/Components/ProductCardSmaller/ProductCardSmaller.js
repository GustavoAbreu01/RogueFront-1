//Importando o React e o CSS
import React from 'react'
import './ProductCardSmaller.css'

//importando as frameworks
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//Importando as imagens
import motor from '../../assets/img/motor.png'



function SmallProductCard() {

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

    const AddProductInSave = () => {
        Swal.fire({
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
                window.location.href = "/compare"
            }
        }
        )
    }

    return (
        <div className='container_product_card_smaller'>
            <div className='container_product_card_smaller_action_icon'>
                <div className='product_card_small_button_compare'>
                    <button onClick={AddProductInCompare} className="ui icon button product_card_smaller_compare">
                        <i className="exchange alternate icon"></i>
                    </button>
                </div>
                <button onClick={AddProductInSave} className="ui icon button product_card_smaller"> 
                    <i className="bookmark icon "></i>
                </button>
                <button onClick={AddProductInCart} className="ui icon button product_card_smaller">
                    <i className="cart plus icon"></i>
                </button>
            </div>
            <Link to='/product'>
                <div className='box_product_card_smaller_image'>
                    <img src={motor} alt='' className='product_card_smaller_image' height={110} width={110}></img>
                </div>
                <div >
                    <div className='box_product_card_smaller_title'>
                        <h3 className='product_card_smaller_title'>W12 Motor</h3>
                    </div>
                </div>
                <div className='box_product_card_smaller_price'>
                    <h3 className='product_card_smaller_price'>R$ 1.259,00</h3>
                    <p className='product_card_smaller_price_info'>Á vista no pix</p>
                </div>
                <Link to='/cart'>
                    <div className='box_product_card_smaller_button'>
                        <button className="fluid ui button product_card_smaller">Comprar</button>
                    </div>
                </Link>
            </Link >
        </div>
    )
}

export default SmallProductCard