//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Filter.css'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//Importando os componentes
import SmallProductCard from '../../Components/ProductCardSmaller/ProductCardSmaller';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

//Importando as imagens
import iconMotor from "../../assets/img/iconeMotor.png"

//Importando os icones
import { BsGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'


function Filter() {


    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    const [isOpen3, setIsOpen3] = useState(false);

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
    };

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

    const renderDesktopView = () => (
        <>
            <div className='container_category_page_layout'>
                <div className='container_category_page_detail'>
                    <div className='container_category_page'>
                        <div className="category_second_filter">
                            <img className="icon_category" src={iconMotor} />
                            <h1 className="ui header motor search">Motores</h1>
                            <br />
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Voltagem

                                    <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                                </div>
                                {isOpen && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                            <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                            <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                            <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                            <label className="desc search" htmlFor="Aneis">Anéis</label>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                )
                                }
                            </div>
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência

                                    <i className={`angle down icon search ${isOpen2 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen2 && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                            <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                            <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                            <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                            <label className="desc search" htmlFor="Aneis">Anéis</label>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                )
                                }
                            </div>
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequência

                                    <i className={`angle down icon search ${isOpen3 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen3 && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                            <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                            <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                            <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                            <label className="desc search" htmlFor="Aneis">Anéis</label>
                                        </div>
                                        <br />
                                        <br />
                                    </div>

                                )
                                }
                            </div>
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Cor

                                    <i className={`angle down icon search ${isOpen4 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen4 && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox">
                                            <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox">
                                            <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                            <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox">
                                            <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                            <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox">
                                            <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                            <label className="desc" htmlFor="Sincronos">Síncronos</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="ui checkbox">
                                            <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                            <label className="desc" htmlFor="Aneis">Anéis</label>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    const renderMobileView = () => (
        <>
            <div className="category_second_filter_mobile">
                <h2 className="search_mobile">Motores</h2>
                <br />
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Voltagem

                        <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                    </div>
                    {isOpen && (
                        <div className='search_transition_mobile'>
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                <label className="desc search" htmlFor="Aneis">Anéis</label>
                            </div>
                            <br />
                            <br />
                        </div>
                    )
                    }
                </div>
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência

                        <i className={`angle down icon search ${isOpen2 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen2 && (
                        <div className='search_transition'>
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                <label className="desc search" htmlFor="Aneis">Anéis</label>
                            </div>
                            <br />
                            <br />
                        </div>
                    )
                    }
                </div>
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequência

                        <i className={`angle down icon search ${isOpen3 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen3 && (
                        <div className='search_transition_mobile'>
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                <label className="desc search" htmlFor="Monofasico"> Monofásico </label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                <label className="desc search" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                <label className="desc search" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                <label className="desc search" htmlFor="Sincronos">Síncronos</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox search">
                                <input className="check search" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                <label className="desc search" htmlFor="Aneis">Anéis</label>
                            </div>
                            <br />
                            <br />
                        </div>

                    )
                    }
                </div>
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Cor

                        <i className={`angle down icon search ${isOpen4 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen4 && (
                        <div className='search_transition_mobile'>
                            <div className="ui checkbox">
                                <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox">
                                <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                                <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox">
                                <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                                <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox">
                                <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                                <label className="desc" htmlFor="Sincronos">Síncronos</label>
                            </div>
                            <br />
                            <br />
                            <div className="ui checkbox">
                                <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                                <label className="desc" htmlFor="Aneis">Anéis</label>
                            </div>
                            <br />
                            <br />
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
            // } else if (screenSize.width < 900 && screenSize.width > 500) {
            //   return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;

};

export default Filter;
