//Importando o React e o CSS
import React from 'react'
import './ProfilePage.css'

//Importando os componentes
import Header from '../../Components/Header/Header'
import Orders from '../../Components/Orders/Orders'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'

//Importando os ícones
import { BsFillBookmarkFill } from 'react-icons/bs'

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
            <div className='spacement'></div>
            <Footer />

        </>
    )
}

export default ProfilePage