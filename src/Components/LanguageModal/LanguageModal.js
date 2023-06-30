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

  function changeCurrentFlag(currentFlagIndex, currentFlag){
    let oldFlags = flags
    oldFlags.splice(currentFlagIndex, 1)
    let newFlags = []
    newFlags.push(currentFlag)
    console.log(newFlags)
    oldFlags.forEach(flag => {
      newFlags.push(flag)
    });
    setFlags(newFlags)
    setOpenModal(openModal - 1)
  }

  useEffect(() => {
  }, [flags])

  return (
    <div className='languageModal'>
      {verify() && <div className='modalContent'>
        <div onClick={() => changeCurrentFlag(1, flags[1])}>
          <img src={flags[1]} width={40} height={25} alt='' />
        </div>
        <div onClick={() => changeCurrentFlag(2, flags[2])}>
          <img src={flags[2]} width={40} height={25} alt='' />
        </div>
        <div onClick={() => changeCurrentFlag(3, flags[3])}>
          <img src={flags[3]} width={40} height={25} alt='' />
        </div>
        <div onClick={() => changeCurrentFlag(4, flags[4])}>
          <img src={flags[4]} width={40} height={25} alt='' />
        </div>
      </div>}
      <div>
        {!verify() ?
          <div onClick={() => setOpenModal(openModal + 1)} className='languageButton'><img src={flags[0]} width={40} height={25} alt='' /></div>
          :
          <div onClick={() => setOpenModal(openModal - 1)} className='languageButton'><img src={flags[0]} width={40} height={25} alt='' /></div>
        }
      </div>
    </div>
  )
}

export default LanguageModal