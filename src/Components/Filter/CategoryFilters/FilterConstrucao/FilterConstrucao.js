//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import '../../FilterSearch.css'

//importando as frameworks
import { Divider, Dropdown } from 'semantic-ui-react';

//Importando as imagens
import icon from "../../../../assets/img/CONSTRUCAO.png"


function FilterConstrucao() {

    //deletar

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
    const [isOpen5, toggleDropdown5] = useToggle();
    const [isOpen6, toggleDropdown6] = useToggle();
    const [isOpen7, toggleDropdown7] = useToggle();
    const [isOpen8, toggleDropdown8] = useToggle();
    const [isOpen9, toggleDropdown9] = useToggle();
    const [isOpen10, toggleDropdown10] = useToggle();
    const [isOpen11, toggleDropdown11] = useToggle();
    const [isOpen12, toggleDropdown12] = useToggle();
    const [isOpen13, toggleDropdown13] = useToggle();
    const [isOpen14, toggleDropdown14] = useToggle();
    const [isOpen15, toggleDropdown15] = useToggle();
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
                            <h1 className="ui header motor search">Filtos</h1>
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
                                <div className={`category_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência

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
                                <div className={`category_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequencia

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
                                <div className={`category_filter_dropdown ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Material da carcaça

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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen5 ? 'open' : ''}`} onClick={toggleDropdown5}>Formato da carcaça

                                    <i className={`angle down icon search ${isOpen5 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen5 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen6 ? 'open' : ''}`} onClick={toggleDropdown6}>Tamanho

                                    <i className={`angle down icon search ${isOpen6 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen6 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen7 ? 'open' : ''}`} onClick={toggleDropdown7}>Tipo

                                    <i className={`angle down icon search ${isOpen7 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen7 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen8 ? 'open' : ''}`} onClick={toggleDropdown8}>Densidade

                                    <i className={`angle down icon search ${isOpen8 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen8 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen9 ? 'open' : ''}`} onClick={toggleDropdown9}>Cor

                                    <i className={`angle down icon search ${isOpen9 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen9 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen10 ? 'open' : ''}`} onClick={toggleDropdown10}>Voltagem

                                    <i className={`angle down icon search ${isOpen10 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen10 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen11 ? 'open' : ''}`} onClick={toggleDropdown11}>RFI

                                    <i className={`angle down icon search ${isOpen11 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen11 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen12 ? 'open' : ''}`} onClick={toggleDropdown12}>Temperatura

                                    <i className={`angle down icon search ${isOpen12 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen12 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen13 ? 'open' : ''}`} onClick={toggleDropdown13}>Tipo de plug

                                    <i className={`angle down icon search ${isOpen13 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen13 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen14 ? 'open' : ''}`} onClick={toggleDropdown14}>Tipo de bateria

                                    <i className={`angle down icon search ${isOpen14 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen14 && (
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen15 ? 'open' : ''}`} onClick={toggleDropdown15}>Casing

                                    <i className={`angle down icon search ${isOpen15 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen15 && (
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
                    <div className={`category_filter_dropdown_mobile ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Preço
                        <i className={`angle down icon search ${isOpen ? 'open' : ''}`}></i>
                    </div>
                    {isOpen && (
                        <div className='search_transition_mobile'>
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
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Potência

                        <i className={`angle down icon search ${isOpen2 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen2 && (
                        <div className='search_transition_mobile'>
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
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Frequencia

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
                    <div className={`category_filter_dropdown_mobile ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Material da carcaça

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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen5 ? 'open' : ''}`} onClick={toggleDropdown5}>Formato da carcaça

                        <i className={`angle down icon search ${isOpen5 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen5 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen6 ? 'open' : ''}`} onClick={toggleDropdown6}>Tamanho

                        <i className={`angle down icon search ${isOpen6 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen6 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen7 ? 'open' : ''}`} onClick={toggleDropdown7}>Tipo

                        <i className={`angle down icon search ${isOpen7 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen7 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen8 ? 'open' : ''}`} onClick={toggleDropdown8}>Densidade

                        <i className={`angle down icon search ${isOpen8 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen8 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen9 ? 'open' : ''}`} onClick={toggleDropdown9}>Cor

                        <i className={`angle down icon search ${isOpen9 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen9 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen10 ? 'open' : ''}`} onClick={toggleDropdown10}>Voltagem

                        <i className={`angle down icon search ${isOpen10 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen10 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen11 ? 'open' : ''}`} onClick={toggleDropdown11}>RFI

                        <i className={`angle down icon search ${isOpen11 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen11 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen12 ? 'open' : ''}`} onClick={toggleDropdown12}>Temperatura

                        <i className={`angle down icon search ${isOpen12 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen12 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen13 ? 'open' : ''}`} onClick={toggleDropdown13}>Tipo de plug

                        <i className={`angle down icon search ${isOpen13 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen13 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen14 ? 'open' : ''}`} onClick={toggleDropdown14}>Tipo de bateria

                        <i className={`angle down icon search ${isOpen14 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen14 && (
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
                <Divider></Divider>
                <div className='container_category_filter_expanded_mobile'>
                    <div className={`category_filter_dropdown_mobile ${isOpen15 ? 'open' : ''}`} onClick={toggleDropdown15}>Casing

                        <i className={`angle down icon search ${isOpen15 ? 'open' : ''}`}></i>
                    </div>
                    {isOpen15 && (
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

export default FilterConstrucao;
