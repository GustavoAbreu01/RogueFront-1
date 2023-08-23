import React from 'react'

function ProductTableAutomation({ product }) {
    return (
        <div>
            <table className="ui small definition table product_page">
                <tbody>
                    <tr>
                        <td>Grau de Proteção</td>
                        <td>{product.degreeProtection}</td>
                    </tr>
                    <tr>
                        <td>Alimentação Eletrônica</td>
                        <td>{product.electronicFeed}</td>
                    </tr>
                    <tr>
                        <td>Filtro RFI</td>
                        <td>{product.filterrfi}</td>
                    </tr>
                    <tr>
                        <td>Indutor Link</td>
                        <td>{product.inductorLink}</td>
                    </tr>
                    <tr>
                        <td>Corrente Nominal</td>
                        <td>{product.nominalChain}</td>
                    </tr>
                    <tr>
                        <td>Número de Fases de Entrada</td>
                        <td>{product.numberPhasesEntry}</td>
                    </tr>
                    <tr>
                        <td>Frenagem Reostática</td>
                        <td>{product.rheostaticBraking}</td>
                    </tr>
                    <tr>
                        <td>Parada de Segurança</td>
                        <td>{product.safetyStop}</td>
                    </tr>
                    <tr>
                        <td>Configurações</td>
                        <td>{product.settings}</td>
                    </tr>
                    <tr>
                        <td>Temperatura</td>
                        <td>{product.temperature}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTableAutomation