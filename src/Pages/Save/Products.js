import React from 'react'
import './Products.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import motor from '../../assets/img/motor.png'
import lixeira from '../../assets/img/lixeira.png'

const deleteItens = (item) => {
    const products = JSON.parse(localStorage.getItem('products'))
    const index = products.indexOf(item)
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    console.log(products)
}

export default function haveProducts(product) {
    return (
  <div className="container_product">
      <div className="product_image">
        <img alt="product" src={motor}/> 
        {/* src={motor} */}
      </div>
    <div className="box_product_infoAndPrice">
        <div className="box_product_info">
          <div className="product_name">
            <h1>Nome do Produto</h1>
          </div>
        <div className="product_description">
          <h3>Uau é um produto muito legal, caso você queira ele pode encontrar em weg.com porque aqui a gente não vende nada</h3>
        </div>
    </div>
      <div className="product_price">
        <img alt="lixeira" src={lixeira} onClick={() => deleteItens(product)} />
        {/* src={lixeira} */}
        <h2>R$ 00,00</h2>
      </div>
    </div>
  </div>
  )
}