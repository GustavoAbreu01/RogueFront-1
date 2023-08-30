//Importando o React e o CSS
import './ProductCardNew.css'
import React, { useEffect, useState } from 'react'

//importando as frameworks
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//importando service
import { CartService } from '../../Service/CartService'

//Importando as imagens
import motor from '../../assets/img/motor.png'

function ProductCardNew({ product }) {

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

  const BuyProduct = () => {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const cartId = user.cart.id;
    CartService.AddProductInCart(cartId, product.code);
    window.location.href = "/cart"
  }

  const AddProductInCart = () => {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const cartId = user.cart.id;
    CartService.AddProductInCart(cartId, product.code);
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
    <div className="product_new" key={product.code}>
      <div className='container_product_card_new'>

        <div className='box_product_card_new_tag_icon'>
          <button className="circular ui icon button product_card_new">
            <i className="exclamation circle icon"></i>
          </button>
        </div>
        <div className='container_product_card_new_action_icon'>
          <button onClick={() => AddProductInSave(product)} className="ui icon button product_card_new">
            <i className="bookmark icon product_card_new"></i>
          </button>
          <button onClick={() => AddProductInCart(product)} className="ui icon button product_card_new">
            <i className="cart plus icon product_card_new"></i>
          </button>
        </div>
        <Link to={`/product/${product.code}`}>
          <div className='box_product_card_new_image'>
            <img src={product.image} alt='' className='product_card_new_image' height={150} width={150}></img>
          </div>
          <div className='box_product_card_new_info'>
            <div className='product_card_new_info_text'>
              <h3 title={product.name} className='product_card_new_name'>{product.name}</h3>
              <p className='product_card_new_description'>{product.description}</p>
            </div>
          </div>
          <div className='box_product_card_new_info_price'>
            <h3 className='product_card_new_price'>R$ {product.price}</h3>
            <p className='product_card_new_price_option'>Á vista no pix</p>
          </div>
          <Link to='/cart'>
            <div className='product_card_new_buy_button'>
              <button className="fluid ui button product_card_new_button" onClick={() => BuyProduct(product)}>Comprar</button>
            </div>
          </Link>
        </Link>
      </div>
    </div >
  )

  const renderTabletView = () => (
    <div className="product_new" key={product.code}>
      <div className='container_product_card_new_tablet'>

        <div className='box_product_card_new_tag_icon'>
          <button className="circular blue big ui icon button product_card_new">
            <i className="exclamation circle icon"></i>
          </button>
        </div>
        <div className='container_product_card_new_action_icon_tablet'>
          <button onClick={() => AddProductInSave(product)} className="big ui icon button product_card_new">
            <i className="bookmark icon product_card_new"></i>
          </button>
          <button onClick={() => AddProductInCart(product)} className="big ui icon button product_card_new">
            <i className="cart plus icon product_card_new"></i>
          </button>
        </div>
        <Link to={`/product/${product.code}`}>
          <div className='box_product_card_new_image'>
            <img src={product.image} alt='' className='product_card_new_image' height={150} width={150}></img>
          </div>
          <div className='box_product_card_new_info'>
            <div className='product_card_new_info_text'>
              <h3 title={product.name} className='product_card_new_name'>title= {product.name}</h3>
              <p className='product_card_new_description'>title= {product.description}</p>
            </div>
          </div>
          <div className='box_product_card_new_info_price'>
            <h3 className='product_card_new_price'>R$ {product.price}</h3>
            <p className='product_card_new_price_option'>Á vista no pix</p>
          </div>
          <Link to='/cart'>
            <div className='product_card_new_buy_button'>
              <button className="fluid ui button product_card_new_button" onClick={() => BuyProduct(product)}>Comprar</button>
            </div>
          </Link>
        </Link>
      </div>
    </div>
  )

  const renderMobileView = () => (
    <div className="product_new" key={product.code}>
      <div className='container_product_card_new_mobile'>
        <div className='box_product_card_new_tag_icon_mobile'>
          <button className="circular blue mini ui icon button product_card_new">
            <i className="exclamation circle icon"></i>
          </button>
        </div>
        <div className='container_product_card_new_action_icon_mobile'>
          <button onClick={() => AddProductInSave(product)} className="mini ui icon button product_card_new_mobile">
            <i className="bookmark icon product_card_new"></i>
          </button>
          <button onClick={() => AddProductInCart(product)} className="mini ui icon button product_card_new">
            <i className="cart plus icon product_card_new"></i>
          </button>
        </div>
        <Link to={`/product/${product.code}`}>
          <div className='box_product_card_new_image'>
            <img src={product.image} alt='' className='product_card_new_image' height={100} width={100}></img>
          </div>
          <div className='box_product_card_new_info'>
            <div className='product_card_new_info_text_mobile'>
              <h3 title={product.name} className='product_card_new_name_mobile'>{product.name}</h3>
            </div>
          </div>
          <div className='box_product_card_new_info_price'>
            <h3 className='product_card_new_price_mobile'>R$ {product.price}</h3>
            <p className='product_card_new_price_option_mobile'>Á vista no pix</p>
          </div>
          <Link to='/cart'>
            <div className='product_card_new_buy_button_mobile'>
              <button className="fluid ui button product_card_new_button_mobile" onClick={() => BuyProduct(product)}>Comprar</button>
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

export default ProductCardNew