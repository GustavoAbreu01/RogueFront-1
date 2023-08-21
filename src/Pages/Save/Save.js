//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Save.css';


import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import SaveCard from '../../Components/SaveCard/SaveCard';
import RecommendedSave from '../../Components/RecomandedProductsSave/RecommendedSave';

//Importando os ícones
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'


function Salvos() {


  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }
  const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];


  return (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <WeggnerModal />
      <div className='container_save_titles'>
        <div className='save_saved_product'>
          <div className='box_title_similar_save'>
            <BsFillBookmarkFill color='var(--white)' size={30} />
            <h1 className='save_title'>Salvos</h1>
          </div>
          {savedProducts.map((item, index) => (
            <div key={index}>
              <SaveCard item={item} />
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
}


export default Salvos;