import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"
import logo from "../../assets/img/logoWEG.png"
import { useState } from "react";
import { UserService } from '../../Service';


function Register() {
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
        if (user.password !== passwordConfirm) {
            event.preventDefault();
        } else {
            event.preventDefault();
            localStorage.setItem("verifyLogin", 'yes');
            UserService.create(user)
            navigate('/');
        }
    }

    return (

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
                            <div className="eight wide field">
                                <label>Nome</label>
                                <input value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                            </div>
                            <div className="eight wide field">
                                <label>Sobrenome</label>
                                <input value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                            </div>
                        </div>

                        <div className="field">
                            <label>Email</label>
                            <input value={user.email} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                        </div>

                        <div className="field">
                            <label>CPF/CNPJ</label>
                            <input value={user.cpf} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                        </div>
                        <div className="fields">
                            <div className="eight wide field passwordRegister">
                                <label>Senha:</label>
                                <input value={user.password} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
                            </div>
                            <div className="eight wide field passwordConfirm">
                                <label>Confirmar Senha:</label>
                                <input value={user.passwordConfirm} onChange={updateConfirmInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
                            </div>
                        </div>
                        <div className='box'>
                            <button className="ui big fluid button register" onClick={create}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register