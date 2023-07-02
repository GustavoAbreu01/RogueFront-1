import React from 'react'
import './Save.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
// import motor from '../../assets/img/motor.png'
// import lixeira from '../../assets/img/lixeira.png'

const deleteItens = (item) => {
    const products = JSON.parse(localStorage.getItem('products'))
    const index = products.indexOf(item)
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    console.log(products)
}

export default function haveProducts(product) {
    return (
        <div className="product">
            <div className="product-Image">
              <img alt="product" /> 
              {/* src={motor} */}
            </div>
            <div className="product-InfoAndPrice">
            <div className="product-Info">
              <div className="product-Name">
                <h1>Nome do Produto</h1>
              </div>
            <div className="product-Description">
              <h3>Uau é um produto muito legal, caso você queira ele pode encontrar em weg.com porque aqui a gente não vende nada</h3>
            </div>
          </div>
        <div className="product-Price">
          <img alt='salvo' src='https://cdn-icons-png.flaticon.com/512/18/18297.png?w=740&t=st=1687980289~exp=1687980889~hmac=7c1480bd6f8a059ae5ab315760037ef0b14fb7fb12a3a85e589bc76e6534acdc' onClick={deleteItens}/>
          {/* src={lixeira} */}
          <h2>R$ 00,00</h2>
        </div>
        </div>
      </div>
      )
}