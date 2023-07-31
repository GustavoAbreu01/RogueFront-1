import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import { UserService } from '../../Service';
import logo from "../../assets/img/logoWEG.png"


function Login() {
    const navigate = useNavigate();

    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [userLogin, setUserLogin] = useState({
        emailLogin: '',
        passwordLogin: '',
    });

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
    });

    const updateLoginInformation = (event) => {
        setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
    }


    const handleLogin = () => {
        localStorage.setItem('verifyLogin', 'yes');
        navigate("/");
        alert("Senha ou email incorretos!!");
    };

    function create(event) {
        if (user.password !== passwordConfirm) {
            event.preventDefault();
        } else {
            event.preventDefault();
            localStorage.setItem("verifyLogin", 'yes');
            UserService.create(user)
                .then(response => {
                    navigate('/home');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    return (

        <>
            <div className='container_login_image'>
                <Link to={'/'}><img className='logo_image_login' src={logo} /></Link>
            </div>
            <div className="container_login_inputs">
                <div className="box_login_inputs_detail"></div>
                <div className="box_login_inputs">
                    <form className="ui form login">
                        <h2 className="ui header titleLogin">Login</h2>
                        <div className="field">
                            <label>Email</label>
                            <input value={userLogin.emailLogin} onChange={updateLoginInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                        </div>

                        <div className="field">
                            <label>Senha</label>
                            <input value={userLogin.passwordLogin} onChange={updateLoginInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                        </div>
                        <div className='box'>
                            <button className="ui big fluid button login" onClick={() => handleLogin()}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
