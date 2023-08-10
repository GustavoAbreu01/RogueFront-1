//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCategory.css'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//Importando os componentes
import SmallProductCard from '../../Components/ProductCardSmaller/ProductCardSmaller';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

//Importando as imagens
import iconMotor from "../../assets/img/iconeMotor.png"

//Importando os icones
import { BsGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'


function ProductCategory() {

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const [isGrid, setIsGrid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(1);
  const [pagination, setPagination] = useState(1);

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

  const alterarPagina = (e, { value }) => {
    setPagination(value);
    return pagination;
  };

  const alterarSearch = (e, { value }) => {
    setSearch(value);
    return search;
  };

  const toggleLayout = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const optionsPagination = [
    { key: 1, text: '20 por página', value: 1 },
    { key: 2, text: '40 por página', value: 2 },
    { key: 3, text: '60 por página', value: 3 },
    { key: 4, text: '80 por página', value: 4 },
  ];

  const optionsSearch = [
    { key: 1, text: 'Mais Acessados', value: 1 },
    { key: 2, text: 'Mais Procurados', value: 2 },
    { key: 3, text: 'Preço Crescente ', value: 3 },
    { key: 3, text: 'Preço Decrescente', value: 4 },
  ];

  const optionsPaginationMobile = [
    { key: 1, text: '20 p/ pág', value: 1 },
    { key: 2, text: '40 p/ pág', value: 2 },
    { key: 3, text: '60 p/ pág', value: 3 },
    { key: 4, text: '80 p/ pág', value: 4 },
  ];


  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  const renderDesktopView = () => (
    <>
      {/* {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal /> */}
      <div className='container_breadcrumb'>
        <div className="ui breadcrumb">
          <Link to="/" className="section">Home</Link>
          <i className="right chevron icon divider"></i>
          <Link to="/" className="section">Categoria</Link>
          <i className="right arrow icon divider"></i>
          <div className="active section">Motores</div>
        </div>
      </div>
      <div className='box_pagination_config'>
        <div className='container_pagination_config'>
          <div className='container_pagination'>
            <div className='pagination_options'>
              <div className='text_pagination_totally'>
                <p className='text_pagination_totally'>Produtos Totais: <b>850</b></p>
              </div>
              <div className="field pagination">
                <p className='text_pagination_inst'>Ordenar por:</p>
                <Dropdown
                  className='dropDownCard'
                  value={pagination}
                  fluid
                  selection
                  options={optionsPagination}
                  onChange={alterarPagina}
                />
              </div>
              <div className="field pagination">
                <p className='text_pagination_inst'>Procurar por:</p>
                <Dropdown
                  className='dropDownCard'
                  value={search}
                  fluid
                  selection
                  options={optionsSearch}
                  onChange={alterarSearch}
                />
              </div>
            </div>
            <div className='icons_ordenation'>
              <BsGridFill
                className={`icon_pagination ${!isGrid ? 'active' : ''}`}
                size={35}
                onClick={toggleLayout}
              />
              <FaListUl
                className={`icon_pagination ${isGrid ? 'active' : ''}`}
                size={35}
                onClick={toggleLayout}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container_category_page_layout'>
        <div className='container_category_page_detail'>
          <div className='container_category_page'>
            <div className="category_second_filter">
              <img className="icon_category" src={iconMotor} />
              <h1 className="ui header motor search">Motores</h1>
              <br />
              <div className='container_category_filter_expanded'>
                <div className={`category_filter_dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Voltagem

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
              <div className='container_category_filter_expanded'>
                <div className={`category_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência

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
              <div className='container_category_filter_expanded'>
                <div className={`category_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequência

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
              <div className='container_category_filter_expanded'>
                <div className={`category_filter_dropdown ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Cor

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

          {isGrid ? (
            <div className="container_category_bar">
              <div className="box_category_bar">
                {numero.map((i) => (
                  <div className="category_itens" key={i} >
                    <CategoryCard />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container_search_bar">
              <div className="box_search_bar">
                {numero.map((i) => (
                  <div className="searchItens" key={i} >
                    <SmallProductCard />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
  const renderMobileView = () => (
    <>
          {/* {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal /> */}
          <div className='container_breadcrumb_mobile'>
          <div className="ui breadcrumb">
            <Link to="/" className="section">Home</Link>
            <i className="right chevron icon divider"></i>
            <Link to="/" className="section">Categoria</Link>
            <i className="right arrow icon divider"></i>
            <div className="active section">Motores</div>
          </div>
        </div>
        <div className='box_pagination_config_mobile'>
          <div className='container_pagination_config_mobile'>
            <div className='container_pagination_mobile'>
              <div className='pagination_options_mobile'>
                <div className="field pagination_mobile">
                  <Dropdown
                    className='dropDownCard'
                    value={pagination}
                    fluid
                    selection
                    options={optionsPaginationMobile}
                    onChange={alterarPagina}
                  />
                </div>
                <div className="field pagination_mobile">
                  <Dropdown
                    className='dropDownCard'
                    value={search}
                    fluid
                    selection
                    options={optionsSearch}
                    onChange={alterarSearch}
                  />
                </div>
              </div>
             
              <div className='icons_ordenation_mobile'>
                <BsGridFill
                  className={`icon_pagination_mobile ${!isGrid ? 'active' : ''}`}
                  size={35}
                  onClick={toggleLayout}
                />
                <FaListUl
                  className={`icon_pagination_mobile ${isGrid ? 'active' : ''}`}
                  size={35}
                  onClick={toggleLayout}
                />
              </div>
            </div>
            
          </div>
          <div className='text_pagination_totally_mobile'>
                  <p className='text_pagination_totally_mobile'>Produtos Totais: <b>850</b></p>
                </div>
        </div>
        <div className='container_category_page_layout_mobile'>
          <div className='container_category_page_detail_mobile'>
            <div className='container_category_page_mobile'>
              <div className="category_second_filter_mobile">
                <h2 className="search_mobile">Motores</h2>
                <br />
                <div className='container_category_filter_expanded_mobile'>
                  <div className={`category_filter_dropdown_mobile ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Voltagem
  
                    <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                  </div>
                  {isOpen && (
                    <div className='search_transition_mobile'>
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
                <div className='container_category_filter_expanded_mobile'>
                  <div className={`category_filter_dropdown_mobile ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência
  
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
                <div className='container_category_filter_expanded_mobile'>
                  <div className={`category_filter_dropdown_mobile ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequência
  
                    <i className={`angle down icon search ${isOpen3 ? 'open' : ''}`}></i>
                  </div>
                  {isOpen3 && (
                    <div className='search_transition_mobile'>
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
                <div className='container_category_filter_expanded_mobile'>
                  <div className={`category_filter_dropdown_mobile ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Cor
  
                    <i className={`angle down icon search ${isOpen4 ? 'open' : ''}`}></i>
                  </div>
                  {isOpen4 && (
                    <div className='search_transition_mobile'>
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
  
            {isGrid ? (
              <div className="container_category_bar_mobile">
                <div className="box_category_bar_mobile">
                  {numero.map((i) => (
                    <div className="category_itens_mobile" key={i} >
                      <CategoryCard />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="container_search_bar_mobile">
                <div className="box_search_bar_mobile">
                  {numero.map((i) => (
                    <div className="searchItens_mobile" key={i} >
                      <SmallProductCard />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <Footer /> */}
        </div>
      </>
    )
    const getViewToRender = () => {
      if (screenSize.width > 900) {
        return renderDesktopView();
        // } else if (screenSize.width < 900 && screenSize.width > 500) {
        //   return renderTabletView();
      } else {
        return renderMobileView();
      }
    };
  
    return <>{getViewToRender()}</>;
  
};

export default ProductCategory;
