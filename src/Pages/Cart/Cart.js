import React, { useState } from 'react';
import HeaderLogin from './components/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Cart() {
  const [verificacao, setVerificacao] = useState(true);
  const [quantidade, setQuantidade] = useState  (1);
  const motores = "caminho/da/imagem";
  const precoTotal = 10.0; // substitua pelo valor correto
  const estoque = 100; // substitua pelo valor correto
  const cor = "blue"; // substitua pela cor desejada
  const passos = [1, 2, 3]; // substitua pelos passos corretos

  const trocarIcon = () => {
    // lógica para trocar o ícone
  };

  const menos = () => {
    setQuantidade((prevQuantidade) => prevQuantidade - 1);
  };

  const mais = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  const verificaEstoque = () => {
    // lógica para verificar o estoque
  };

  return (
    <>
      {verificacao ? (
        <HeaderLogin />
      ) : (
        <Header />
      )}
      <div className="tudo">
        <div className="box-resumo">
          <h2 className="resumoDaCompra">RESUMO</h2>
          <div className="lineDetailResumo"></div>
          <p>Total à prazo</p>
          <button className="finalButton">Finalizar pedido</button>
          <button className="contButton">Continuar pedido</button>
        </div>
        <div className="box-recomendado">
          <h2 className="recomedadoDaCompra">Recomendados para você!</h2>
          <div className="lineDetailRecomendado"></div>
        </div>
        <div className="corpo">
          <div className="progressBar">
            <div className="line">
              {passos.map((i) => (
                <div className="passPoint" key={i}></div>
              ))}
            </div>
          </div>
          <br />
          <div className="body-product">
            <h2 className="carrinhoCompra">Carrinho de Compras</h2>
            <div className="lineDetailCarrinho"></div>
            <img className="imgProd" src={motores} alt="" />
            <p className="titleProd">Motor de Chapa Aberta - IP21</p>
            <p className="descProd">Tensão - 127/220 ou 220/440 V</p>
            <p className="subDescProd">Preto fosco (Munsell N1)</p>
            <p className="qtdEstoque">
              Em estoque: <span style={{ color: cor, fontWeight: 'bold' }}>{estoque} unidades</span>
            </p>
            <p className="precoTotal">R$ {(precoTotal * quantidade).toFixed(2)}</p>
            <p className="parcelas">
              até 12x de{' '}
              <span style={{ color: cor, fontWeight: 'bold' }}>
                R$ {(precoTotal * quantidade / 12).toFixed(2)}
              </span>
            </p>
            <div className="modificadorQuantidade">
              <button className="removeButton">
                <img
                  className="removeIcon"
                  onMouseEnter={trocarIcon}
                  onMouseLeave={trocarIcon}
                  src={Icon}
                  alt=""
                />
              </button>
              <button className="btnMenos" onClick={menos}>-</button>
              <input className="inputQuantidade" type="text" value={quantidade} onChange={verificaEstoque} />
              <button className="btnMais" onClick={mais}>+</button>
            </div>
            <div className="lineDetailCarrinho"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
