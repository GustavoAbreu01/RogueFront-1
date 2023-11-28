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
import FilterSearch from '../../Components/Filter/FilterSearch';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

//Importando os icones
import { BsGridFill } from 'react-icons/bs'
import { FaListUl, FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'
import { ProductService } from '../../Service';


function ProductCategory() {
  const [productsCategory, setProductsCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginationIntruct, setPaginationIntruct] = useState(20);
  const [isGrid, setIsGrid] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const { category } = useParams();

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const alternatePaginationInstruct = (event) => {
    setPaginationIntruct(event.target.value);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = async () => {
    try {
      const totalProducts = await ProductService.getTotalProducts(category);
      const remainingProducts = totalProducts - (currentPage + 1) * paginationIntruct;

      if (remainingProducts > 0) {
        setCurrentPage(currentPage + 1);
      } else {
        setShowNextButton(false);
      }
    } catch (error) {
      console.error("Erro ao obter total de produtos:", error);
    }
  };

  const getProductsCategory = async () => {
    try {
      const products = await ProductService.findCategory(paginationIntruct, currentPage);
      if (products) {
        setProductsCategory(products);
      } else {
        setProductsCategory([]);
      }
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
    }
  };
  const toggleLayout = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  useEffect(() => {
    getProductsCategory();
    setShowNextButton(true);
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, paginationIntruct]);


  const formatCategoryTitle = (category) => {
    if (category === "agronegocio") {
      return category = "Agronegócio"
    } else if (category === "naval") {
      return category = "Naval"
    } else if (category === "mineracao") {
      return category = "Mineração"
    } else if (category === "edificacao") {
      return category = "Edificação"
    } else if (category === "siderurgica") {
      return category = "Siderurgica"
    } else if (category === "alimenticia") {
      return category = "Alimentícia"
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
                <select onChange={alternatePaginationInstruct} className='select_search'>
                  <option value="20">20 por página</option>
                  <option value="40">40 por página</option>
                  <option value="60">60 por página</option>
                  <option value="80">80 por página</option>
                </select>
              </div>
              <div className="field pagination">
                <p className='text_pagination_inst'>Procurar por:</p>
                <select onChange={console.log()} className='select_search'>
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
                {productsCategory.map((product) => (
                  <div className="category_itens" key={product.code}>
                    <CategoryCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container_search_bar">
              <div className="box_search_bar">
                {productsCategory.map((product) => (
                  <div className="searchItens" key={product.code}>
                    <SmallProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='box_pagination_buttons'>
          <button
            className='pagination_button'
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
          {showNextButton && (
            <button className='pagination_button' onClick={handleNextPage}>
              Próximo
            </button>
          )}
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
      </div>
      <div className='container_category_page_layout_mobile'>
        <div className='container_category_page_detail_mobile'>
          <div className='container_category_page_mobile'>
            <FilterSearch category={category} />
          </div>
          {isGrid ? (
            <div className="container_category_bar_mobile">
              <div className="box_category_bar">
                {productsCategory.map((product) => (
                  <div className="category_itens" key={product.id}>
                    <CategoryCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container_search_bar_mobile">
              <div className="box_search_bar_mobile">
                {productsCategory.map((product) => (
                  <div className="searchItens" key={product.id}>
                    <SmallProductCard product={product} />
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
