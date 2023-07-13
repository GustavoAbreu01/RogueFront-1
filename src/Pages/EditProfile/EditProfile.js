import React, { useEffect, useState } from 'react'
import './EditProfile.css'
import { Link } from "react-router-dom";
import motor from "../../assets/img/motor.png"
import { CgProfile } from 'react-icons/cg'
import { FaRegEdit } from 'react-icons/'
import { IoMdAddCircle } from 'react-icons/io'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal'


function EditProfile() {
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
            <div className='containerEdit'>
                <div class="ui grid edit">
                    <div class="two column row edit">
                        <div class="ui row edit">
                            <div class="column edit">
                                <div className="settingsBarEdit">
                                    <div className='mainInfoEdit'>
                                        <CgProfile className='profileEdit'></CgProfile>
                                        {/* <CgEdit className='editIcon'></CgEdit> */}
                                        <h4>Nome Sobrenome</h4>
                                        <p>000.000.000-00</p>
                                    </div>
                                    <div class="ui vertical menu edit">
                                        <Link to="/edit-profile" class="item">
                                            <p className='titleSectionEdit'>Perfil</p>
                                        </Link>
                                        <Link to="/messages" class="item">
                                            <p className='titleSectionEdit'>Mensagens</p>
                                        </Link>
                                        <Link to="/edit-address" class="item">
                                            <p className='titleSectionEdit'>Endereço</p>
                                        </Link>
                                        <a class="item">
                                            <p className='titleSectionEdit'>Avaliações</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div class="ui row editSectionProfile">
                    <div class="column sections">
                        <div className='edit-section-profile'>
                            <h2 className='edit-section-title-profile'>Informações Pessoais</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditProfile