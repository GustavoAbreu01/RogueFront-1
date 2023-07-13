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
                            <div className='buttonsActionCompare'>
                                <button class="ui icon button compare">
                                    <i className="info alternate icon "></i>
                                </button>
                                <button class="ui icon button compare">
                                    <i className="cart plus icon "></i>
                                </button>
                                <div className='deleteButton'>
                                    {verify() &&
                                        <button onClick={() => deleteProduct(index)} class="ui icon button compare">
                                            <i className="trash alternate icon "></i>
                                        </button>}
                                </div>
                            </div>
                            <div>
                                <img src={productCompared.imageUrl} alt="" className='productImage' />
                            </div>
                            <div class="ui divider"></div>
                            <div>
                                <h1 className='productNameCompare'>{productCompared.name}</h1>
                            </div>
                            <div className=''>
                                <h4 class="ui horizontal divider header">
                                    <i class="chart line icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description1}</h2>
                                <p className=''>{productCompared.description2}</p>
                                <h4 class="ui horizontal divider header">
                                    <i class="exclamation triangle icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description3}</h2>
                                <p className=''>{productCompared.description4}</p>
                                <h4 class="ui horizontal divider header">
                                    <i class="angle double up icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description5}</h2>
                                <p className=''>{productCompared.description6}</p>
                                <h4 class="ui horizontal divider header">
                                    <i class="chevron up icon Compare"></i>
                                </h4>
                                <h2 className='compareDescription'>{productCompared.description7}</h2>
                                <p className=''>{productCompared.description8}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='compareArrow'>
                    <MdCompareArrows size={'4rem'} />
                </div>
                {verify() && <div className='compareArrow2'>
                    <MdCompareArrows size={'4rem'} />
                </div>}
            </div>
        </>

    )
}

export default CompareCard