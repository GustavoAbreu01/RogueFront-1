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
    return random;
  };

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
                <h2 id="itemPreco CardCart" className='itemPreco CardCart'>R${valor * Random()}<sup>{subValor}</sup><sub className='subtext CardCart'>10x Sem juros</sub></h2>
                <p className="itemComplement CardCart">Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...</p>
              </Link>
            </div>
            <div className='CardCartQuantidade'>
              <div className="ui small buttons CardCart">
                <p className='CardCart Confirm'>Quantidade: {Random()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCartConfirm