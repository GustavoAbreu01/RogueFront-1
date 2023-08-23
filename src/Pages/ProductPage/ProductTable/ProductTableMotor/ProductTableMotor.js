import React from 'react'

function ProductTableMotor({ product }) {
  return (
    <div>
    <table className="ui small definition table product_page">
        <tbody>
            <tr>
                <td>Forma Construtiva</td>
                <td>{product.constructiveWay}</td>
            </tr>
            <tr>
                <td>Altitude</td>
                <td>{product.altitude}</td>
            </tr>
            <tr>
                <td>Massa Aproximada</td>
                <td>{product.approximateMass}</td>
            </tr>
            <tr>
                <td>Mancal LNA</td>
                <td>{product.bearingLNA}</td>
            </tr>
            <tr>
                <td>Tipo Mancal</td>
                <td>{product.bearingType}</td>
            </tr>
            <tr>
                <td>Carcaça</td>
                <td>{product.carcass}</td>
            </tr>
            <tr>
                <td>Classe Isolamento</td>
                <td>{product.classIsolation}</td>
            </tr>
            <tr>
                <td>Conjugado Partido</td>
                <td>{product.conjugateDeparture}</td>
            </tr>
            <tr>
                <td>Conjugado Nominal</td>
                <td>{product.conjugateNominal}</td>
            </tr>
            <tr>
                <td>Corrente de Partida</td>
                <td>{product.currentDeparture}</td>
            </tr>
            <tr>
                <td>Corrente Vazia</td>
                <td>{product.currentEmpty}</td>
            </tr>
            <tr>
                <td>Grau de Proteção</td>
                <td>{product.degreeProtection}</td>
            </tr>
            <tr>
                <td>Frequência</td>
                <td>{product.frequency}</td>
            </tr>
            <tr>
                <td>IP/LN</td>
                <td>{product.ipIn}</td>
            </tr>
            <tr>
                <td>Método de Partida</td>
                <td>{product.impregnationMethod}</td>
            </tr>
            <tr>
                <td>Material do Eixo</td>
                <td>{product.materialAxis}</td>
            </tr>
            <tr>
                <td>Material da Tamp Defletora</td>
                <td>{product.materialBaffleCover}</td>
            </tr>
            <tr>
                <td>Material da Carcaça</td>
                <td>{product.materialCarcass}</td>
            </tr>
            <tr>
                <td>Conjugado Máximo</td>
                <td>{product.maximumConjugate}</td>
            </tr>
            <tr>
                <td>Momento da Inércia</td>
                <td>{product.momentInertia}</td>
            </tr>
            <tr>
                <td>Corrente Nominal</td>
                <td>{product.nominalChain}</td>
            </tr>
            <tr>
                <td>Rotação Nominal</td>
                <td>{product.nominalRotation}</td>
            </tr>
            <tr>
                <td>Pintura</td>
                <td>{product.painting}</td>
            </tr>
            <tr>
                <td>Performace</td>
                <td>{product.performance}</td>
            </tr>
            <tr>
                <td>Potência</td>
                <td>{product.power}</td>
            </tr>
            <tr>
                <td>Fator Potência</td>
                <td>{product.powerFactor}</td>
            </tr>
            <tr>
                <td>Protetor Fenólico Sobrecarga</td>
                <td>{product.protectorFenolicOverload}</td>
            </tr>
            <tr>
                <td>Rendimento</td>
                <td>{product.ratedVoltage}</td>
            </tr>
            <tr>
                <td>Refrigeração</td>
                <td>{product.refrigeration}</td>
            </tr>
            <tr>
                <td>Regime de Serviço</td>
                <td>{product.regimeService}</td>
            </tr>
            <tr>
                <td>Temperatura Ambiente</td>
                <td>{product.roomTemperature}</td>
            </tr>
            <tr>
                <td>Direção da Rotação</td>
                <td>{product.rotationDirection ? 'Sim' : 'Não'}</td>
            </tr>
            <tr>
                <td>Escorregamento</td>
                <td>{product.slip}</td>
            </tr>
            <tr>
                <td>Proteção Térmica</td>
                <td>{product.thermalProtectionWinding}</td>
            </tr>
            <tr>
                <td>Tempo Rotor Bloqueado</td>
                <td>{product.timeRotorLocked}</td>
            </tr>
            <tr>
                <td>Pintura Tropicalizada</td>
                <td>{product.tropicalizedPainting}</td>
            </tr>
            <tr>
                <td>Tipo de Aterramento</td>
                <td>{product.typeGrounding}</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default ProductTableMotor