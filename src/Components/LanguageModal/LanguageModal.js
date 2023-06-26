import React, { useEffect, useState } from 'react'
import './style.css'
import german from "../../assets/img/german.png"
import english from "../../assets/img/english.png"
import spanish from "../../assets/img/spanish.png"
import french from "../../assets/img/french.png"
import portuguese from "../../assets/img/portuguese.png"

function LanguageModal() {

  const [flags, setFlags] = useState([portuguese, german, english, spanish, french])

  const [openModal, setOpenModal] = useState(0)

  function verify() {
    if (openModal !== 0) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div className='languageModal'>
      {verify() && <div className='modalContent'>
        <div>
          <img src={english} width={40} height={25} alt='' />
        </div>
        <div>
          <img src={french} width={40} height={25} alt='' />
        </div>
        <div>
          <img src={spanish} width={40} height={25} alt='' />
        </div>
        <div>
          <img src={german} width={40} height={25} alt='' />
        </div>
      </div>}
      <div>
        {!verify() ?
          <div onClick={() => setOpenModal(openModal + 1)} className='languageButton'><img src={portuguese} width={40} height={25} alt='' /></div>
          :
          <div onClick={() => setOpenModal(openModal - 1)} className='languageButton'><img src={portuguese} width={40} height={25} alt='' /></div>
        }
      </div>
    </div>
  )
}

export default LanguageModal