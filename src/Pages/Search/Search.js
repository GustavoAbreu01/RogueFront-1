//Importando o React e o CSS
import React, { useState } from 'react'
import './Search.css'

//Importando os componentes
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SmallProductCard from '../../Components/ProductCardSmaller/ProductCardSmaller'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';

//importando as frameworks
import { Divider } from 'semantic-ui-react';

//Importando as imagens
import mignifyingGlass from "../../assets/img/Search.png"

function Search() {

  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

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
      <div className='container_search_page_layout'>
        <div className='container_search_page_detail'>
          <div className='container_search_page'>
            <div className="search_second_filter">
              <img className="icon_search" src={mignifyingGlass} />
              <h1 className="ui header motor search">Filtros</h1>
              <br />
              <div className='container_search_filter_expanded'>
                <div className={`search_filter_dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Voltagem

                  <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                </div>
                {isOpen && (
                  <div className='search_transition'>
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                      <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                      <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                      <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                      <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                      <label className="desc search" htmlFor="Aneis">Anéis</label>
                    </div>
                    <br />
                    <br />

                  </div>


                )
                }
              </div>
              <Divider></Divider>
              <div className='container_search_filter_expanded'>
                <div className={`search_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência

                  <i className={`angle down icon search ${isOpen2 ? 'open' : ''}`}></i>
                </div>
                {isOpen2 && (
                  <div className='search_transition'>
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                      <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                      <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                      <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                      <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                      <label className="desc search" htmlFor="Aneis">Anéis</label>
                    </div>
                    <br />
                    <br />
                  </div>
                )
                }
              </div>
              <Divider></Divider>
              <div className='container_search_filter_expanded'>
                <div className={`search_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequência

                  <i className={`angle down icon search ${isOpen3 ? 'open' : ''}`}></i>
                </div>
                {isOpen3 && (
                  <div className='search_transition'>
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                      <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                      <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                      <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                      <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox search">
                      <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                      <label className="desc search" htmlFor="Aneis">Anéis</label>
                    </div>
                    <br />
                    <br />
                  </div>

                )
                }
              </div>
              <Divider></Divider>
              <div className='container_search_filter_expanded'>
                <div className={`search_filter_dropdown ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Cor

                  <i className={`angle down icon search ${isOpen4 ? 'open' : ''}`}></i>
                </div>
                {isOpen4 && (
                  <div className='search_transition'>
                    <div className="ui checkbox">
                      <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                      <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox">
                      <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                      <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox">
                      <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                      <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox">
                      <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                      <label className="desc" htmlFor="Sincronos">Síncronos</label>
                    </div>
                    <br />
                    <br />
                    <div className="ui checkbox">
                      <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                      <label className="desc" htmlFor="Aneis">Anéis</label>
                    </div>
                    <br />
                    <br />
                  </div>
                )
                }
              </div>
            </div>
          </div>



          <div className="container_search_bar">
            <div className="box_search_bar">
              {numero.map((i) => (
                <div className="searchItens" key={i} >
                  <SmallProductCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Search