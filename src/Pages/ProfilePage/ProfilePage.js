import React from 'react'
import './ProfilePage.css'
import { BsFillBookmarkFill } from 'react-icons/bs'
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
            <div className='boxTitleSimilarOrder'>
                <BsFillBookmarkFill color='var(--white)' size={40} />
                <h1 className='titleSimilar'>Seus Pedidos</h1>
            </div>
            <Orders />
            <Orders />
            <Orders />
            <Footer />

        </>
    )
}

export default ProfilePage