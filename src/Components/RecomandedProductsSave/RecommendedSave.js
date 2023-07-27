import React from 'react'
import './RecommendedSave.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import motor from "../../assets/img/motores.png"
import Swal from 'sweetalert2';


function RecomendedSave() {

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

    return (
        <>
            <div className='container_recommended_save'>
                <div className='recommender_save_image'>
                    <img src={motor} alt='' className='recommended_save_image_tag' height={90} width={90}></img>
                </div>
                <div className='recommended_save_product_info'>
                    <div className='recommended_save_product_title'>
                        <h5>W12 Motor</h5>
                    </div>
                    <div className='recommended_save_product_price'>
                        <p className='recommended_save_product_price_tag'>R$ 1.259,00</p>
                    </div>
                    <p style={{ paddingLeft: '1rem', paddingTop: '0.4rem' }}>Á vista no pix</p>
                </div>
                <div className='recommended_save_buttons_icons'>
                    <button onClick={AddProductInCart} className="ui blue icon button recommended_save">
                        <i className="cart plus icon recommended_save"></i>
                    </button>
                    <button onClick={AddProductInSave} className="ui blue icon button recommended_save">
                        <i className="bookmark icon recommended_save"></i>
                    </button>
                </div>

            </div>
        </>
    );
};
export default RecomendedSave