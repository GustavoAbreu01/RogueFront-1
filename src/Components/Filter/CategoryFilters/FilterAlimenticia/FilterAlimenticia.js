//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import '../../FilterSearch.css'

//importando as frameworks
import { Divider } from 'semantic-ui-react';

//Importando as imagens
import icon from "../../../../assets/img/ALIMENTAÇÃO.png"

function FilterAlimenticia() {

    const useToggle = (initialState = false) => {
        const [isOpen, setIsOpen] = useState(initialState);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

        return [isOpen, toggle];
    };

    const [isOpen, toggleDropdown] = useToggle();
    const [isOpen2, toggleDropdown2] = useToggle();
    const [isOpen3, toggleDropdown3] = useToggle();
    const [isOpen4, toggleDropdown4] = useToggle();

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
                            <img className="icon_category" src={icon} />
                            <h1 className="ui header motor search">Alimentícia</h1>
                            <br />
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Preço

                                    <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                                </div>
                                {isOpen && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc search" htmlFor="Monofasico">Monofasico</label>
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
                                <div className={`category_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Tipo

                                    <i className={`angle down icon search ${isOpen2 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen2 && (
                                    <div className='search_transition'>
                                        <div className="ui checkbox search">
                                            <input className="check search" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                                            <label className="desc search" htmlFor="Monofasico">Monofasico</label>
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
                                <div className={`category_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Densidade

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
                                <div className={`category_filter_dropdown ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>cor

                                    <i className={`angle down icon search ${isOpen4 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen4 && (
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
                <h2 className="search_mobile">Alimentícia</h2>
                <br />
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Preço

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
                    <div className={`category_filter_dropdown_mobile ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Tipo

                        <i className={`angle down icon search ${isOpen2 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen2 && (
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
                    <div className={`category_filter_dropdown_mobile ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Densidade

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
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Cor

                        <i className={`angle down icon search ${isOpen4 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen4 && (
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

export default FilterAlimenticia;