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
import { FaArrowRightArrowLeft } from 'react-icons/fa6'

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
      description2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description3: 'Motor3',
      description4: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description5: 'Motor1',
      description6: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
      description7: 'Motor3',
      description8: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
    }
    const newProductsCompared = [...productsCompared, product];
    setItems(newProductsCompared);
    localStorage.setItem('productsCompared', JSON.stringify(newProductsCompared));
    console.log(newProductsCompared)
  }

  return (
    <>{!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='compare'>
          <div className='boxTitleSimilarCompare'>
            <FaArrowRightArrowLeft color='var(--white)' size={40} />
            <h1 className='titleSimilar' >Comparação</h1>
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