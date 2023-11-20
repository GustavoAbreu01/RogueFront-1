//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './ProductCategory.css'

//importando as frameworks
import { Divider, Dropdown, Select } from 'semantic-ui-react';
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
  const [isGrid, setIsGrid] = useState(true);
  const [search, setSearch] = useState(1);
  const [totally, setTotally] = useState([]);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [selectedPagination, setSelectedPagination] = useState(1);
  const [paginationIntruct, setPaginationIntruct] = useState(20);
  const [productsCategory, setProductsCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();

  const startIndex = (currentPage - 1) * paginationIntruct;
  const endIndex = startIndex + paginationIntruct;

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

  useEffect(() => {
    const startIndex = (currentPage - 1) * paginationIntruct;
    const endIndex = startIndex + paginationIntruct;
    const productsToDisplay = productsCategory.slice(startIndex, endIndex);
    setProducts(productsToDisplay);

    getProductsCategory();
    setCurrentPage(1);

    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedPagination, paginationIntruct, productsCategory]);

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

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(totally.length / paginationIntruct);

    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className="pagination_category"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getProductsCategory();
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
              <div className="field pagination">
                <p className='text_pagination_inst'>Ordenar por:</p>
                <select onChange={handlePaginationChange} className='select_search'>
                  <option value="1">20 por página</option>
                  <option value="2">40 por página</option>
                  <option value="3">60 por página</option>
                  <option value="4">80 por página</option>
                </select>
              </div>
              <div className="field pagination">
                <p className='text_pagination_inst'>Procurar por:</p>
                <select onChange={handlePageChange} className='select_search'>
                  <option value="1">Mais Acessados</option>
                  <option value="2">Mais Procurados</option>
                  <option value="3">Preço Crescente</option>
                  <option value="4">Preço Decrescente</option>
                </select>
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
                    <SmallProductCard key={product.id} product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='pagination_buttons'>
          {renderPaginationButtons()}
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
          <div className='container_pagination'>
            <div className='pagination_options_mobile'>
              <div className="field pagination_mobile">
                <select className='select_search'>
                  <option value="1">20 p/ pág</option>
                  <option value="2">40 p/ pág</option>
                  <option value="3">60 p/ pág</option>
                  <option value="4">80 p/ pág</option>
                </select>
              </div>
              <div className="field pagination_mobile">
                <select className='select_search'>
                  <option value="1">Mais Acessados</option>
                  <option value="2">Mais Procurados</option>
                  <option value="3">Preço Crescente</option>
                  <option value="4">Preço Decrescente</option>
                </select>
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
        <div className='text_pagination_totally'>
          <p className='text_pagination_totally'>Produtos Totais: <b>850</b></p>
        </div>
      </div>
      <div className='container_category_page_layout_mobile'>
        <div className='container_category_page_detail_mobile'>
          <div className='container_category_page_mobile'>
            <FilterSearch category={category} />
          </div>
          {isGrid ? (
            <div className="container_category_bar_mobile">
              <div className="box_category_bar">
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
                    <SmallProductCard key={product.id} product={product} />
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

};

export default ProductCategory;
