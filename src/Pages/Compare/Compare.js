import React, { useEffect, useState } from 'react'
import './Compare.css'
import motor from "../../assets/img/motor.png"
import CompareCard from '../../Components/CompareCard/CompareCard'
import { IoMdAddCircle } from 'react-icons/io'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'
import { BsFillBookmarkFill } from 'react-icons/bs'
import BannerAnnouncementOne from '../../assets/img/BannerAnnun1.jpg'
import BannerAnnouncementTwo from '../../assets/img/BannerAnnun2.jpg'

function Compare() {
  const [productsCompared, setItems] = useState([]);

  useEffect(() => {
    const productComparedList = JSON.parse(localStorage.getItem('productsCompared'));
    if (productComparedList) {
      setItems(productComparedList);
    }
  }, []);

  function verify() {
    if (productsCompared.length === 3) {
      return true
    } else {
      return false
    }
  }

  const verifyHeader = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  function addMoreProducts() {
    const product =
    {
      name: 'Engine',
      imageUrl: motor,
      description1: 'Motor1',
      description2: 'Motor2',
      description3: 'Motor3',
      description4: 'Motor4'
    }
    const newProductsCompared = [...productsCompared, product];
    setItems(newProductsCompared);
    localStorage.setItem('productsCompared', JSON.stringify(newProductsCompared));
    console.log(newProductsCompared)
  }

  return (
    <>{!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='compare'>
        <div className='titleCompare'>
          <div className='boxTitleCompare'>
            <h1 className='titleSimilar'>Comparar Produtos</h1>
          </div>
        </div>
        <div className='products'>
          <CompareCard />
          {!verify() && <div className='addProduct' onClick={() => addMoreProducts()}>
            <IoMdAddCircle size={'5rem'} />
          </div>}

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Compare