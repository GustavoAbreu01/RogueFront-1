import React, { useState, useEffect } from 'react';
import './Search.css'

//Importando os componentes
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SmallProductCard from '../../Components/ProductCardSmaller/ProductCardSmaller'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import ProductService from '../../Service/ProductService';

function Search() {

  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
      ProductService.findAll()
          .then((data) => setProducts(data))
          .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div>
      {!verify() ? <Header /> : <HeaderLogin />}
      <div className="ui grid search container_searchBar">
        <div className="two column row search box_searchBar">
          <div className="ui row search">
            <div className="column filter searchBar_filter">
              <div className="search-filter searchBar_filter">
                <h1 className="ui header filter searchBar_filter">FILTROS</h1>
                <br />
                <div class="ui checkbox searchBar_checkbox">
                  <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                  <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                </div>
                <br />
                <br />
                <div class="ui checkbox searchBar_checkbox">
                  <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                  <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox searchBar_checkbox">
                  <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                  <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox searchBar_checkbox">
                  <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                  <label className="desc" htmlFor="Sincronos">Síncronos</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox searchBar_checkbox" >
                  <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                  <label className="desc" htmlFor="Aneis">Anéis</label>
                </div>

              </div>
            </div>
          </div>
          <div class="ui row searchItens searchBar_checkbox ">
            <div class="column itens">
              <div id="produtos" className="ui grid searchItens">


              {products.map((product) => (
                    <div className="four wide column" >
                        <SmallProductCard key={product.id} product={product} />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div>
  );
};


export default Search