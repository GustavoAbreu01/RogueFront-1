import React, { useState } from 'react';
import './Save.css';
import HaveProducts from './haveProducts';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import SaveCard from '../../Components/SaveCard/SaveCard';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import RecommendedSave from '../../Components/RecomandedProductsSave/RecommendedSave';


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
        <div className='boxTitleSimilarOrder'>
          <BsFillBookmarkFill color='var(--white)' size={40} />
          <h1 className='titleSimilar'>Salvos</h1>
        </div>
        <button onClick={() => adicionarProdutoAoLocalHost()}>Adicionar</button>
        <div className="noHaveProduct">
          <h1>Aqui ficarão seus itens salvos</h1>
        </div>
      </>
    );
  } else {
    return (
      <><div className='titles'>
        <div className='boxTitleSimilarOrder'>
          <BsFillBookmarkFill color='var(--white)' size={40} />
          <h1 className='titleSimilar'>Salvos</h1>
        </div>
        <div className='boxTitleSimilarSave'>
          <AiFillStar color='var(--white)' size={40} />
          <h1 className='titleSimilar'>Recomendados</h1>
        </div>
        </div>
        <div className='IAProducts Save'>
          <div className="products Save">
            {products.map((item) => {
              return <div key={item}><SaveCard item={item} /></div>;
            })}
          </div>
          <div className='produtingos'>
            <RecommendedSave/>
            <RecommendedSave/>
            <RecommendedSave/>
            <RecommendedSave/>
            <RecommendedSave/>
            <RecommendedSave/>
          </div>
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