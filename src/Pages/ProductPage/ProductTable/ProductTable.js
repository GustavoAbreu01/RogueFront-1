import React from 'react'
import ProductTableSecurity from './ProductTableSecurity/ProductTableSecurity';
import ProductTableInk from './ProductTableInk/ProductTableInk';
import ProductTableMotor from './ProductTableMotor/ProductTableMotor';
import ProductTableAutomation from './ProductTableAutomation/ProductTableAutomation';
import ProductTableBuilding from './ProductTableBuilding/ProductTableBuilding';

function ProductTable({ product }) {

    const getViewToRender = () => {
        if (product.categories === "INK") {
            return <ProductTableInk product={product} />
        } else if (product.categories === "MOTORS") {
            return <ProductTableMotor product={product} />
        } else if (product.categories === "AUTOMATION") {
            return <ProductTableAutomation product={product} />
        } else if (product.categories === "SECURITY") {
            return <ProductTableSecurity product={product} />
        } else if (product.categories === "BUILDING") {
            return <ProductTableBuilding product={product} />
        }
    };

    return <>{getViewToRender()}</>;


}

export default ProductTable