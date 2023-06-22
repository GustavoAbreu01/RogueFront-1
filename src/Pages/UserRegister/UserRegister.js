import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '.././UserRegister/style.css'
import { useState } from "react";
import german from "../../assets/img/german.png"
import english from "../../assets/img/english.png"
import spanish from "../../assets/img/spanish.png"



function UserRegister() {
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confPass, setConfPass] = useState('');
  const [cpf, setCpf] = useState('');
  // const [idiomas, setIdiomas] = useState([]);
  const languages = ["german", "english", "spanish", "french"];

  // emailLogin: string;
  // passLogin: String;
  // nome: string;
  // email: string;
  // pass: string;
  // confPass: string;
  // cpf: string;
  // idiomas: string[] = [this.alemao, this.ingles, this.espanhol, this.frances];

  // craftingTable(){
  // const brothers: Object[] = JSON.parse(localStorage.getItem('brothers')) || []
  // brothers.push({
  //   nome: this.nome,
  //   email: this.email,
  //   pass: this.pass,
  //   cpf: this.cpf
  // })

  // const [user, setUser] = useState({
  //   "name": "",
  //   "email": "",
  //   "pass": "",
  //   "cpf": "",
  // });

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const handleCrafting = () => {
    users.push({
      name: name,
      email: email,
      pass: pass,
      cpf: cpf
    });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem("verificar", 'sim');
    navigate("/");
  };

  const handleLogin = () => {
    localStorage.setItem("flags", 'assets/img/portuguese.png');
    localStorage.setItem("flags", JSON.stringify(languages));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((register) => {
      if (emailLogin === register.name) {
        if (passLogin === register.pass) {
          localStorage.setItem('verificar2', 'sim');
          navigate("/");
        } else {
          alert("Senha ou email incorretos!!");
        }
      }
    });
  };


  // localStorage.setItem('brothers', JSON.stringify(brothers))
  // localStorage.setItem("verificar", 'sim')
  // this.router.navigate(['']);
  // }

  // logar(){
  //   localStorage.setItem("bandeira", 'assets/img/portugues.png')
  //   localStorage.setItem("bandeiras", JSON.stringify(this.idiomas))
  //   const brothers: Object[] = JSON.parse(localStorage.getItem('brothers')) || []
  //   brothers.forEach(cadastro => {
  //     if(this.emailLogin == cadastro["nome"]){
  //       if(this.passLogin == cadastro["pass"]){
  //         localStorage.setItem('verificar2', 'sim')
  //         this.router.navigate(['']);
  //       }else{
  //         alert("Senha ou email incorretos!!")
  //       }
  //     }
  //   });

  return (
    
    <>

    <div class="ui three column  stackable grid container">
     
     <div class="column">
      <form class="ui form login">

      <h2 class="ui header titleRegister">Login</h2>

      <div class="field emailLogin">
        <label>Emai:</label>
        <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="emailLogin" placeholder="seuEmail@email.com" />
      </div>

      <div class="field passwordLogin">
        <label>Senha:</label>
        <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="passwordLogin" placeholder="suasenha/123455" />
      </div>
      <button class="large ui button login" type="submit">Entrar</button>
      </form>
      </div>

      <div class="column">
      <div class="ui vertical divider"> Ou </div>
      </div>
      
      <div class="column">
      <form class="ui form register">

      <h2 class="ui header titleRegister">Cadastro</h2>

        <div class="field">
          <label>Nome</label>
          <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="nameRegister" placeholder="Seu nome" />
        </div>

        <div class="field">
          <label>Email</label>
          <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="emailRegister" placeholder="seuemail@email.com" />
        </div>

        <div class="field">
          <label>CPF/CNPJ</label>
          <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="cpflRegister" placeholder="12312312334" />
        </div>

        <div class="field passwordRegister">
          <label>Senha:</label>
          <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="passwordRegister" placeholder="suasenha/123455" />
        </div>

        <div class="field passwordConfirm">
          <label>Senha:</label>
          <input style={{ backgroundColor:'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)',borderLeftWidth: '4px'}} type="text" name="passwordConfirm" placeholder="suasenha/123455" />
        </div>

      <button class=" large ui button" type="submit">Cadastrar</button>
      </form>
      </div>
      </div></>
)
}
export default UserRegister

    //  <h2 className="titleLogin">Login</h2>

    //   <h2 className="titleRegister">Cadastro</h2>

    //   <h3 className="emailLogin">Email:</h3>
      
    //   <input type="text" className="emailLoginInput" id="emailLoginInput" placeholder="bgimv@email.com"/>
    //   {/* <input type="text" className="EmailLoginInput" id="emailLoginInput"  placeholder="bgimv@email.com" required [(ngModel)]="emailLogin">
    //   //<input type="text" id="name" name="name" onChange={updateCard} value={card.name} placeholder="Nome do personagem" className="nameCharacter" /> 
           
  
    //   <h3 className="password">Senha:</h3>
    //   <input type="text" id="passwordLoginInput" className="passwordLoginInput" placeholder="bgimv/123455"/>
    //    <input type="text" id="passwordLoginInput" className="passwordLoginInput" placeholder="bgimv/123455" [(ngModel)]="passLogin">

    //   <div className="divider"></div>



    //   <h3 className="name">Nome:</h3>
    //   <input type="text" className="nameInput" id="nameInput" placeholder="bgimv/123455"/>
    //   {/* <input type="text" className="nameInput" id="nameInput" placeholder="bgimv/123455" required [(ngModel)]="nome">
    //    <input type="text" id="name" name="name" onChange={updateCard} value={card.name} placeholder="Nome do personagem" className="nameCharacter" /
      

    //   <h3 class="emailregister">Email:</h3>
    //   <input type="text" class="emailCadInput" id="emailCadInput" placeholder="bgimv@email.com" required [(ngModel)]="email">
      
    //   <h3 class="cpfcnpj">CPF/CNPJ:</h3>
    //   <input type="text" class="cpfInput" id="cpfInput" placeholder="12345678801929238383" required [(ngModel)]="cpf">
      
    //   <h3 class="SenhaCadastro">Senha:</h3>
    //   <input type="text" id="senhaInput" class="senhaInput" placeholder="bgimv/123455" [(ngModel)]="pass">

    //   <h3 class="confSenhaCadastro">Confirma a senha:</h3>
    //   <input type="text" class="confSenhaInput" id="confSenhaInput" placeholder="bgimv/123455" required [(ngModel)]="confPass">
    //   <button class="cadastrar" onClick={handleCrafting}>Cadastrar</button>
    //   <button class="logar" onClick={handleLogin}>Logar</button>  
    
