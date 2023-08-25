//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './CartConfirm.css';

//Importando os componentes
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';
import ProductCartConfirm from '../../Components/ProductCartConfirm/ProductCartConfirm';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';

//importando as frameworks
import { Link } from 'react-router-dom';

//Importando os icones
import { FaCheck, FaCreditCard, FaTruck, FaInfo } from 'react-icons/fa';
import { CartService } from '../../Service';

function CartConfirm() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const user = JSON.parse(localStorage.getItem('user')) || [];
  const [productsCart, setProductsCart] = useState([]);
  const [total, setTotal] = useState([]);

  const getCart = async () => {
    const cartId = user.cart.id;
    const products = await CartService.GetCart(cartId);
    if (products) {
      setProductsCart(products);
      setTotal(products.cartProductQuantities);
    } else {
      setProductsCart([]);
    }
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
    getCart();
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderDesktopView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />

      <div className='container_progress_cart_confirm'>
        <div className="ui small steps">
          <div className="completed step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="completed step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="completed step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_confirm'>
        <div className='box_cart_product_detail_confirm'>
          <div className='box_cart_product_confirm'>
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Confirmar Pedido</h5>
            </div>
            <>
                {total.map((item, index) => (
                  <div key={index}>
                    <ProductCartConfirm item={item} />
                  </div>
                ))}
              </>
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Endereço de Entrega</h5>
            </div>
            <div className='cart_confirm_transport'>
              <form className="ui form confirm">
                <div className="field">
                  <div className="three fields">
                    <div className="field">
                      <label>Nome do Responsável</label>
                      <p>{user.name}</p>
                    </div>
                    <div className="field">
                      <label>Endereço:</label>
                      <p>{user.address[0].rua}, {user.address[0].bairro}, {user.address[0].cidade}</p>
                    </div>
                    <div className="field">
                      <label>Complemento:</label>
                      <p>{user.address[0].complemento}</p>
                    </div>
                  </div>
                </div>
                <div className="three fields">
                  <div className="field">
                    <label>Estado:</label>
                    <p>{user.address[0].estado}</p>
                  </div>
                  <div className="field">
                    <label>País:</label>
                    <p>{user.address[0].pais}</p>
                  </div>
                  <div className="field">
                    <label>CEP</label>
                    <p>{user.address[0].cep}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete Grátis</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/finish'>Finalizar Pedido</Link></button>
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
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

      <div className='container_progress_cart_confirm'>
        <div className="ui small steps">
          <div className="completed step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="completed step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="completed step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_confirm_tablet'>
        <div className='box_cart_product_detail_confirm_tablet'>
          <div className='box_cart_product_confirm_tablet'>
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Confirmar Pedido</h5>
            </div>
            <ProductCartConfirm />
            <ProductCartConfirm />
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Endereço de Entrega</h5>
            </div>
            <div className='cart_confirm_transport'>
              <form className="ui form confirm">
                <div className="field">
                  <div className="three fields">
                    <div className="field">
                      <label>Nome do Responsável</label>
                      <p>Gustavo Guilherme de Abreu</p>
                    </div>
                    <div className="field">
                      <label>Endereço:</label>
                      <p>Rua Adolfo Tribess, Vieiras, N. 400</p>
                    </div>
                    <div className="field">
                      <label>Complemento:</label>
                      <p>Torre 1, Apto 706</p>
                    </div>
                  </div>
                </div>
                <div className="three fields">
                  <div className="field">
                    <label>Estado:</label>
                    <p>Santa Catarina</p>
                  </div>
                  <div className="field">
                    <label>País:</label>
                    <p>Brasil</p>
                  </div>
                  <div className="field">
                    <label>CEP</label>
                    <p>89256-690</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart_tablet'>
          <div className='info_total_buy'>
            <div>
              <h5 className='TitleTextBuyProduct'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart_tablet'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/finish'>Finalizar Pedido</Link></button>
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
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaInfo className="edit_icon_mobile" />
          </div>
        </div>
      </div>
      <div className='container_cart_confirm_mobile'>
        <div className='box_cart_product_detail_confirm_mobile'>
          <div className='box_cart_product_confirm_mobile'>
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Confirmar Pedido</h5>
            </div>
            <ProductCartConfirm />
            <ProductCartConfirm />
            <div className='cart_confirm_title'>
              <h5 className='cart_confirm_title_text'>Endereço de Entrega</h5>
            </div>
            <div className='cart_confirm_transport'>
              <form className="ui form confirm">
                <div className="field">
                  <div className="three fields">
                    <div className="field">
                      <label>Nome do Responsável</label>
                      <p>Gustavo Guilherme de Abreu</p>
                    </div>
                    <div className="field">
                      <label>Endereço:</label>
                      <p>Rua Adolfo Tribess, Vieiras, N. 400</p>
                    </div>
                    <div className="field">
                      <label>Complemento:</label>
                      <p>Torre 1, Apto 706</p>
                    </div>
                  </div>
                </div>
                <div className="three fields">
                  <div className="field">
                    <label>Estado:</label>
                    <p>Santa Catarina</p>
                  </div>
                  <div className="field">
                    <label>País:</label>
                    <p>Brasil</p>
                  </div>
                  <div className="field">
                    <label>CEP</label>
                    <p>89256-690</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart_mobile'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart_mobile'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/finish'>Finalizar Pedido</Link></button>
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

export default CartConfirm;