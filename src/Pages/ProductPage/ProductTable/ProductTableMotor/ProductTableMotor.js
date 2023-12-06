import React, { useState } from 'react'

function ProductTableMotor({ product }) {

    const [itemsToShow, setItemsToShow] = useState(5);

    const handleShowMore = () => {
        setItemsToShow(itemsToShow + 5);
    };

    const renderProperty = (property) => {
        console.log(property)
        switch (property) {
            case 'code':
                return 'Código';
            case 'standard':
                return 'Padrão';
            case 'frequency':
                return 'Frequência';
            case 'nominalTension':
                return 'Tensão Nominal';
            case 'poles':
                return 'Pólos';
            case 'powerHP':
                return 'Potência (HP)';
            case 'codeDaCarcaca':
                return 'Código da Carcaça';
            case 'typeDaCarcaca':
                return 'Tipo da Carcaça';
            case 'ipIn':
                return 'IP (In)';
            case 'conjugateFromStart':
                return 'Conjugado de Partida';
        }
    }

    return (
        <>
            {product &&
                <div>
                    <table className="ui small definition table product_page">
                        <tbody>
                            {Object.entries(product.motors).slice(0, itemsToShow).map(([property, value]) => (
                                <tr key={property}>
                                    <td>{renderProperty(property)}</td>
                                    <td>
                                        {typeof value === '' && value !== null ? (
                                            <span>
                                                {value.code}
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