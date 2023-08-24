//Importando o React e o CSS
import React, { useState, useEffect } from 'react'
import "./Register.css"

//Importando a Service
import { UserService } from '../../Service/userService';

//importando as frameworks
import { Link, useNavigate } from "react-router-dom";

//Importando as imagens
import logo from "../../assets/img/logoWEG.png"

//Importando os ícones
import { BsArrowLeftShort } from 'react-icons/bs';


function Register() {

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


    const navigate = useNavigate();

    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
    });

    const updateRegisterInformation = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const updateConfirmInformation = (event) => {
        setPasswordConfirm(event.target.value);
    }


    
    function create(event) {
        localStorage.setItem('user', JSON.stringify(UserService.create(user)));
        if (user.password !== passwordConfirm) {
            event.preventDefault();
            alert("Confirmação de senha incorreta")
        } else {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem("verifyLogin", 'yes');
        }
    }

    const renderDesktopView = () => (
        <>
            <div className='container_register_image'>
                <Link to={'/'}><img className='logo_image_register' src={logo} /></Link>
            </div>
            <div className="container_register_inputs">
                <div className="box_register_inputs_detail"></div>
                <div className="box_register_inputs">
                    <form className="ui form register">
                        <h2 className="ui header titleRegister">Cadastro de Usuário</h2>

                        <div className="fields">
                            <div className="eight wide field register">
                                <label>Nome</label>
                                <input className='register_input' name="name" value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                            </div>
                            <div className="eight wide field register">
                                <label>Sobrenome</label>
                                <input className='register_input' name="name" value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                            </div>
                        </div>

                        <div className="field register">
                            <label>Email</label>
                            <input className='register_input' name="email" value={user.email} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                        </div>

                        <div className="field register">
                            <label>CPF/CNPJ</label>
                            <input className='register_input' name="cpf" value={user.cpf} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                        </div>
                        <div className="fields">
                            <div className="eight wide field register">
                                <label>Senha:</label>
                                <input className='register_input' name="password" value={user.password} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
                            </div>
                            <div className="eight wide field register">
                                <label>Confirmar Senha:</label>
                                <input className='register_input' name="password" value={user.passwordConfirm} onChange={updateConfirmInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
                            </div>
                        </div>
                        <div className='box'>
                            <button className="ui big fluid button register" onClick={create}>Cadastrar</button>
                        </div>
                        <div className='register_finish_text'>
                            <BsArrowLeftShort size={15} />
                            <Link to='/login'> <p className='cart_finish_subtext'>Já Possui cadastro? <b>Login</b></p> </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
    const renderMobileView = () => (
        <>
            <div className='container_register_image_mobile'>
                <Link to={'/'}><img className='logo_image_register_mobile' src={logo} /></Link>
            </div>
            <div className="container_register_inputs_mobile">
                <div className="box_register_inputs_detail_mobile">
                <div className="box_register_inputs_mobile">
                    <form className="ui form register_mobile">
                        <h2 className="ui header titleRegister_mobile">Cadastro de Usuário</h2>

                        <div className="fields">
                            <div className="eight wide field register_mobile">
                                <label>Nome</label>
                                <input className='register_input_mobile' name="name" value={user.name} onChange={updateRegisterInformation}  style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                            </div>
                            <div className="eight wide field register_mobile">
                                <label>Sobrenome</label>
                                <input className='register_input_mobile' name="name" value={user.name} onChange={updateRegisterInformation}  style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                            </div>
                        </div>

                        <div className="field register_mobile">
                            <label>Email</label>
                            <input className='register_input_mobile' name="email" value={user.email} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                        </div>

                        <div className="field register_mobile">
                            <label>CPF/CNPJ</label>
                            <input className='register_input_mobile' name="cpf" value={user.cpf} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                        </div>
                        <div className="fields">
                            <div className="eight wide field register_mobile">
                                <label>Senha:</label>
                                <input className='register_input_mobile' name="password" value={user.password} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
                            </div>
                            <div className="eight wide field register_mobile">
                                <label>Confirmar Senha:</label>
                                <input className='register_input_mobile' name="password" value={user.passwordConfirm} onChange={updateConfirmInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
                            </div>
                        </div>
                        <div className='box_mobile'>
                            <button className="ui big fluid button register_mobile" onClick={create}>Cadastrar</button>
                        </div>
                        <div className='register_finish_text_mobile'>
                            <BsArrowLeftShort size={15} />
                            <Link to='/login'> <p className='cart_finish_subtext'>Já Possui cadastro? <b>Login</b></p> </Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
            // } else if (screenSize.width < 900 && screenSize.width > 500) {
            //   return renderTabletView();
        } else {
            return renderMobileView();
        }
    };
    return <>{getViewToRender()}</>;
}
export default Register