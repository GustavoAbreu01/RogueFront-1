import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
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
    <>
      {verifyLogin()?<HeaderLogin/> : <Header/>}
      <Footer/>
    </>
  )
}

export default Home