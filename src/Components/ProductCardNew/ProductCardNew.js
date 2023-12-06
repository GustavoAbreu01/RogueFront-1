//Importando o React e o CSS
import './ProductCardNew.css'
import React, { useEffect, useState } from 'react'

//importando as frameworks
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//importando service
import { CartService } from '../../Service/CartService'
import { SaveService } from '../../Service'
import Cookies from 'js-cookie'


function ProductCardNew({ product, user }) {

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

  const AddProductInCart = async () => {
    const cookie = Cookies.get('Cookie');
    if (cookie) {
      for (let i = 0; i < user.cart.size; i++) {
        if (user.cart.products[i].product.code === product.code) {
          Swal.fire({
            title: 'Produto já está no seu carrinho!',
            icon: 'error',
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
          return;
        }
      }

      await CartService.AddProductInCart(cookie, user.saves.id, product.code, 1);
      Swal.fire({
        title: 'Produto adicionado ao carrinho!',
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
    } else {
      Swal.fire({
        title: 'Para adicionar o produto ao carrinho é necessário fazer o login',
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Ir para o Login',
        position: 'top-end',
        timer: 5000,
        timerProgressBar: true,
        background: 'var(--red)',
        toast: true,
        width: 400,
        color: 'var(--white)',
        confirmButtonColor: 'var(--dark-red)',
        showClass: {
          popup: 'animate__animated animate__backInRight'
        },
        hideClass: {
          popup: 'animate__animated animate__backOutRight'
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login"
        }
      }
      )
    }

  }

  const BuyProduct = async () => {
    const cookie = Cookies.get('Cookie');
    if (cookie) {
      await CartService.AddProductInCart(cookie, user.saves.id, product.code, 1);
      setTimeout(() => {
        window.location.href = "/cart"
      }, 200);
    } else {
      Swal.fire({
          title: 'Redirecionando para tela de login',
          icon: 'error',
          showConfirmButton: false,
          position: 'top-end',
          timer: 2000,
          timerProgressBar: true,
          background: 'var(--red)',
          toast: true,
          width: 400,
          color: 'var(--white)',
          showClass: {
              popup: 'animate__animated animate__backInRight'
          },
          hideClass: {
              popup: 'animate__animated animate__backOutRight'
          },
      })
      setTimeout(() => {
          window.location.href = "/login"
      }, 2000);
  }
  }

  const AddProductInSave = async () => {
    const cookie = Cookies.get('Cookie');
    if (cookie) {
      for (let i = 0; i < user.saves.quantity; i++) {
        if (user.saves.products[i].code === product.code) {
          Swal.fire({
            title: 'Produto já está na lista de salvos!',
            icon: 'error',
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
          return;
        }
      }

      await SaveService.AddProductInSave(cookie, user.saves.id, product.code);
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
    } else {
      Swal.fire({
        title: 'Para adicionar o produto ao salvos é necessário fazer o login',
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Ir para o Login',
        position: 'top-end',
        timer: 5000,
        timerProgressBar: true,
        background: 'var(--red)',
        toast: true,
        width: 400,
        color: 'var(--white)',
        confirmButtonColor: 'var(--dark-red)',
        showClass: {
          popup: 'animate__animated animate__backInRight'
        },
        hideClass: {
          popup: 'animate__animated animate__backOutRight'
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login"
        }
      }
      )
    }
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
            <img src={product.image} alt='' className='product_card_new_image' height={200} width={200}></img>
          </div>
        </Link>
        <div className='box_product_card_new_info'>
          <div className='product_card_new_info_text'>
            <h3 title={product.model} className='product_card_new_name'>{product.model}</h3>
            <p className='product_card_new_description'>{product.motors.typeDaCarcaca}, {product.motors.protection}</p>
          </div>
        </div>
        <div className='box_product_card_new_info_price'>
          <h3 className='product_card_new_price'>R$ {product.price}</h3>
          <p className='product_card_new_price_option'>Á vista no pix</p>
        </div>
        <div className='product_card_new_buy_button'>
          <button className="fluid ui button product_card_new_button" onClick={() => BuyProduct(product)}>Comprar</button>
        </div>
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
            <img src={product.image} alt='' className='product_card_new_image' height={200} width={200}></img>
          </div>
        </Link>
        <div className='box_product_card_new_info'>
          <div className='product_card_new_info_text'>
            <h3 title={product.model} className='product_card_new_name'>title= {product.model}</h3>
            <p className='product_card_new_description'>{product.motors.typeDaCarcaca}, {product.motors.protection}</p>
          </div>
        </div>
        <div className='box_product_card_new_info_price'>
          <h3 className='product_card_new_price'>R$ {product.price}</h3>
          <p className='product_card_new_price_option'>Á vista no pix</p>
        </div>
        <div className='product_card_new_buy_button'>
          <button className="fluid ui button product_card_new_button" onClick={() => BuyProduct(product)}>Comprar</button>
        </div>
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
            <img src={product.image} alt='' className='product_card_new_image' height={150} width={150}></img>
          </div>
        </Link>
        <div className='box_product_card_new_info'>
          <div className='product_card_new_info_text_mobile'>
            <h3 title={product.model} className='product_card_new_name_mobile'>{product.model}</h3>
          </div>
        </div>
        <div className='box_product_card_new_info_price'>
          <h3 className='product_card_new_price_mobile'>R$ {product.price}</h3>
          <p className='product_card_new_price_option'>Á vista no pix</p>
        </div>
        <div className='product_card_new_buy_button_mobile'>
          <button className="fluid ui button product_card_new_button_mobile" onClick={() => BuyProduct(product)}>Comprar</button>
        </div>
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