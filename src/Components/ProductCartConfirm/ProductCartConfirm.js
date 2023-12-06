//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCartConfirm.css'

//importando as frameworks
import { Link } from "react-router-dom";

function ProductCartConfirm({ item }) {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [subValor, setSubValor] = React.useState(99);


  useEffect(() => {
    console.log(item);
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

  const renderDesktopView = () => (
    <>
      <div className="container_product_cart_confirm">
        <div className="box_itens_product_cart_confirm">
          <div className="product_cart_confirm_item_content" style={{ color: 'black' }}>
            <div id="product_cart_confirm_image">
              <Link to={`/product/${item.product.code}`}>
                <img src={item.product.image} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_confirm_item_info">
              <Link to={`/product/${item.product.code}`}>
                <h2 className="product_cart_confirm_product_name">{item.product.model}</h2>
                <p className="product_cart_confirm_product_description">{item.product.motors.typeDaCarcaca} -
                  {" " + item.product.motors.codeDaCarcaca}
                  {" " + item.product.motors.protection}
                  {" " + item.product.motors.regime}</p>
                {renderPrice()}
              </Link>
            </div>
            <div className='product_cart_confirm_quantity'>
              <div className="ui small buttons product_cart_confirm">
                <p className='product_cart_confirm'>Quantidade: {item.quantity}</p>
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
              <Link to={`/product/${item.product.code}`}>
                <img src={item.product.image} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_confirm_item_info">
              <Link to={`/product/${item.product.code}`}>
                <h2 className="product_cart_confirm_product_name">{item.product.model}</h2>
                <p className="product_cart_confirm_product_description">{item.product.motors.typeDaCarcaca} -
                  {" " + item.product.motors.codeDaCarcaca}
                  {" " + item.product.motors.protection}
                  {" " + item.product.motors.regime}</p>
                {renderPrice()}
              </Link>
            </div>
            <div className='product_cart_confirm_quantity'>
              <div className="ui small buttons product_cart_confirm">
                <p className='product_cart_confirm'>Quantidade: {item.quantity}</p>
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
          <div className="product_cart_confirm_item_content_mobile" style={{ color: 'black' }}>
            <div id="product_cart_confirm_image">
              <Link to={`/product/${item.product.code}`}>
                <img src={item.product.image} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_confirm_item_info_mobile">
              <Link to="/product">
                <h2 className="product_cart_confirm_product_name_mobile">{item.product.model}</h2>
                <h2 id="itemPreco CardCart" className='product_cart_confirm_product_price_mobile'>R${ }<sup>{subValor}</sup><sub className='product_cart_confirm_product_subtext_mobile'>10x Sem juros</sub></h2>
              </Link>
              <div className='product_cart_confirm_quantity_mobile'>
                <p className='product_cart_confirm_mobile'>Quantidade: {item.quantity}</p>
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