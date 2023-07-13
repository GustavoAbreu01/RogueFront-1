import React from 'react'
import "./CompareCard.css"
import intensity from "../../assets/img/intensity.png"
import { MdCompareArrows, MdDelete } from 'react-icons/md'
import { FaPowerOff } from 'react-icons/fa'
import { VscGraph } from 'react-icons/bs'
import { GoAlertFill } from 'react-icons/go'
import { GiLightningFrequency } from 'react-icons/gi'
import { GiCargoCrane } from 'react-icons/gi'
import { BiSolidColorFill } from 'react-icons/bi'
import { BsFillMagnetFill } from 'react-icons/bs'


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
                    <div className='productComparedCardDetail'>
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
                                <div className='productImageBox'>
                                    <img src={productCompared.imageUrl} alt="" className='productImage' />
                                </div>
                                <div class="ui divider"></div>
                                <div className='productNameCompareBox'>
                                    <h1 className='productNameCompare'>{productCompared.name}</h1>
                                </div>
                                <div className='productDescriptionPrimary'>
                                    <p className='productCodeCompare'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência. Com flanges, pés, caixas e tampas de caixas de ligação em polímero industrial de alta resistência e carcaça em alumínio sem usinagem.</p>
                                </div>
                                <div className='containerDescriptionText'>
                                    <h4 class="ui horizontal divider header">
                                        <FaPowerOff className='iconCompare' />
                                    </h4>
                                    <h2 className='compareDescription'>{productCompared.description1}</h2>
                                    <p className=''>{productCompared.description2}</p>
                                    <h4 class="ui horizontal divider header">
                                        <BsFillMagnetFill className='iconCompare' />
                                    </h4>
                                    <h2 className='compareDescription'>{productCompared.description3}</h2>
                                    <p className=''>{productCompared.description4}</p>
                                    <h4 class="ui horizontal divider header">
                                        <GoAlertFill className='iconCompare' />
                                    </h4>
                                    <h2 className='compareDescription'>{productCompared.description5}</h2>
                                    <p className=''>{productCompared.description6}</p>
                                    <h4 class="ui horizontal divider header">
                                        <GiLightningFrequency className='iconCompare' />
                                    </h4>
                                    <h2 className='compareDescription'>{productCompared.description7}</h2>
                                    <p className=''>{productCompared.description8}</p>
                                    <h4 class="ui horizontal divider header">
                                        <GiCargoCrane className='iconCompare' />
                                    </h4>
                                    <h2 className='compareDescription'>{productCompared.description9}</h2>
                                    <p className=''>{productCompared.description10}</p>
                                    <h4 class="ui horizontal divider header">
                                        <BiSolidColorFill className='iconCompare' />
                                    </h4>
                                    <h2 className='compareDescription'>{productCompared.description11}</h2>
                                    <p className=''>{productCompared.description12}</p>
                                </div>
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