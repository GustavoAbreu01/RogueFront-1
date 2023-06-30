import React, { useEffect, useState } from 'react'
import './style.css'
import motor from "../../assets/img/motor.png"
import CompareCard from '../../Components/CompareCard/CompareCard'
import { IoMdAddCircle } from 'react-icons/io'

function Compare() {
  const [productsCompared, setItems] = useState([]);
  
  useEffect(() => {
    const productComparedList = JSON.parse(localStorage.getItem('productsCompared'));
    if (productComparedList) {
      setItems(productComparedList);
    }
  }, []);

  function verify(){
    if(productsCompared.length === 3){
      return true
    }else{
      return false
    }
  }

  function addMoreProducts() {
    const product =
    {
      name: 'Engine',
      imageUrl: motor,
      description1: 'Motor1',
      description2: 'Motor2',
      description3: 'Motor3',
      description4: 'Motor4'
    }
    const newProductsCompared = [...productsCompared, product];
    setItems(newProductsCompared);
    localStorage.setItem('productsCompared', JSON.stringify(newProductsCompared));
    console.log(newProductsCompared)
  }

  return (
    <div className='compare'>
      <div className='products'>
        <CompareCard />
        {!verify() && <div className='addProduct' onClick={() => addMoreProducts()}>
          <IoMdAddCircle size={'5rem'} />
        </div>
        }

      </div>

    </div>
  )
}

export default Compare