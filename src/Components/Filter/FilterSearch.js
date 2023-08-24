//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './FilterSearch.css'

//Importando os componentes
import Filter from './CategoryFilters/Filter';

function FilterSearch({ category }) {

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
