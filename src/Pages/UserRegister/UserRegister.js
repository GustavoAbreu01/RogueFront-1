import React from 'react'
import { useNavigate } from "react-router-dom";
import "./UserRegister.css"
import { useState } from "react";
import FooterSimple from '../../Components/FooterSimple/FooterSimple';
import { UserService } from '../../Service';


function UserRegister() {
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const handleRegister = () => {
    if (password === confPassword) {
      let userProv = ({
        name: name,
        email: email,
        password: password,
        register: cpf
      });
      localStorage.setItem("verifyLogin", 'yes');
      UserService.create(userProv)
      localStorage.setItem("userCpf", userProv.register)
      navigate("/");
    } else {
      alert('Senhas diferem')
    }
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('user')) || [];
    users.forEach((register) => {
      if (emailLogin === register.email) {
        if (passwordLogin === register.password) {
          localStorage.setItem('verifyLogin', 'yes');
          navigate("/");
        } else {
          alert("Senha ou email incorretos!!");
        }
      }
    });
  };

  return (

    <>

      <div className="ui three column stackable grid container">

        <div className="column">
          <form className="ui form login">

            <h2 className="ui header titleRegister">Login</h2>

            <div className="field emailLogin">
              <label>Email:</label>
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="emailLogin" placeholder="seuEmail@email.com" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
            </div>

            <div className="field passwordLogin">
              <label>Senha:</label>
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="passwordLogin" placeholder="suasenha/123455" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
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
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="nameRegister" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="field">
              <label>Email</label>
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="emailRegister" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="field">
              <label>CPF/CNPJ</label>
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="cpflRegister" placeholder="12312312334" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </div>

            <div className="field passwordRegister">
              <label>Senha:</label>
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="passwordRegister" placeholder="suasenha/123455" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="field passwordConfirm">
              <label>Senha:</label>
              <input style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" name="passwordConfirm" placeholder="suasenha/123455" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
            </div>
            <div className='box'>
              <button className="ui big fluid button" onClick={() => handleRegister()}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <FooterSimple /></>
  )
}
export default UserRegister