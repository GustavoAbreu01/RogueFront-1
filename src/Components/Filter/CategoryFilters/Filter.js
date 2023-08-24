import React from 'react'

//componentes
import FilterSegurança from '../CategoryFilters/FilterSegurança/FilterSegurança';
import FilterBuilding from '../CategoryFilters/FilterBuilding/FilterBulding';
import FilterAutomacao from '../CategoryFilters/FilterAutomacao/FilterAutomacao';
import FilterTintas from '../CategoryFilters/FilterTintas/FilterTintas';
import FilterMotor from '../CategoryFilters/FilterMotor/FilterMotor';


function Filter({category}) {

    const changeCategory = () => {
        if (category === "ink") {
            return <FilterTintas/>
        } else if (category === "motors") {
            return <FilterMotor/>
        } else if (category === "automation") {
            return <FilterAutomacao/>
        } else if (category === "security") {
            return <FilterSegurança/>
        } else if (category === "building") {
            return <FilterBuilding/>
        }
    };
    
    return <>{changeCategory()}</>;
}

export default Filter;