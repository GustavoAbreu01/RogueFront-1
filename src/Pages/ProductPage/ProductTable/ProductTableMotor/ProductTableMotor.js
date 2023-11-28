import React, { useState } from 'react'

function ProductTableMotor({ product }) {

    const [itemsToShow, setItemsToShow] = useState(5);

    const handleShowMore = () => {
        setItemsToShow(itemsToShow + 5);
    };

    return (
        <>
            {product &&
                <div>
                    <table className="ui small definition table product_page">
                        <tbody>
                            {Object.entries(product).slice(0, itemsToShow).map(([property, value]) => (
                                <tr key={property}>
                                    <td>{property}</td>
                                    <td>
                                        {typeof value === 'object' && value !== null ? (
                                            <span>
                                                {value.code}
                                                {value.motors.image}
                                                {value.assessment}
                                                {value.totalAssessment}
                                            </span>
                                        ) : (
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
            }
        </>
    )
}

export default ProductTableMotor