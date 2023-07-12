import React from 'react'
import "./CompareCard.css"
import { MdCompareArrows, MdDelete } from 'react-icons/md'

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
                            <div class="ui divider"></div>
                            <div>
                                <h1 className='productNameCompare'>{productCompared.name}</h1>
                            </div>
                            <div>
                                <h4 class="ui horizontal divider header">
                                    <i class="chart line icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description1}</h2>
                                <h5 className=''>{productCompared.description1}</h5>
                                <h4 class="ui horizontal divider header">
                                    <i class="exclamation triangle icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description2}</h2>
                                <h4 class="ui horizontal divider header">
                                    <i class="angle double up icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description3}</h2>
                                <h4 class="ui horizontal divider header">
                                    <i class="chevron up icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description4}</h2>
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