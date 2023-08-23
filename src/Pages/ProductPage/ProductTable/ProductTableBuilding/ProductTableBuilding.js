import React from 'react'

function ProductTableBuilding({ product }) {
  return (
    <div>
    <table className="ui small definition table product_page">
        <tbody>
            <tr>
                <td>Autonomia</td>
                <td>{product.autonomy}</td>
            </tr>
            <tr>
                <td>Tipo da Bateria</td>
                <td>{product.batterytype}</td>
            </tr>
            <tr>
                <td>Tenção de Barramento</td>
                <td>{product.busVoltage}</td>
            </tr>
            <tr>
                <td>Invólucro</td>
                <td>{product.casing}</td>
            </tr>
            <tr>
                <td>Código Inteligente</td>
                <td>{product.codigoInteligente}</td>
            </tr>
            <tr>
                <td>Cor da Estrutura</td>
                <td>{product.colorStructure}</td>
            </tr>
            <tr>
                <td>Corrente da Bateria</td>
                <td>{product.currentBatteries}</td>
            </tr>
            <tr>
                <td>Frequência</td>
                <td>{product.frequency}</td>
            </tr>
            <tr>
                <td>Linguagem</td>
                <td>{product.language}</td>
            </tr>
            <tr>
                <td>Corrente Nominal</td>
                <td>{product.nominalChain}</td>
            </tr>
            <tr>
                <td>Potência</td>
                <td>{product.ratedPower}</td>
            </tr>
            <tr>
                <td>Referência do Produto</td>
                <td>{product.referenceProduct}</td>
            </tr>
            <tr>
                <td>Tipo da Tomada</td>
                <td>{product.typeplug}</td>
            </tr>
            <tr>
                <td>Tensão de Entrada</td>
                <td>{product.voltageInput}</td>
            </tr>
            <tr>
                <td>Tensão de Saída</td>
                <td>{product.voltageOutput}</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default ProductTableBuilding