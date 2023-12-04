//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import "./Login.css"

//Importando a Service
import { UserService } from '../../Service';

//importando as frameworks
import { useNavigate, Link } from "react-router-dom";
import swal from 'sweetalert2';

//Importando as imagens
import logo from "../../assets/img/logoWEG.png"

//Importando os icones
import { BsArrowLeftShort } from 'react-icons/bs';

function Login() {
    
    const [login, setLogin] = useState({
        "username": "",
        "password": ""
    });

    const updateUser = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await UserService.login(login);
    //         navigate('/');
    //     } catch (error) {
    //         alert("Erro ao fazer login. Verifique suas credenciais.");
    //         console.log(error);
    //     }
    // };

    async function logIn(event) {
        event.preventDefault();
    
        if (login.username === '' || login.password === '') {
            swal.fire({
                title: 'Preencha todos os campos!',
                icon: 'error',
                showConfirmButton: false,
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                background: 'var(--red)',
                color: 'var(--white)',
                toast: true,
                width: 400,
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            });
        } else {
            try {
                const response = await UserService.login(login);
                navigate('/');
            } catch (error) {
                swal.fire({
                    title: 'Erro ao fazer login',
                    text: 'Verifique suas credenciais e tente novamente.',
                    icon: 'error',
                    showConfirmButton: false,
                    position: 'top-end',
                    timer: 3000,
                    timerProgressBar: true,
                    background: 'var(--red)',
                    color: 'var(--white)',
                    toast: true,
                    width: 400,
                    showClass: {
                        popup: 'animate__animated animate__backInRight'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutRight'
                    },
                }).then(() => {
                    console.error(error);
                });
            }
        }
    }
    

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
                            <input name="username" value={login.username} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                        </div>
                        <div className="field">
                            <label>Senha</label>
                            <input name="password" value={login.password} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="password" placeholder="12312312334" />
                        </div>
                        <div className='box'>
                            <button className="ui big fluid button login" onClick={logIn}>Login</button>
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
        <div className='container_login_image'>
            <Link to={'/'}><img className='logo_image_login_mobile' src={logo} /></Link>
        </div>
        <div className="container_login_inputs">
            <div className="box_login_inputs_detail_mobile"></div>
            <div className="box_login_inputs_mobile">
                <form className="ui form login_mobile">
                    <h2 className="ui header titleLogin_mobile">Login</h2>
                    <div className="field">
                        <label>Email</label>
                        <input value={login.emailLogin} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="seuemail@email.com" />
                    </div>
                    <div className="field">
                        <label>Senha</label>
                        <input value={login.passwordLogin} onChange={updateUser} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="12312312334" />
                    </div>
                    <div className='box'>
                        <button className="ui big fluid button login" onClick={() => logIn()}>Login</button>
                    </div>
                    <div className='login_finish_text'>
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
