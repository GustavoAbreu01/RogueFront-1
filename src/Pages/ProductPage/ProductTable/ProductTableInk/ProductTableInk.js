import React from 'react'

function ProductTableInk({ product }) {
    return (
        <div>
            <table className="ui small definition table product_page">
                <tbody>
                    <tr>
                        <td>Cor</td>
                        <td>1/8 a 3 cv</td>
                    </tr>
                    <tr>
                        <td>Densidade</td>
                        <td>2 ou 4</td>
                    </tr>
                    <tr>
                        <td>Tipo</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTableInk