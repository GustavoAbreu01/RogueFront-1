import React from 'react'

//componentes
import FilterSiderurgia from './FilterSiderurgia/FilterSiderurgia';
import FilterNaval from './FilterNaval/FilterNaval';
import FilterAgro from './FilterAgro/FilterAgro';
import FilterAlimenticia from './FilterAlimenticia/FilterAlimenticia';
import FilterMineracao from './FilterMineracao/FilterMineracao';
import FilterConstrucao from './FilterConstrucao/FilterConstrucao';


function Filter({category}) {

    const changeCategory = () => {
        if (category === "agronegocio") {
            return <FilterAgro/>
        } else if (category === "naval") {
            return <FilterNaval/>
        } else if (category === "mineracao") {
            return <FilterMineracao/>
        } else if (category === "edificacao") {
            return <FilterConstrucao/>
        } else if (category === "siderurgia") {
            return <FilterSiderurgia/>
        } else if (category === "alimenticia") {
            return <FilterAlimenticia/>
        }
    };
    
    return <>{changeCategory()}</>;
}

export default Filter;