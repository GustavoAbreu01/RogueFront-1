import React from 'react'

//componentes
import FilterSegurança from '../CategoryFilters/FilterSegurança/FilterSegurança';
import FilterBuilding from '../CategoryFilters/FilterBuilding/FilterBulding';
import FilterAutomacao from '../CategoryFilters/FilterAutomacao/FilterAutomacao';
import FilterTintas from '../CategoryFilters/FilterTintas/FilterTintas';
import FilterMotor from '../CategoryFilters/FilterMotor/FilterMotor'


function Filter({category}) {

    const changeCategory = () => {
        console.log(category)
        if (category === "INK") {
            return <FilterTintas/>
        } else if (category === "MOTORS") {
            return <FilterMotor/>
        } else if (category === "AUTOMATION") {
            return <FilterAutomacao/>
        } else if (category === "SECURITY") {
            return <FilterSegurança/>
        } else if (category === "BUILDING") {
            return <FilterBuilding/>
        }
    };
    
    return <>{changeCategory()}</>;
}

export default Filter