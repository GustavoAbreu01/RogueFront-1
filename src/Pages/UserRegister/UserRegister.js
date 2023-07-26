import React from 'react'
import { useNavigate } from "react-router-dom";
import "./UserRegister.css"
import { useState } from "react";
import { UserService } from '../../Service';
import axios from 'axios';


function UserRegister() {
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

  const updateRegisterInformation = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const updateConfirmInformation = (event) => {
    setPasswordConfirm(event.target.value);
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

      <div className="ui three column stackable grid container">

        <div className="column">
          <form className="ui form login">

            <h2 className="ui header titleRegister">Login</h2>

            <div className="field emailLogin">
              <label>Email:</label >
              <input value={userLogin.emailLogin} onChange={updateLoginInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuEmail@email.com" />
            </div>

            <div className="field passwordLogin">
              <label>Senha:</label>
              <input value={userLogin.passwordLogin} onChange={updateLoginInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
            </div>
            <div className='box'>
              <button className="ui big fluid button" onClick={() => handleLogin()}>Entrar</button>
            </div>
          </form>
        </div>

        <div className="column">
          <div className="ui vertical divider"> Ou </div>
        </div>

        <div className="column">
          <form className="ui form register">

            <h2 className="ui header titleRegister">Cadastro</h2>

            <div className="field">
              <label>Nome</label>
              <input value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
            </div>

            <div className="field">
              <label>Email</label>
              <input value={user.email} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
            </div>

            <div className="field">
              <label>CPF/CNPJ</label>
              <input value={user.cpf} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
            </div>

            <div className="field passwordRegister">
              <label>Senha:</label>
              <input value={user.password} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
            </div>

            <div className="field passwordConfirm">
              <label>Senha:</label>
              <input value={user.passwordConfirm} onChange={updateConfirmInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="suasenha/123455" />
            </div>
            <div className='box'>
              <button className="ui big fluid button" onClick={create}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div></>
  )
}
export default UserRegister