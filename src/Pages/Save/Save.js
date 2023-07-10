import React, { useState } from 'react';
import './Save.css';
import HaveProducts from './haveProducts';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import SaveCard from '../../Components/SaveCard/SaveCard';

function Product() {
  const [products, setProducts] = useState([]);

  const produtoStatico = () => {
    const produto = {
      name: 'Motô',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
      stockSize: 25,
      price: 10.0,
    };
    return produto;
  }

  const adicionarProdutoAoLocalHost = () => {
    const listaProdutos = JSON.parse(localStorage.getItem('products')) || [];
    listaProdutos.push(produtoStatico());
    localStorage.setItem('products', JSON.stringify(listaProdutos));
    setProducts(listaProdutos); // Atualiza o estado com a nova lista de produtos
    // let prod = produtoStatico()
    // ProductService.create(prod);
    console.log('produto adicionado');
  };

  const getLista = () => {
    const lista = JSON.parse(localStorage.getItem('products'));
    return lista || []; // Retorna uma lista vazia caso seja null
  };

  const lista = getLista();

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  if (lista.length === 0) {
    return (
      <>
        <button onClick={() => adicionarProdutoAoLocalHost()}>aaaaa</button>
        <div className="noHaveProduct">
          <img src='' alt="noHaveProduct" />
          <h1>Está tudo muito quieto por aqui...</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="salvos">
          <h1>Salvos</h1>
        </div>
        <div className='saveCard'>

        </div>
        <div className="products Save">
          <SaveCard/>
          <SaveCard/>
          <SaveCard/>
          {products.map((item) => {
            return <div key={item}><HaveProducts item={item} /></div>;
          })}
        </div>
      </>
    );
  }
}

function Salvos() {

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div>{Product()}</div>
      <Footer />
    </>
  );
}

export default Salvos;