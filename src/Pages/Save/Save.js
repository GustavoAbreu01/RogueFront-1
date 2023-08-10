//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Save.css';


import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import SaveCard from '../../Components/SaveCard/SaveCard';
import RecommendedSave from '../../Components/RecomandedProductsSave/RecommendedSave';

//Importando os ícones
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

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

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

  if (lista.length === 0) {
    return (
      <>
        <div className='container_save_titles'>

        </div>
        <button onClick={() => adicionarProdutoAoLocalHost()}>Adicionar</button>

      </>
    );
  } else {

    return (

      <><div className='container_save_titles'>
        <div className='save_saved_product'>
          <div className='box_title_similar_save'>
            <BsFillBookmarkFill color='var(--white)' size={40} />
            <h1 className='save_title'>Salvos</h1>
          </div>
            {products.map((item) => {
              return <div key={item}><SaveCard item={item} /></div>;
            })}
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
      {/* {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal /> */}
      <div>{Product()}</div>
      {/* <Footer /> */}
    </>
  );
}

export default Salvos;