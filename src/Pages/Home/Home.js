import React from 'react'
import logo from "../../assets/img/logo-weg.png"
import salvo from "../../assets/img/salvo.png"

function Home() {

  const products = [
    {
        name: 'Logo',
        imageUrl: logo,
        description1: 'logo1',
        description2: 'logo2',
        description3: 'logo3',
        description4: 'logo4'
    },
    {
        name: 'Salvo',
        imageUrl: salvo,
        description1: 'salvo1',
        description2: 'salvo2',
        description3: 'salvo3',
        description4: 'salvo4'
    }
];

localStorage.setItem("productsCompared", JSON.stringify(products))

  return (
    <div>Home</div>
  )
}

export default Home