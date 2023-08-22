//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './Cart.css';

//importando as frameworks
import { Link } from 'react-router-dom';

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import ProductCart from '../../Components/ProductCart/ProductCart';
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';

//Importando as imagens
import imgEmptyCart from '../../assets/img/weggnerAcordado.PNG';

//Importando os icones
import { FaShoppingCart, FaCreditCard, FaTruck, FaInfo } from 'react-icons/fa';
import { BsArrowLeftShort } from 'react-icons/bs';



function Cart() {
  const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const somaTaxProduct = () => {
    var soma = 0;
    for (var i = 0; i < productsInCart.length; i++) {
      soma += productsInCart[i].price * 0.1;
    }
    return soma;
  }

  const somaProduct = () => {
    var soma = 0;
    console.log(productsInCart)
    for (var i = 0; i < productsInCart.length; i++) {
      soma += productsInCart[i].price;
    }
    return soma;
  }

  const somaTotal = () => {
    var soma = 0;
    for (var i = 0; i < productsInCart.length; i++) {
      soma += productsInCart[i].price;
    }
    soma += somaTaxProduct();
    return soma;
  }

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

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

  const hasProductsInCart = () => {
    if (productsInCart.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const renderDesktopView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart'>
        <div className="ui small steps">
          <div className="step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_all'>
        <div className='box_cart_product_detail_all'>
          <div className='box_cart_product_all'>
            <div className='cart_product_title'>
              <h5 className='cart_product_title_text'>Produtos no carrinho</h5>
            </div>
            {hasProductsInCart() ? (
              <>
                {productsInCart.map((item, index) => (
                  <div key={index}>
                    <ProductCart item={item} />
                  </div>
                ))}
              </>
            ) : (
              <div className='box_empty_cart'>
                <img className='img_empty_cart' src={imgEmptyCart} />
                <p className='text_empty_cart'>Não foi adicionado nenhum produto em seu carrinho.</p>
                <div className='box_subtext_empty_cart'>
                  <BsArrowLeftShort size={15} />
                  <Link className='subtext_empty_cart' to='/'> <p>Voltar para a Home</p> </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='box_info_total_cart'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${somaProduct()}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Taxa R${somaTaxProduct()}</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${somaTotal()}</h5>
            </div>
            <div className='button_total_Cart'>
              {!verify() ? (
                <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/register'>Realizar Login</Link></button>
              ) : (
                !hasProductsInCart() ? (
                  <button className="fluid ui button" disabled><Link className='font_decoration_none_white'>Carrinho Vazio</Link></button>
                ) : (
                  <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/payment'>Finalizar Compra</Link></button>
                )
              )}
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to='/'>Continuar Comprando</Link></button>
            </div>
          </div>
          <div className='box_cart_info_recommend'>
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

  const renderTabletView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_tablet'>
        <div className="ui small steps">
          <div className="step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_all_tablet'>
        <div className='box_cart_product_detail_all_tablet'>
          <div className='box_cart_product_all_tablet'>
            <div className='cart_product_title'>
              <h5 className='cart_product_title_text'>Produtos no carrinho</h5>
            </div>
            {hasProductsInCart() ? (
              <>
                <ProductCart />
              </>
            ) : (
              <div className='box_empty_cart_tablet'>
                <img className='img_empty_cart_tablet' src={imgEmptyCart} />
                <p className='text_empty_cart_tablet'>Não foi adicionado nenhum produto em seu carrinho.</p>
                <div className='box_subtext_empty_cart_tablet'>
                  <BsArrowLeftShort size={15} />
                  <Link className='subtext_empty_cart_tablet' to='/'> <p>Voltar para a Home</p> </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='box_info_total_cart_tablet'>
          <div className='info_total_buy_tablet'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${somaProduct()}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Taxa R${somaTaxProduct()}</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${somaTotal()}</h5>
            </div>
            <div className='button_total_Cart_tablet'>
              {!verify() ? (
                <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/register'>Realizar Login</Link></button>
              ) : (
                !hasProductsInCart() ? (
                  <button className="fluid ui button" disabled><Link className='font_decoration_none_white'>Carrinho Vazio</Link></button>
                ) : (
                  <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/payment'>Finalizar Compra</Link></button>
                )
              )}
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

  const renderMobileView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_mobile'>
        <div className="menu_edit_profile">
          <div>
            <FaShoppingCart className="edit_icon_mobile" />
          </div>
          <div >
            <FaCreditCard className="edit_icon_mobile" color='grey' />
          </div>
          <div >
            <FaTruck className="edit_icon_mobile" color='grey' />
          </div>
          <div >
            <FaInfo className="edit_icon_mobile" color='grey' />
          </div>
        </div>
      </div>
      <div className='container_cart_all_mobile'>
        <div className='box_cart_product_detail_all_mobile'>
          <div className='box_cart_product_all_mobile'>
            <div className='cart_product_title'>
              <h5 className='cart_product_title_text'>Produtos no carrinho</h5>
            </div>
            {hasProductsInCart() ? (
              <>
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
              </>
            ) : (
              <div className='box_empty_cart_mobile'>
                <img className='img_empty_cart_mobile' src={imgEmptyCart} />
                <p className='text_empty_cart_mobile'>Não foi adicionado nenhum produto em seu carrinho.</p>
                <div className='box_subtext_empty_cart_mobile'>
                  <BsArrowLeftShort size={15} />
                  <Link className='subtext_empty_cart_mobile' to='/'> <p>Voltar para a Home</p> </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='box_info_total_cart_mobile'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${somaProduct()}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Taxa R${somaTaxProduct()}</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${somaTotal()}</h5>
            </div>
            <div className='button_total_Cart_mobile'>
              {!verify() ? (
                <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/register'>Realizar Login</Link></button>
              ) : (
                !hasProductsInCart() ? (
                  <button className="fluid ui button" disabled><Link className='font_decoration_none_white'>Carrinho Vazio</Link></button>
                ) : (
                  <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/payment'>Finalizar Compra</Link></button>
                )
              )}
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
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

export default Cart;
