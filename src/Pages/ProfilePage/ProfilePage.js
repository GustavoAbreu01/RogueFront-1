import React from 'react'
import './ProfilePage.css'

//Importando os icones
import { BsFillBookmarkFill } from 'react-icons/bs'

//Importando os componentes
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
            <div className='box_title_similar_order'>
                <BsFillBookmarkFill color='var(--white)' size={40} />
                <h1>Seus Pedidos</h1>
            </div>
            <Orders />
            <Orders />
            <Orders />
            <Footer />

        </>
    )
}

export default ProfilePage