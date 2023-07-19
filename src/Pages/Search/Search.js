import React from 'react'
import './Search.css'

//Importando os componentes
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SmallProductCard from '../../Components/SmallProductCard/SmallProductCard'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';

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

  return (
    <div>
      {!verify() ? <Header /> : <HeaderLogin />}
      <div className="ui grid search">
        <div className="two column row search">
          <div className="ui row search">
            <div className="column filter">
              <div className="search_filter_search">
                <h1 className="ui header filter">FILTROS</h1>
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                  <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                  <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                  <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                  <label className="desc" htmlFor="Sincronos">Síncronos</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                  <label className="desc" htmlFor="Aneis">Anéis</label>
                </div>

              </div>
            </div>
          </div>
          <div class="ui row searchItens">
            <div class="column itens">
              <div id="produtos" className="ui grid searchItens">
                {numero.map((i) => (
                  <div className="four wide column" key={i} >
                    <SmallProductCard />
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