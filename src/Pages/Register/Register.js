//Importando o React e o CSS
import React, { useState, useEffect } from 'react'
import "./Register.css"

//Importando a Service
import { UserService } from '../../Service/userService';

//importando as frameworks
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert2';

//Importando as imagens
import logo from "../../assets/img/logoWEG.png"

//Importando os ícones
import { BsArrowLeftShort } from 'react-icons/bs';


function Register() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [passwordConfirm, setPasswordConfirm] = useState('');

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

    const [user, setUser] = useState({
        cpf: '',
        name: '',
        email: '',
        password: '',
        address: null,
        saves: null,
        cart: null,
        cards: null,
        authorities: [
            "CLIENT"
        ]
    });

    const updateRegisterInformation = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        const limitedValue = numericValue.substring(0, 11);
        let formattedValue = limitedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, (_, p1, p2, p3, p4) => {
          return p4 ? `${p1}.${p2}.${p3}-${p4}` : p3 ? `${p1}.${p2}.${p3}` : p2 ? `${p1}.${p2}` : p1;
        });
        if (/^\d*$/.test(limitedValue) || limitedValue === '') {
          setUser({ ...user, cpf: formattedValue });
        }
      };
      

    const updateConfirmInformation = (event) => {
        setPasswordConfirm(event.target.value);
    }

    const navigate = useNavigate();

    function create(event) {
        if (user.password !== passwordConfirm) {
            event.preventDefault();
            swal.fire({
                title: 'Senhas não conferem!',
                icon: 'error',
                showConfirmButton: false,
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                background: 'var(--red)',
                toast: true,
                width: 400,
                color: 'var(--white)',
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            })
        } else if (user.cpf === '' || user.name === '' || user.email === '' || user.password === '') {
            event.preventDefault();
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
            })
        } else if (user.password.length < 6) {
            event.preventDefault();
            swal.fire({
                title: 'Senha deve ter no mínimo 6 caracteres!',
                icon: false,
                showConfirmButton: false,
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                background: 'var(--red)',
                toast: true,
                width: 400,
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            })
        } else {
            event.preventDefault();
            UserService.create(user);
            swal.fire({
                title: 'Cadastro realizado com sucesso!',
                text: 'Você será redirecionado para a página de login',
                icon: 'success',
                showConfirmButton: false,
                confirmButtonColor: 'var(--blue-primary)',
                position: 'top-end',
                timer: 2000,
                timerProgressBar: true,
                toast: true,
                width: 400,
                showClass: {
                    popup: 'animate__animated animate__backInRight'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight'
                },
            }).then(() => {
                navigate('/login');
            }
            )
        }
    }

    const formatCPF = (value) => {
        // Remove non-numeric characters
        const numericValue = value.replace(/\D/g, '');
    
        // Format CPF with dots and dash
        return numericValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
      };

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
                        <div className="field register">
                            <label>Nome Completo</label>
                            <input className='register_input' name="name" value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome completo" />
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
                                <input className='register_input' name="password" value={user.password} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="password" placeholder="suasenha/123455" />
                            </div>
                            <div className="eight wide field register">
                                <label>Confirmar Senha:</label>
                                <input className='register_input' name="password" value={user.passwordConfirm} onChange={updateConfirmInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="password" placeholder="suasenha/123455" />
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
                                    <input className='register_input_mobile' name="name" value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
                                </div>
                                <div className="eight wide field register_mobile">
                                    <label>Sobrenome</label>
                                    <input className='register_input_mobile' name="name" value={user.name} onChange={updateRegisterInformation} style={{ backgroundColor: 'var(--grey-secondary)', borderLeftColor: 'var(--blue-primary)', borderLeftWidth: '4px' }} type="text" placeholder="Seu nome" />
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
                            <div className='register_finish_text'>
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