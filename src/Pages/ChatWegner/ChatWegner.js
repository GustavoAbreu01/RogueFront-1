import React from 'react'
import './ChatWegner.css'
import wegnerAcordado from '../../assets/img/weggnerAcordado.PNG'
import { IoIosArrowBack } from 'react-icons/io'
import { VscSend } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'

function ChatWegner() {

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
            <div className='pagChat'>
                <div className='wegner'>
                    <img src={wegnerAcordado} alt='' width={200} />
                </div>
                <div className='chat'>
                    <div className='chatHeader'>
                        <div>
                            <Link to={'/'}>
                                <div className='backArrow'>
                                    <IoIosArrowBack size={'2.5rem'} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='chatMessages'>
                        <div>
                            <div>
                                Mensagens
                            </div>
                        </div>
                    </div>
                    <div className='chatOptions'>
                        <div className='options'>
                            <div>
                                <input type='text' className='inputMessages' />
                            </div>
                            <div>
                                <VscSend size={'2.5rem'} className='sendButton' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /></>
    )
}

export default ChatWegner