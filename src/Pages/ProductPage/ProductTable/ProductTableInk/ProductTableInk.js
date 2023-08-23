import React from 'react'

function ProductTableInk({ product }) {
    return (
        <div>
            <table className="ui small definition table product_page">
                <tbody>
                    <tr>
                        <td>Cor</td>
                        <td>{product.color}</td>
                    </tr>
                    <tr>
                        <td>Densidade</td>
                        <td>{product.density}</td>
                    </tr>
                    <tr>
                        <td>Tipo</td>
                        <td>{product.type}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTableInk