import React from 'react'
import './style.css'
import wegnerAcordado from '../../assets/img/weggnerAcordado.PNG'
import { IoIosArrowBack } from 'react-icons/io'
import { VscSend } from 'react-icons/vsc'

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
                    <div>
                        <div>
                            Mensagens
                        </div>
                    </div>
                </div>
                <div className='chatOptions'>
                    <div className='options'>
                        <div>
                            <input type='text' className='inputMessages'/>
                        </div>
                        <div >
                            <VscSend size={'2.5rem'} className='sendButton'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatWegner