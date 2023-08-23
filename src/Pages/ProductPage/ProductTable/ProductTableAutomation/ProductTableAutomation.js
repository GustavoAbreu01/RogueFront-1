import React from 'react'

function ProductTableAutomation({ product }) {
    return (
        <div>
            <table className="ui small definition table product_page">
                <tbody>
                    <tr>
                        <td>Grau de Proteção</td>
                        <td>1/8 a 3 cv</td>
                    </tr>
                    <tr>
                        <td>Alimentação Eletrônica</td>
                        <td>2 ou 4</td>
                    </tr>
                    <tr>
                        <td>Filtro RFI</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Indutor Link</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Corrente Nominal</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Número de Fases de Entrada</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Frenagem Reostática</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Parada de Segurança</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Configurações</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                    <tr>
                        <td>Temperatura</td>
                        <td> 127/220 ou 220/440 V</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTableAutomation