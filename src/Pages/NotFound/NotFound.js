//Importando o React e o CSS
import React from 'react'
import './NotFound.css'

// importando framework
import { Link } from 'react-router-dom'

// importando imagens
import weggner from "../../assets/img/NotFoundWeggner.gif"

// importando icones
import { BsArrowLeftShort } from 'react-icons/bs'

function NotFound() {
  return (
    <>
      <div className='container_not_found'>
        <img src={weggner} alt="weggner" className="not_found_img" />
        <h2 className="not_found_title">Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi removida.</p>
        <div className='not_found_text'>
          <BsArrowLeftShort size={15} />
          <Link to='/'> <p>Voltar para a Home</p> </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound