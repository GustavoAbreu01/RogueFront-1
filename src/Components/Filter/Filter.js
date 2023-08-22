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

    const [isOpen5, setIsOpen5] = useState(false);

    const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
    };
    const [isOpen6, setIsOpen6] = useState(false);

    const toggleDropdown6 = () => {
        setIsOpen6(!isOpen6);
    };
    const [isOpen7, setIsOpen7] = useState(false);

    const toggleDropdown7 = () => {
        setIsOpen8(!isOpen7);
    };
    const [isOpen8, setIsOpen8] = useState(false);

    const toggleDropdown8 = () => {
        setIsOpen8(!isOpen8);
    };
    const [isOpen9, setIsOpen9] = useState(false);

    const toggleDropdown9 = () => {
        setIsOpen9(!isOpen9);
    };
    const [isOpen10, setIsOpen10] = useState(false);

    const toggleDropdown10 = () => {
        setIsOpen10(!isOpen10);
    };
    const [isOpen11, setIsOpen11] = useState(false);

    const toggleDropdown11 = () => {
        setIsOpen11(!isOpen11);
    };
    const [isOpen12, setIsOpen12] = useState(false);

    const toggleDropdown12 = () => {
        setIsOpen12(!isOpen12);
    };
    const [isOpen13, setIsOpen13] = useState(false);

    const toggleDropdown13 = () => {
        setIsOpen13(!isOpen13);
    };
    const [isOpen14, setIsOpen14] = useState(false);

    const toggleDropdown14 = () => {
        setIsOpen14(!isOpen14);
    };
    const [isOpen15, setIsOpen15] = useState(false);

    const toggleDropdown15 = () => {
        setIsOpen15(!isOpen15);
    };
    const [isOpen16, setIsOpen16] = useState(false);

    const toggleDropdown16 = () => {
        setIsOpen16(!isOpen16);
    };
    const [isOpen17, setIsOpen17] = useState(false);

    const toggleDropdown17 = () => {
        setIsOpen17(!isOpen17);
    };
    const [isOpen18, setIsOpen18] = useState(false);

    const toggleDropdown18 = () => {
        setIsOpen18(!isOpen18);
    };
    const [isOpen19, setIsOpen19] = useState(false);

    const toggleDropdown19 = () => {
        setIsOpen19(!isOpen19);
    };
    const [isOpen20, setIsOpen20] = useState(false);

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
                                <div className={`category_filter_dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>Preço

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
                                <div className={`category_filter_dropdown ${isOpen2 ? 'open' : ''}`} onClick={toggleDropdown2}>Avaliação

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
                                <div className={`category_filter_dropdown ${isOpen3 ? 'open' : ''}`} onClick={toggleDropdown3}>Voltagem

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
                                <div className={`category_filter_dropdown ${isOpen4 ? 'open' : ''}`} onClick={toggleDropdown4}>Frequencia

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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen5 ? 'open' : ''}`} onClick={toggleDropdown5}>Material da Carcaça

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
                                <div className={`category_filter_dropdown ${isOpen7 ? 'open' : ''}`} onClick={toggleDropdown7}>Formato da carcaça

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
                                <div className={`category_filter_dropdown ${isOpen8 ? 'open' : ''}`} onClick={toggleDropdown8}>Tipo

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
                                <div className={`category_filter_dropdown ${isOpen9 ? 'open' : ''}`} onClick={toggleDropdown9}>Densidade

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
                                <div className={`category_filter_dropdown ${isOpen10 ? 'open' : ''}`} onClick={toggleDropdown10}>Casing

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
                                <div className={`category_filter_dropdown ${isOpen13 ? 'open' : ''}`} onClick={toggleDropdown13}>Configurações

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
                                <div className={`category_filter_dropdown ${isOpen14 ? 'open' : ''}`} onClick={toggleDropdown14}>Frequencia

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
                                <div className={`category_filter_dropdown ${isOpen15 ? 'open' : ''}`} onClick={toggleDropdown15}>Contato

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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen16 ? 'open' : ''}`} onClick={toggleDropdown16}>Tipo terminal

                                    <i className={`angle down icon search ${isOpen16 ? 'open' : ''}`}></i>
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
                            <Divider></Divider>
                            <div className='container_category_filter_expanded'>
                                <div className={`category_filter_dropdown ${isOpen17 ? 'open' : ''}`} onClick={toggleDropdown17}>Tipo de plug 

                                    <i className={`angle down icon search ${isOpen17 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen17 && (
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
                                <div className={`category_filter_dropdown ${isOpen18 ? 'open' : ''}`} onClick={toggleDropdown18}>Tipo de bateria

                                    <i className={`angle down icon search ${isOpen18 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen18 && (
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
                                <div className={`category_filter_dropdown ${isOpen19 ? 'open' : ''}`} onClick={toggleDropdown19}>Casing

                                    <i className={`angle down icon search ${isOpen19 ? 'open' : ''}`}></i>
                                </div>
                                {isOpen19 && (
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
