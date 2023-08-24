//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './FilterSearch.css'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

//Importando os componentes
import SmallProductCard from '../ProductCardSmaller/ProductCardSmaller';
import CategoryCard from '../CategoryCard/CategoryCard';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import WeggnerModal from '../WeggnerModal/WeggnerModal';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Filter from './CategoryFilters/Filter';

//Importando as imagens
import iconSearch from "../../assets/img/Search.png"

function FilterSearch({ category }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const renderDesktopView = () => (
        <>
            <div className="filter">
                <Filter category={category} />
            </div>
        </>
    )
    const renderMobileView = () => (
        <>
            <div className='container_category_filter_expanded_mobile'>
                <Filter category={category} />
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

export default FilterSearch;
