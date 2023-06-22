import React from 'react'
import { BiMenu } from 'react-icons/bi';
import './style.css'
import Divider from '../Divider/Divider';
import { Link } from 'react-router-dom';



function SubHeader() {
    return (
        <div className="box subNav">
            <div className="">
                <BiMenu className="icon menu" />
                <p className='title'>Menu</p>
            </div>
            <Divider />
            <div className="text">
                <p>Motores</p>
            </div>
            <Divider />
            <div className="text">
                Tintas e Vernizes
            </div>
            <Divider />
            <div className="text">
                Automação
            </div>
            <Divider />
            <div className="text">
                Painéis Elétricos
            </div>
            <Divider />
            <div className="text">
                Segurança de Máquinas
            </div>
            <Divider />

        </div>
    )
}

export default SubHeader