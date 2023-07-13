import React, { useEffect, useState } from 'react'
import './Messages.css'
import { Link } from "react-router-dom";
import motor from "../../assets/img/motor.png"
import { CgProfile } from 'react-icons/cg'
import { FaRegEdit } from 'react-icons/'
import { IoMdAddCircle } from 'react-icons/io'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'


function Messages() {
    const [productsCompared, setItems] = useState([]);

    useEffect(() => {
        const productComparedList = JSON.parse(localStorage.getItem('productsCompared'));
        if (productComparedList) {
            setItems(productComparedList);
        }
    }, []);


    const verifyHeader = () => {
        const Registered = localStorage.getItem('verifyLogin');
        if (Registered === "yes") {
            return true
        } else {
            return false
        }
    }

    return (
        <>{!verifyHeader() ? <Header /> : <HeaderLogin />}<WeggnerModal />
        
            <Footer />
        </>
    )
}

export default Messages