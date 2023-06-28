import React from 'react'
import questIcon from "../../assets/img/questionario.png"
import compare from '../../assets/img/compare.png'
import weggner from '../../assets/img/WagnerDormindo.png'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MenuModal from '../../Components/MenuModal/MenuModal'
function Home() {

  const login = localStorage.getItem("verifyLogin")

  const verifyLogin = () => {
    if(login == 'yes'){
      return true
    }else{
      return false
    }
  }

  return (
    <><Header />
    
    
    <Footer /></>
  )
}

export default Home