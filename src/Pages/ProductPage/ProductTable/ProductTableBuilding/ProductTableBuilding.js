import React from 'react'
import { useState } from 'react';

function ProductTableBuilding({ product }) {

    const [itemsToShow, setItemsToShow] = useState(5);

    const handleShowMore = () => {
        setItemsToShow(itemsToShow + 5);
    };

    return (
        <div>
            <table className="ui small definition table product_page">
                <tbody>
                    {Object.entries(product).slice(0, itemsToShow).map(([property, value]) => (
                        <tr key={property}>
                            <td>{property}</td>
                            <td>
                                {typeof value === 'object' ? (
                                    // Render the necessary values from the nested object
                                    <span>{value.id}, {value.amountVotes}, {value.assessment}, {value.totalAssessment}</span>
                                ) : (
                                    // Render regular values
                                    value
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='product_show_more'>
                {itemsToShow < Object.keys(product).length && (
                    <button className='button_show_more' onClick={handleShowMore}>Mostrar Mais</button>
                )}
            </div>
        </div>
    )
}

export default ProductTableBuilding