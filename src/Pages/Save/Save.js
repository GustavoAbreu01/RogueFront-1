import React, { useState } from 'react';
import './Save.css';
import HaveProducts from './Products';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import wegner from '../../assets/img/WagnerDormindo.png';

function Product() {
  const [products, setProducts] = useState([]);

  const produtoStatico = () => {
    const produto = {
      name: 'Motô',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
      price: 'R$ 00,00',
    };
    return produto;
  }

  const adicionarProdutoAoLocalHost = () => {
    const listaProdutos = JSON.parse(localStorage.getItem('products')) || [];
    listaProdutos.push(produtoStatico());
    localStorage.setItem('products', JSON.stringify(listaProdutos));
    setProducts(listaProdutos); // Atualiza o estado com a nova lista de produtos
    console.log('produto adicionado');
  };

  const getLista = () => {
    const lista = JSON.parse(localStorage.getItem('products'));
    return lista || []; // Retorna uma lista vazia caso seja null
  };

  const lista = getLista();

  if (lista.length === 0) {
    return (
      <>
        <button onClick={adicionarProdutoAoLocalHost}>aaaaa</button>
        <div className="noHaveProduct">
          <img alt="noHaveProduct" src={wegner} />
          <h1>Está tudo muito quieto por aqui...</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container_salvos">
          <h1>Salvos</h1>
        </div>
        <div className="salvos_products">
          {products.map((item) => {
            return <HaveProducts item={item} />;
          })}
        </div>
      </>
    );
  }
}

function Salvos() {
  return (
    <>
      <Header />
      <div>{Product()}</div>
      <Footer />
    </>
  );
}

export default Salvos;