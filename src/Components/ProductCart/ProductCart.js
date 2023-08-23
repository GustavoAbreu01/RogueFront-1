//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCart.css'

//importando as frameworks
import { Link } from "react-router-dom";

//Importando as imagens
import motors from "../../assets/img/motores.png"


function ProductCart(item) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [quantidade, setQuantidade] = React.useState(1);
  const [valor, setValor] = React.useState(1);
  const [subValor, setSubValor] = React.useState(99);

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

  function aumentarQuantidade() {
    setQuantidade(quantidade + 1);
  }

  function diminuirQuantidade() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  React.useEffect(() => {
    if (quantidade > 1) {
      setValor(quantidade * 450);
    } else {
      setValor(450);
    }
  }, [quantidade]);

  const deleteItens = (item) => {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
    const index = productsInCart.findIndex(product => product.id === item.id);
    if (index !== -1) {
      productsInCart.splice(index, 1);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
        // You might also want to update the component state to reflect the change
    }
    window.location.reload();
};

  const renderDesktopView = () => (
    <>
      <div className="container_card_cart">
        <div className="box_product_cart">
          <div className="product_cart_card" style={{ color: 'black' }}>
            <div id="imgItens CardCart">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_informations">
              <Link to="/product">
                <h2 className="product_cart_item_name"></h2>
                <p className="product_cart_complement" >Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
                <h2 id="itemPreco CardCart" className='product_cart_item_price'>R${valor}<sup>{subValor}</sup><sub className='product_cart_subtext'>10x Sem juros</sub></h2>
              </Link>
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
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="product_cart_informations">
              <Link to="/product">
                <h2 className="product_cart_item_name">W12 Monofásico</h2>
                <p className="product_cart_complement" >Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
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
                <Link to="/product">
                  <img src={motors} width="125" height="" />
                </Link>
              </div> 
              <div className="product_cart_informations_mobile">
                <Link to="/product">
                  <h2 className="product_cart_item_name_mobile">W12 Monofásico</h2>
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