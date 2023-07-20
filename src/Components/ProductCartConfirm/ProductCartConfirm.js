import React from 'react'
import './ProductCartConfirm.css'
import { Link } from "react-router-dom";
import motors from "../../assets/img/motores.png"


function ProductCartConfirm() {

  const [quantidade, setQuantidade] = React.useState(1);
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

  return (
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
                <p className="product_cart_confirm_product_description">Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
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
  );
};
export default ProductCartConfirm