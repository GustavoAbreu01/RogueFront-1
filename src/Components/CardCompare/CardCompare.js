//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import "./CardCompare.css"

//importando as frameworks
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

//Importando os ícones
import { MdCompareArrows } from 'react-icons/md'
import { FaPowerOff } from 'react-icons/fa'
import { GoAlertFill } from 'react-icons/go'
import { GiLightningFrequency } from 'react-icons/gi'
import { GiCargoCrane } from 'react-icons/gi'
import { BiSolidColorFill } from 'react-icons/bi'
import { BsFillMagnetFill } from 'react-icons/bs'

function CardCompare(product) {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let productsInCompare = JSON.parse(localStorage.getItem("productsInCompare"))

    const AddProductInCart = () => {
        const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
        productsInCart.push(product);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
        Swal.fire({
            title: 'Produto adicionado a carrinho!',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ir para o carrinho',
            confirmButtonColor: 'var(--blue-primary)',
            position: 'top-end',
            timer: 5000,
            timerProgressBar: true,
            toast: true,
            width: 400,
            showClass: {
                popup: 'animate__animated animate__backInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/cart"
            }
        }
        )
    }

    function verify() {
        if (productsInCompare.length === 3) {
            return true
        } else {
            return false
        }
    }

    function verifyTablet() {
        if (productsInCompare.length === 2) {
            return true
        } else {
            return false
        }
    }

    const deleteItens = (item) => {
        const productsInCompare = JSON.parse(localStorage.getItem('productsInCompare'));
        const index = productsInCompare.findIndex(product => product.id === item.id);
        if (index !== -1) {
            productsInCompare.splice(index, 1);
            localStorage.setItem('productsInCompare', JSON.stringify(productsInCompare));
        }
        window.location.reload();
    };

    const renderDesktopView = () => (
        <>
            <div className='productsCompared'>
                {productsInCompare.map((item, index) => (
                    <div className='container_card_compare_details'>
                        <div className='container_card_compare_compared'>
                            <div className="productsInCompare" key={index}>
                                <div className='box_card_compare_button_action'>
                                    <Link to='/product'>
                                        <button className="ui icon button card_compare_icon">
                                            <i className="info alternate icon "></i>
                                        </button>
                                    </Link>
                                    <button onClick={() => AddProductInCart(product)} className="ui icon button product_card_hightlight">
                                        <i className="cart plus icon product_card_hightlight"></i>
                                    </button>
                                    <div className='card_compare_delete_button'>
                                     
                                            <button onClick={() => deleteItens(item)} className="ui icon button card_compare">
                                                <i className="trash alternate icon "></i>
                                            </button>
                                    </div>
                                </div>
                                <div className='box_card_compare_image'>
                                    <img src={productsInCompare
                                        .imageUrl} alt="" className='card_compare_image' />
                                </div>
                                <div className="ui divider"></div>
                                <div className='box_card_compare_name'>
                                    <h1 className='card_compare_name'>{productsInCompare
                                        .name}</h1>
                                </div>
                                <div className='box_card_compare_description_primary'>
                                    <p className='card_compare_code'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência. Com flanges, pés, caixas e tampas de caixas de ligação em polímero industrial de alta resistência e carcaça em alumínio sem usinagem.</p>
                                </div>
                                <div className='container_card_compare_description_text'>
                                    <h4 className="ui horizontal divider header">
                                        <FaPowerOff className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description1}</h2>
                                    <p className=''>{productsInCompare
                                        .description2}</p>
                                    <h4 className="ui horizontal divider header">
                                        <BsFillMagnetFill className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description3}</h2>
                                    <p className=''>{productsInCompare
                                        .description4}</p>
                                    <h4 className="ui horizontal divider header">
                                        <GoAlertFill className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description5}</h2>
                                    <p className=''>{productsInCompare
                                        .description6}</p>
                                    <h4 className="ui horizontal divider header">
                                        <GiLightningFrequency className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description7}</h2>
                                    <p className=''>{productsInCompare
                                        .description8}</p>
                                    <h4 className="ui horizontal divider header">
                                        <GiCargoCrane className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description9}</h2>
                                    <p className=''>{productsInCompare
                                        .description10}</p>
                                    <h4 className="ui horizontal divider header">
                                        <BiSolidColorFill className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description11}</h2>
                                    <p className=''>{productsInCompare
                                        .description12}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='card_compare_arrow_first'>
                    <MdCompareArrows size={'4rem'} />
                </div>
                {verify() && <div className='card_compare_arrow_second'>
                    <MdCompareArrows size={'4rem'} />
                </div>}
            </div>
        </>
    )

    const renderTabletView = () => (
        <>
            <div className='productsCompared_tablet'>
                {productsInCompare.map((item, index) => (
                    <div className='container_card_compare_details'>
                        <div className='container_card_compare_compared'>
                            <div className="productsInCompare" key={index}>
                                <div className='box_card_compare_button_action'>
                                    <Link to='/product'>
                                        <button className="ui icon button card_compare_icon">
                                            <i className="info alternate icon "></i>
                                        </button>
                                    </Link>
                                    <button onClick={() => AddProductInCart(product)}  className="ui icon button product_card_hightlight">
                                        <i className="cart plus icon product_card_hightlight"></i>
                                    </button>
                                    <div className='card_compare_delete_button'>
                                        {verifyTablet() &&
                                            <button onClick={() => deleteItens(item)} className="ui icon button card_compare">
                                                <i className="trash alternate icon "></i>
                                            </button>}
                                    </div>
                                </div>
                                <div className='box_card_compare_image'>
                                    <img src={productsInCompare
                                        .imageUrl} alt="" className='card_compare_image' />
                                </div>
                                <div className="ui divider"></div>
                                <div className='box_card_compare_name'>
                                    <h1 className='card_compare_name'>{productsInCompare
                                        .name}</h1>
                                </div>
                                <div className='box_card_compare_description_primary'>
                                    <p className='card_compare_code'>A linha W12 foi desenvolvida para oferecer versatilidade e eficiência. Com flanges, pés, caixas e tampas de caixas de ligação em polímero industrial de alta resistência e carcaça em alumínio sem usinagem.</p>
                                </div>
                                <div className='container_card_compare_description_text'>
                                    <h4 className="ui horizontal divider header">
                                        <FaPowerOff className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description1}</h2>
                                    <p className=''>{productsInCompare
                                        .description2}</p>
                                    <h4 className="ui horizontal divider header">
                                        <BsFillMagnetFill className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description3}</h2>
                                    <p className=''>{productsInCompare
                                        .description4}</p>
                                    <h4 className="ui horizontal divider header">
                                        <GoAlertFill className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description5}</h2>
                                    <p className=''>{productsInCompare
                                        .description6}</p>
                                    <h4 className="ui horizontal divider header">
                                        <GiLightningFrequency className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description7}</h2>
                                    <p className=''>{productsInCompare
                                        .description8}</p>
                                    <h4 className="ui horizontal divider header">
                                        <GiCargoCrane className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description9}</h2>
                                    <p className=''>{productsInCompare
                                        .description10}</p>
                                    <h4 className="ui horizontal divider header">
                                        <BiSolidColorFill className='card_compare_icon' />
                                    </h4>
                                    <h2 className='card_compare_description'>{productsInCompare
                                        .description11}</h2>
                                    <p className=''>{productsInCompare
                                        .description12}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {verifyTablet() && <div className='card_compare_arrow_second_tablet'>
                    <MdCompareArrows size={'4rem'} />
                </div>}
            </div>
        </>
    )

    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        }
    };

    return <>{getViewToRender()}</>;

}

export default CardCompare;