import React from 'react'
import './style.css'
import wegnerAcordado from '../../assets/img/weggnerAcordado.PNG'
import { IoIosArrowBack } from 'react-icons/io'

function ChatWegner() {
    return (
        <div className='pagChat'>
            <div className='wegner'>
                <img src={wegnerAcordado} alt='' width={200}/>
            </div>
            <div className='chat'>
                <div className='chatHeader'>
                    <div>
                        <div className='backArrow'>
                            <IoIosArrowBack size={'2.5rem'}/>
                        </div>
                    </div>
                </div>
                <div className='chatMessages'>
                    mensagens
                </div>
                <div className='chatOptions'>
                    mandarMSG
                </div>
            </div>
        </div>
    )
}

export default ChatWegner