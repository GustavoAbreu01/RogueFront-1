//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './ProductCardAccessed.css'

//importando as frameworks
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//Importando as imagens
import motor from '../../assets/img/motor.png'

function ProductCardAccessed({ product }) {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const AddProductInCart = () => {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    productsInCart.push(product);
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
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

  const buttonComprar = () => {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    productsInCart.push(product);
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
}

  const AddProductInSave = () => {
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
    savedProducts.push(product);
    localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
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

  const renderDesktopView = () => (
    <div className="product_acessed" key={product.code}>
    <div className='container_product_card_accessed'>
      <div className='box_product_card_accessed_tag_icon'>
        <button className="circular ui icon button product_card_accessed">
          <i className="chart line icon product_card_accessed"></i>
        </button>
      </div>
      <div className='container_product_card_accessed_action_icon'>
        <button onClick={() => AddProductInSave(product)} className="ui icon button product_card_accessed">
          <i className="bookmark icon product_card_accessed"></i>
        </button>
        <button onClick={() => AddProductInCart(product)} className="ui icon button product_card_accessed">
          <i className="cart plus icon product_card_accessed"></i>
        </button>
      </div>
      <Link to={`/product/${product.code}`} className='product_card_accessed_link'>
        <div className='box_product_card_accessed_image'>
          <img src={motor} alt='' className='product_card_accessed_image' height={150} width={150}></img>
        </div>
        <div className='box_product_card_accessed_info'>
          <div className='product_card_accessed_info_text'>
            <h3 title= {product.name} className='product_card_accessed_name'>{product.name}</h3>
            <p className='product_card_accessed_description'>{product.description}</p>
          </div>
        </div>
        <div className='box_product_card_accessed_info_price'>
          <h3 className='product_card_accessed_price'>R$ {product.price}</h3>
          <p className='product_card_accessed_price_option'>Á vista no pix</p>
        </div>
        <Link to='/cart'>
          <div className='product_card_accessed_buy_button'>
            <button className="fluid ui button product_card_accessed_button" onClick={buttonComprar}>Comprar</button>
          </div>
        </Link>
      </Link>
    </div>
    </div>
  )

  const renderTabletView = () => (
    <div className="product_acessed"  key={product.code}>
    <div className='container_product_card_accessed_tablet'>
      <div className='box_product_card_accessed_tag_icon'>
        <button className="circular blue big ui icon button product_card_accessed">
          <i className="chart line icon product_card_accessed"></i>
        </button>
      </div>
      <div className='container_product_card_accessed_action_icon_tablet'>
        <button  onClick={() => AddProductInSave(product)} className="big ui icon button product_card_accessed">
          <i className="bookmark icon product_card_accessed"></i>
        </button>
        <button onClick={() => AddProductInCart(product)} className="big ui icon button product_card_accessed">
          <i className="cart plus icon product_card_accessed"></i>
        </button>
      </div>
      <Link to={`/product/${product.code}`} className='product_card_accessed_link'>
        <div className='box_product_card_accessed_image'>
          <img src={motor} alt='' className='product_card_accessed_image' height={150} width={150}></img>
        </div>
        <div className='box_product_card_accessed_info'>
          <div className='product_card_accessed_info_text'>
            <h3 title= {product.name} className='product_card_accessed_name'>{product.name}</h3>
            <p className='product_card_accessed_description'>{product.description}</p>
          </div>
        </div>
        <div className='box_product_card_accessed_info_price'>
          <h3 className='product_card_accessed_price'>R$ {product.price}</h3>
          <p className='product_card_accessed_price_option'>Á vista no pix</p>
        </div>
        <Link to='/cart'>
          <div className='product_card_accessed_buy_button'>
            <button className="fluid ui button product_card_accessed_button" onClick={buttonComprar}>Comprar</button>
          </div>
        </Link>
      </Link>
    </div>
    </div>
  )

  const renderMobileView = () => (
    <div className="product_acessed" key={product.id}>
    <div className='container_product_card_accessed_mobile'>
      <div className='box_product_card_accessed_tag_icon_mobile'>
        <button className="circular blue mini ui icon button product_card_accessed">
          <i className="chart line icon product_card_accessed"></i>
        </button>
      </div>
      <div className='container_product_card_accessed_action_icon_mobile'>
        <button  onClick={() => AddProductInSave(product)} className="mini ui icon button product_card_accessed_mobile">
          <i className="bookmark icon product_card_accessed" ></i>
        </button>
        <button onClick={() => AddProductInCart(product)}  className="mini ui icon button product_card_accessed">
          <i className="cart plus icon product_card_accessed"></i>
        </button>
      </div>
      <Link to={`/product/${product.code}`} className='product_card_accessed_link'>
        <div className='box_product_card_accessed_image'>
          <img src={motor} alt='' className='product_card_accessed_image' height={100} width={100}></img>
        </div>
        <div className='box_product_card_accessed_info'>
          <div className='product_card_accessed_info_text_mobile'>
            <h3 title= {product.name} className='product_card_accessed_name_mobile'>{product.name}</h3>
          </div>
        </div>
        <div className='box_product_card_accessed_info_price'>
          <h3 className='product_card_accessed_price_mobile'>R$ {product.price}</h3>
          <p className='product_card_accessed_price_option_mobile'>Á vista no pix</p>
        </div>
        <Link to='/cart'>
          <div className='product_card_accessed_buy_button_mobile'>
            <button className="fluid ui button product_card_accessed_button_mobile" onClick={buttonComprar}>Comprar</button>
          </div>
        </Link>
      </Link>
    </div>
    </div>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;

}

export default ProductCardAccessed