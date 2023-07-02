import React from 'react'
import "./CompareCard.css"
import { MdCompareArrows, MdDelete } from 'react-icons/md'
import Footer from '../Footer/Footer'
import { Header } from 'semantic-ui-react'

function CompareCard() {

    let productsCompared = JSON.parse(localStorage.getItem("productsCompared"))

    function verify() { 
        if (productsCompared.length === 3) {
            return true
        } else {
            return false
        }
    }

    const deleteProduct = (index) => {
        const updatedProductsCompared = productsCompared.filter((_, i) => i !== index);
        localStorage.setItem('productsCompared', JSON.stringify(updatedProductsCompared));
        productsCompared = updatedProductsCompared;
        window.location.reload()
    };

    return (
        <>
            <div className='productsCompared'>
                {productsCompared.map((productCompared, index) => (
                    <div className='productComparedCard'>
                        <div className="productCompared" key={index}>
                            <div className='deleteButton'>
                                {verify() && <MdDelete size={'2rem'} onClick={() => deleteProduct(index)} />}
                            </div>
                            <div>
                                <img src={productCompared.imageUrl} alt="" className='productImage' />
                            </div>
                            <div>
                                <h1>{productCompared.name}</h1>
                            </div>
                            <div>
                                <h2>{productCompared.description1}</h2>
                                <h2>{productCompared.description2}</h2>
                                <h2>{productCompared.description3}</h2>
                                <h2>{productCompared.description4}</h2>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='compareArrow'>
                    <MdCompareArrows size={'3rem'} />
                </div>
                {verify() && <div className='compareArrow2'>
                    <MdCompareArrows size={'3rem'} />
                </div>}
            </div>
            </>

    )
}

export default CompareCard