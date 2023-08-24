//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import "./Login.css"

//Importando a Service
import { UserService } from '../../Service';

//importando as frameworks
import { useNavigate, Link } from "react-router-dom";

//Importando as imagens
import logo from "../../assets/img/logoWEG.png"

//Importando os icones
import { BsArrowLeftShort } from 'react-icons/bs';

function Login() {
    
    const [userLogin, setUserLogin] = useState({
        "email": "",
        "password": ""
    });

    const updateUser = (event) => {
        setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        try {
            const { email, password } = userLogin;
            console.log(userLogin);
            event.preventDefault();
            const response = await UserService.login(email, password);
            if(response){
                localStorage.setItem('userLogin', JSON.stringify(response));
                localStorage.setItem('verifyLogin', 'yes');
                navigate("/");
            }
            
        } catch (error) {
            alert("Erro ao fazer login. Verifique suas credenciais.");
            console.log(error);
        }
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

    const renderDesktopView = () => (
        <>
         <div className='container_login'>
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
                            <input name="email" value={userLogin.email} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                        </div>
                        <div className="field">
                            <label>Senha</label>
                            <input name="password" value={userLogin.password} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                        </div>
                        <div className='box'>
                            <button className="ui big fluid button login" onClick={handleLogin}>Login</button>
                        </div>
                        <div className='login_finish_text'>
                            <BsArrowLeftShort size={15} />
                            <Link to='/register'> <p className='cart_finish_subtext'>Não Possui cadastro? <b>Realizar Cadastro</b></p> </Link>
                        </div>
                    </form>
                </div>
            </div>
            </div>
           
        </>
    )

    const renderMobileView = () => (
        <div className='container_login_mobile'>
        <div className='container_login_image_mobile'>
            <Link to={'/'}><img className='logo_image_login_mobile' src={logo} /></Link>
        </div>
        <div className="container_login_inputs_mobile">
            <div className="box_login_inputs_detail_mobile"></div>
            <div className="box_login_inputs_mobile">
                <form className="ui form login_mobile">
                    <h2 className="ui header titleLogin_mobile">Login</h2>
                    <div className="field">
                        <label>Email</label>
                        <input value={userLogin.emailLogin} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                    </div>
                    <div className="field">
                        <label>Senha</label>
                        <input value={userLogin.passwordLogin} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                    </div>
                    <div className='box'>
                        <button className="ui big fluid button login" onClick={() => handleLogin()}>Login</button>
                    </div>
                    <div className='login_finish_text_mobile'>
                        <BsArrowLeftShort size={15} />
                        <Link to='/register'> <p className='cart_finish_subtext'>Não Possui cadastro? <b>Realizar Cadastro</b></p> </Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
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
}
export default Login
