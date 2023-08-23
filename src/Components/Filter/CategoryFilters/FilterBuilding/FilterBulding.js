//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import '../../FilterSearch.css'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';

//Importando icones
import { TfiPanel } from 'react-icons/tfi'

function FilterSegurança() {


    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Motores');


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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const renderDesktopView = () => (
        <>
            <div className='container_category_page_layout'>
                <div className='container_category_page_detail'>
                    <div className='container_category_page'>
                        <div className="category_second_filter">
                            <img className="icon_category" src={TfiPanel} />
                            <h1 className="ui header motor search">Painél elétrico</h1>
                            <br />
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Tipo do plug

                                    <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                                </div>
                                {isOpen && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc search" htmlFor="Monofasico">{selectedCategory}</label>
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
                                <div className={`category_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Tipo da bateria

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
                                <div className={`category_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Casing

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    const renderMobileView = () => (
        <>
            <div className="category_second_filter_mobile">
                <h2 className="search_mobile">Painéis elétricos</h2>
                <br />
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Tipo de plug

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
                    <div className={`category_filter_dropdown_mobile ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Tipo de bateria

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
                    <div className={`category_filter_dropdown_mobile ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Casing

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

export default FilterSegurança;