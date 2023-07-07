import React from 'react'
import './ProfilePage.css'

import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Orders from '../../Components/Orders/Orders'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'

function ProfilePage() {

    const verify = () => {
        const Registered = localStorage.getItem('verifyLogin');
        if (Registered === "yes") {
            return true
        } else {
            return false
        }
    }

    return (
        <>{!verify() ? <Header /> : <HeaderLogin />}
           <Orders/>


        </>
    )
}

export default ProfilePage