//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCartConfirm.css'

//importando as frameworks
import { Link } from "react-router-dom";

//Importando as imagens
import motors from "../../assets/img/motores.png"

function ProductCartConfirm() {

  const [quantidade, setQuantidade] = React.useState(1);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [valor, setValor] = React.useState(1);
  const [subValor, setSubValor] = React.useState(99);

  React.useEffect(() => {
    if (quantidade > 1) {
      setValor(quantidade * 467);
    } else {
      setValor(467);
    }
  }, [quantidade]);

  const Random = () => {
    const random = Math.floor(Math.random() * 10);
    if (random === 0) {
      return 1;
    }
    return random;
  };

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

  const renderDesktopView = () => (
    <>
      <div className="container_product_cart_confirm">
        <div className="box_itens_product_cart_confirm">
          <div className="product_cart_confirm_item_content" style={{ color: 'black' }}>
            <div id="product_cart_confirm_image">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_confirm_item_info">
              <Link to="/product">
                <h2 className="product_cart_confirm_product_name">W12 Monofásico</h2>
                <h2 id="itemPreco CardCart" className='product_cart_confirm_product_price'>R${valor * Random()}<sup>{subValor}</sup><sub className='product_cart_confirm_product_subtext'>10x Sem juros</sub></h2>
              </Link>
            </div>
            <div className='product_cart_confirm_qauntity'>
              <div className="ui small buttons product_cart_confirm">
                <p className='product_cart_confirm'>Quantidade: {Random()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderTabletView = () => (
    <>
      <div className="container_product_cart_confirm">
        <div className="box_itens_product_cart_confirm">
          <div className="product_cart_confirm_item_content" style={{ color: 'black' }}>
            <div id="product_cart_confirm_image">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_confirm_item_info">
              <Link to="/product">
                <h2 className="product_cart_confirm_product_name">W12 Monofásico</h2>
                <h2 id="itemPreco CardCart" className='product_cart_confirm_product_price'>R${valor * Random()}<sup>{subValor}</sup><sub className='product_cart_confirm_product_subtext'>10x Sem juros</sub></h2>
              </Link>
            </div>
            <div className='product_cart_confirm_qauntity'>
              <div className="ui small buttons product_cart_confirm">
                <p className='product_cart_confirm'>Quantidade: {Random()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderMobileView = () => (
    <>
      <div className="container_product_cart_confirm">
        <div className="box_itens_product_cart_confirm">
          <div className="product_cart_confirm_item_content" style={{ color: 'black' }}>
            <div id="product_cart_confirm_image">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_confirm_item_info">
              <Link to="/product">
                <h2 className="product_cart_confirm_product_name">W12 Monofásico</h2>
                <h2 id="itemPreco CardCart" className='product_cart_confirm_product_price'>R${valor * Random()}<sup>{subValor}</sup><sub className='product_cart_confirm_product_subtext'>10x Sem juros</sub></h2>
              </Link>
            </div>
            <div className='product_cart_confirm_qauntity'>
              <div className="ui small buttons product_cart_confirm">
                <p className='product_cart_confirm'>Quantidade: {Random()}</p>
              </div>
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

export default ProductCartConfirm