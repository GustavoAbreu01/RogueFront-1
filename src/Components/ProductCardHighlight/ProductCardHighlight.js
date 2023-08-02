//Importando o React e o CSS
import './ProductCardHighlight.css'
import React from 'react'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//Importando as imagens
import motor from '../../assets/img/motor.png'

function ProductCardHighlight() {

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
    <div className='container_product_card_hightlight'>
      <div className='box_product_card_hightlight_tag_icon'>
        <button className="circular ui icon button product_card_hightlight">
          <i className="star icon product_card_hightlight"></i>
        </button>
      </div>
      <div className='container_product_card_hightlight_action_icon'>
        <button onClick={AddProductInSave} className="ui icon button product_card_hightlight">
          <i className="bookmark icon product_card_hightlight"></i>
        </button>
        <button onClick={AddProductInCart} className="ui icon button product_card_hightlight">
          <i className="cart plus icon product_card_hightlight"></i>
        </button>
      </div>
      <Link to='/product'>
        <div className='box_product_card_hightlight_image'>
          <img src={motor} alt='' className='product_card_hightlight_image' height={150} width={150}></img>
        </div>
        <div className='box_product_card_hightlight_info'>
          <div className='product_card_hightlight_info_text'>
            <h3 className='product_card_hightlight_name'>W12 Monofásico</h3>
            <p className='product_card_hightlight_description'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência.</p>
          </div>
        </div>
        <div className='box_product_card_hightlight_info_price'>
          <h3 className='product_card_hightlight_price'>R$ 1.259,00</h3>
          <p className='product_card_hightlight_price_option'>Á vista no pix</p>
        </div>
        <Link to='/cart'>
        <div className='product_card_hightlight_buy_button'>
            <button className="fluid ui button product_card_hightlight_button">Comprar</button>
        </div>
        </Link>
      </Link>
    </div>
  )
}

export default ProductCardHighlight