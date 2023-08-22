//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Search.css'

//Importando os componentes
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import SmallProductCard from '../../Components/ProductCardSmaller/ProductCardSmaller'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import Filter from '../../Components/Filter/Filter'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

//Importando as imagens
import magnifyingGlass from "../../assets/img/Search.png"

//Importando os icones
import { BsGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'


function Search() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query') || '';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.findAll()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

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
      {!verify() ? <Header /> : <HeaderLogin />}
      <div className='container_breadcrumb'>
        <div className="ui breadcrumb">
          <Link to="/" className="section">Home</Link>
          <i className="right arrow icon divider"></i>
          <div className="section">Pesquisa: <b>{searchTerm}</b></div>
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
      <div className='container_search_page_layout'>
        <div className='container_search_page_detail'>
          <div className='container_search_page'>
            <Filter />
          </div>
          {isGrid ? (
            <div className="container_category_bar">
              <div className="box_category_bar">
                {products.map((product) => (
                  <div className="category_itens" key={i} >
                    <SmallProductCard key={product.id} product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container_search_bar">
              <div className="box_search_bar">
                {products.map((product) => (
                  <div className="searchItens">
                    <CategoryCard key={product.id} product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
  const renderMobileView = () => (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_breadcrumb_mobile'>

        <div className="ui breadcrumb">
          <Link to="/" className="section">Home</Link>
          <i className="right arrow icon divider"></i>
          <div className="section">Pesquisa: <b>{searchTerm}</b></div>
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
            <Filter />
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
        <Footer />
      </div>
    </>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}

export default Search;