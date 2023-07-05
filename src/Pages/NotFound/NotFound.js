import React from 'react'
import './NotFound.css'
import weggner from "../../assets/img/NotFoundWeggner.gif"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <>
      <div className='ContainerNotFound'>
        <img src={weggner} alt="weggner" className="imgNotFound" />
        <h2 className="textTitleNotFound">Página não encontrada</h2>
        <p className="textNotFound">A página que você está procurando não existe ou foi removida.</p>
        <div className='boxCartProductSubTextFinal'>
          <BsArrowLeftShort size={15} />
          <Link to='/'> <p className='SubTextFinal'>Voltar para a Home</p> </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound