//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCart.css'

//importando as frameworks
import { Link } from "react-router-dom";

//Importando services
import { CartService } from '../../Service';


function ProductCart({ item, user }) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [quantidade, setQuantidade] = useState(1);
  const [valor, setValor] = useState(1);
  const [subValor, setSubValor] = useState(99);

  useEffect(() => {
    setQuantidade(item.quantity);
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPrice = () => {
    if (item.product.price !== undefined) {
      const priceParts = item.product.price.toString().split('.');
      const integerPart = priceParts[0];
      const decimalPart = priceParts[1] || '00';
      return (
        <h1 className="product_cart_item_price">
          R$ {integerPart}
          <sup> .{decimalPart}</sup>
          <sub className='product_cart_subtext'>10x sem juros</sub>
        </h1>
      );
    } else {
      return null;
    }
  };

  function aumentarQuantidade() {
    setQuantidade(quantidade + 1);
    setValor(valor + 1);
    setSubValor(subValor + 99);
  }

  function diminuirQuantidade() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
      setValor(valor - 1);
      setSubValor(subValor - 99);
    }
  }

  const deleteItens = async (item) => {
    console.log(item.product.code);
    await CartService.MinunProductInCart(user.cart.id, item.product.code);
    window.location.reload();
  };

  const renderDesktopView = () => (
    <>
      <div className="container_card_cart">
        <div className="box_product_cart">
          <div className="product_cart_card" style={{ color: 'black' }}>
            <div className='product_cart_description'>
              <div id="imgItens CardCart">
                <Link to={`/product/${item.product.code}`}>
                  <img src={item.product.image} width="125" height="" />
                </Link>
              </div>
              <div className="product_cart_informations">
                <Link to={`/product/${item.product.code}`}>
                  <h2 className="product_cart_item_name">{item.product.model}</h2>
                  <p className="product_cart_complement" >{item.product.motors.typeDaCarcaca} -
                    {" " + item.product.motors.codeDaCarcaca}
                    {" " + item.product.motors.protection}
                    {" " + item.product.motors.regime}</p>
                  {renderPrice()}
                </Link>
              </div>
            </div>
            <div className='product_cart_buttons'>
              <button onClick={() => deleteItens(item)} className="ui icon button product_cart">
                <i className="trash alternate icon product_cart"></i>
              </button>
              <div className="ui small buttons product_cart">
                <button onClick={diminuirQuantidade} className="ui button active product_cart">-</button>
                <div className='or product_cart' data-text={quantidade}></div>
                <button onClick={aumentarQuantidade} className="ui button product_cart">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderTabletView = () => (
    <>
      <div className="container_card_cart">
        <div className="box_product_cart">
          <div className="product_cart_card" style={{ color: 'black' }}>
            <div id="imgItens CardCart">
              <Link to={`/product/${item.product.code}`}>
                <img src={item.product.image} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_informations">
              <Link to={`/product/${item.product.code}`}>
                <h2 className="product_cart_item_name">{item.product.model}</h2>
                <p className="product_cart_complement" >{item.product.motors.typeDaCarcaca} -
                  {" " + item.product.motors.codeDaCarcaca}
                  {" " + item.product.motors.protection}
                  {" " + item.product.motors.regime}</p>
                <h2 id="itemPreco CardCart" className='product_cart_item_price_tablet'>R${valor}<sup>{subValor}</sup><sub className='product_cart_subtext_tablet'>10x Sem juros</sub></h2>
              </Link>
            </div>
            <div className='product_cart_buttons'>
              <button className="ui icon button product_cart">
                <i className="trash alternate icon product_cart"></i>
              </button>
              <div className="ui small buttons product_cart">
                <button onClick={diminuirQuantidade} className="ui button active product_cart">-</button>
                <div className='or product_cart' data-text={quantidade}></div>
                <button onClick={aumentarQuantidade} className="ui button product_cart">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderMobileView = () => (
    <>
      <div className="container_card_cart">
        <div className="box_product_cart">
          <div className="product_cart_card_mobile" style={{ color: 'black' }}>
            <div className='product_card_cart_info_up'>
              <div id="imgItens CardCart">
                <Link to={`/product/${item.product.code}`}>
                  <img src={item.product.image} width="125" height="" />
                </Link>
              </div>
              <div className="product_cart_informations_mobile">
                <Link to={`/product/${item.product.code}`}>
                  <h2 className="product_cart_item_name_mobile">{item.product.model}</h2>
                  <h2 id="itemPreco CardCart" className='product_cart_item_price'>R${valor}<sup>{subValor}</sup><sub className='product_cart_subtext_mobile'>10x Sem juros</sub></h2>
                </Link>
              </div>
            </div>
            <div className='product_cart_buttons_mobile'>
              <div className="ui small buttons product_cart">
                <button onClick={diminuirQuantidade} className="ui button active product_cart">-</button>
                <div className='or product_cart' data-text={quantidade}></div>
                <button onClick={aumentarQuantidade} className="ui button product_cart">+</button>
              </div>
              <button className="ui icon button product_cart_mobile">
                <i className="trash alternate icon product_cart_mobile"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
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
export default ProductCart