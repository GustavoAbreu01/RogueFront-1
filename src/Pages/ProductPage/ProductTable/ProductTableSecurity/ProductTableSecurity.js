import React from 'react'

function ProductTableSecurity({ product }) {
    return (
        <div>
            <table className="ui small definition table product_page">
                <tbody>
                    <tr>
                        <td>Profundidade</td>
                        <td>{product.depth}</td>
                    </tr>
                    <tr>
                        <td>Vida útil</td>
                        <td>{product.eletricalLife}</td>
                    </tr>
                    <tr>
                        <td>Referência</td>
                        <td>{product.reference}</td>
                    </tr>
                    <tr>
                        <td>Largura</td>
                        <td>{product.width}</td>
                    </tr>
                    <tr>
                        <td>Contato</td>
                        <td>{product.contact}</td>
                    </tr>
                    <tr>
                        <td>Tensão Nominal Emprego</td>
                        <td>{product.currentNominalEmployment}</td>
                    </tr>
                    <tr>
                        <td>Corrente Nominal IN</td>
                        <td>{product.currentNominalIn}</td>
                    </tr>
                    <tr>
                        <td>Grau Proteção Terminais</td>
                        <td>{product.degreeProtecaoTerminals}</td>
                    </tr>
                    <tr>
                        <td>Grau Proteção Bobina</td>
                        <td>{product.degreeProtectionCoil}</td>
                    </tr>
                    <tr>
                        <td>Peso Bruto</td>
                        <td>{product.grossWeight}</td>
                    </tr>
                    <tr>
                        <td>Altura</td>
                        <td>{product.height}</td>
                    </tr>
                    <tr>
                        <td>Limite Máximo de Frequência</td>
                        <td>{product.limitMaximumFrequency}</td>
                    </tr>
                    <tr>
                        <td>Limite Minímo de Frequência</td>
                        <td>{product.limitMinimumFrequency}</td>
                    </tr>
                    <tr>
                        <td>Vida Mecânica</td>
                        <td>{product.mechanicalLife}</td>
                    </tr>
                    <tr>
                        <td>Mecânica</td>
                        <td>{product.mechanics}</td>
                    </tr>
                    <tr>
                        <td>Tipo de Terminal</td>
                        <td>{product.terminalType}</td>
                    </tr>
                    <tr>
                        <td>Tenção de Comando</td>
                        <td>{product.voltageCommand}</td>
                    </tr>
                    <tr>
                        <td>Tensão Nominal Emprego UeIEC</td>
                        <td>{product.voltageEmploymentUIEC}</td>
                    </tr>
                    <tr>
                        <td>Tensão Nominal Emprego Ue</td>
                        <td>{product.voltageEmploymentUIUE}</td>
                    </tr>
                    <tr>
                        <td>Tenção Nominal Isolação UI</td>
                        <td>{product.voltageNominalIsolationUi}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTableSecurity