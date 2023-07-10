import React from 'react'
import './ProductCart.css'
import { Link } from "react-router-dom";
import motors from "../../assets/img/motores.png"


function ProductCart() {

  const [quantidade, setQuantidade] = React.useState(1);
  const [valor, setValor] = React.useState(1);
  const [subValor, setSubValor] = React.useState(99);

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

  return (
    <>
      <div className="row itens CardCart">
        <div className="column itens CardCart">
          <div className="itemContent CardCart" style={{ color: 'black' }}>
            <div id="imgItens CardCart">
              <Link to="/product">
                <img src={motors} width="125" height="" />
              </Link>
            </div>
            <div className="itemInfo CardCart">
              <Link to="/product">
                <h2 className="itemNome CardCart">W12 Monofásico</h2>
                <h2 id="itemPreco CardCart" className='itemPreco CardCart'>R${valor}<sup>{subValor}</sup><sub className='subtext CardCart'>10x Sem juros</sub></h2>
                <p className="itemComplement CardCart">Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
              </Link>
            </div>
            <div className='buttons CardCart'>
              <button class="ui icon button CardCart">
                <i className="trash alternate icon CardCart"></i>
              </button>
              <div className="ui small buttons CardCart">
                <button onClick={diminuirQuantidade} className="ui button active CardCart">-</button>
                <div className='or CardCart' data-text={quantidade}></div>
                <button onClick={aumentarQuantidade} className="ui button CardCart">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCart