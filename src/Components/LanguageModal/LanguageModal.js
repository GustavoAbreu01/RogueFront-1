import React, { useEffect, useState } from 'react'
import german from "../../assets/img/german.png"
import english from "../../assets/img/english.png"
import spanish from "../../assets/img/spanish.png"
import french from "../../assets/img/french.png"
import portuguese from "../../assets/img/portuguese.png"

function LanguageModal() {

  const [flags , setFlags] = useState([portuguese, german, english, spanish, french])



  useEffect(() =>{
    
  }, [])

  return (
    <div className='languageModal'><img src={portuguese} width={40} height={25}/></div>
  )
}

export default LanguageModal