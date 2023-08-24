//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCategory.css'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

//Importando os componentes
import SmallProductCard from '../../Components/ProductCardSmaller/ProductCardSmaller';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

//Importando os icones
import { BsGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import FilterSearch from '../../Components/Filter/FilterSearch';
import { ProductService } from '../../Service';


function ProductCategory() {
  const [products, setProducts] = useState([]);
  const [totally, setTotally] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  const [search, setSearch] = useState(1);
  const [selectedPagination, setSelectedPagination] = useState(1);
  const [paginationIntruct, setPaginationIntruct] = useState(20);
  const [productsCategory, setProductsCategory] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();

  const startIndex = (currentPage - 1) * paginationIntruct;
  const endIndex = startIndex + paginationIntruct;
  const totalPages = Math.ceil(productsCategory.length / paginationIntruct);

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const getProductsCategory = async () => {
    const products = await ProductService.findCategory(paginationIntruct, currentPage);
    const total = await ProductService.findAllProducts();
    if (products) {
      setProducts(total);
      setTotally(total);
      setProductsCategory(products);
    } else {
      setProducts([]);
      setTotally([]);
      setProductsCategory([]);
    }
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
    { key: 4, text: 'Preço Decrescente', value: 4 },
  ];

  const optionsPaginationMobile = [
    { key: 1, text: '20 p/ pág', value: 1 },
    { key: 2, text: '40 p/ pág', value: 2 },
    { key: 3, text: '60 p/ pág', value: 3 },
    { key: 4, text: '80 p/ pág', value: 4 },
  ];

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    getProductsCategory();
    const startIndex = (currentPage - 1) * paginationIntruct;
    const endIndex = startIndex + paginationIntruct;
    if (productsCategory.length > 0) {
      const productsToDisplay = productsCategory.slice(startIndex, endIndex);
      setProducts(productsToDisplay);
    }

    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedPagination, currentPage, paginationIntruct, productsCategory]);

  const handlePaginationChange = (e, { value }) => {
    setSelectedPagination(value);
    let newPaginationIntruct;
    if (value === 1) {
      newPaginationIntruct = 20;
    } else if (value === 2) {
      newPaginationIntruct = 40;
    } else if (value === 3) {
      newPaginationIntruct = 60;
    } else if (value === 4) {
      newPaginationIntruct = 80;
    }
    setPaginationIntruct(newPaginationIntruct);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatCategoryTitle = (category) => {
    if (category === "motors") {
      return category = "Motores"
    } else if (category === "ink") {
      return category = "Tintas e Vernizes"
    } else if (category === "automation") {
      return category = "Automação"
    } else if (category === "building") {
      return category = "Painéis"
    } else if (category === "security") {
      return category = "Seguração"
    }
  };

  const renderDesktopView = () => (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_breadcrumb'>
        <div className="ui breadcrumb">
          <Link to="/" className="section">Home</Link>
          <i className="right chevron icon divider"></i>
          <Link to="/" className="section">Categoria</Link>
          <i className="right arrow icon divider"></i>
          <div className="active section">{formatCategoryTitle(category)}</div>
        </div>
      </div>
      <div className='box_pagination_config'>
        <div className='container_pagination_config'>
          <div className='container_pagination'>
            <div className='pagination_options'>
              <div className='text_pagination_totally'>
                <p className='text_pagination_totally'>Produtos Totais: <b>{totally.length}</b></p>
              </div>
              <div className="field pagination">
                <p className='text_pagination_inst'>Ordenar por:</p>
                <Dropdown
                  className='dropDownCard'
                  value={selectedPagination}
                  fluid
                  selection
                  options={optionsPagination}
                  onChange={handlePaginationChange}
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
            <FilterSearch category={category} />
          </div>
          {isGrid ? (
            <div className="container_category_bar">
              <div className="box_category_bar">
                {productsCategory.slice(startIndex, endIndex).map((product) => (
                  <div className="category_itens">
                    <CategoryCard key={product.id} product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container_search_bar">
              <div className="box_search_bar">
                {productsCategory.slice(startIndex, endIndex).map((product) => (
                  <div className="searchItens">
                    <CategoryCard key={product.id} product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="pagination-buttons">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`pagination-button ${currentPage === index + 1 ? 'active-pagination-button' : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
        <Footer />
      </div>
    </>
  )
  const renderMobileView = () => (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
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
                  value={selectedPagination}
                  fluid
                  selection
                  options={optionsPaginationMobile}
                  onChange={handlePaginationChange}
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
            <FilterSearch category={category} />
          </div>
          {isGrid ? (
            <div className="container_category_bar_mobile">
              <div className="box_category_bar_mobile">
                {products.map((product) => (
                  <div className="category_itens">
                    <CategoryCard key={product.id} product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container_search_bar_mobile">
              <div className="box_search_bar_mobile">
                {products.map((product) => (
                  <div className="searchItens">
                    <CategoryCard key={product.id} product={product} />
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
      // } else if (screenSize.width < 900 && screenSize.width > 500) {
      //   return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;

};

export default ProductCategory;
