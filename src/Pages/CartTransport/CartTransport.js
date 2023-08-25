//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './CartTransport.css';
import axios from "axios";

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';

//importando as frameworks
import { Link, useNavigate } from 'react-router-dom';

//Importando os icones
import { FaCheck, FaCreditCard, FaTruck, FaInfo, FaStar } from 'react-icons/fa';
import { AddressService, CartService } from '../../Service';

function CartTransport() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [productsCart, setProductsCart] = useState([]);
  const [cep, setCep] = useState('');
  const userPresent = JSON.parse(localStorage.getItem('user')) || []
  const [addressInfo, setAddressInfo] = useState(false);
  const [endereco, setEndereco] = useState({});
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();

  const buscarEndereco = () => {
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          setEndereco(response.data);
        })
        .catch((error) => {
          console.log(error);
        }
        );
      console.log(endereco)
    }
  };

  const getCart = async () => {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const cartId = user.cart.id;
    const products = await CartService.GetCart(cartId);
    if (products) {
      setProductsCart(products);
      setTotal(products.cartProductQuantities);
    } else {
      setProductsCart([]);
    }
  }

  const handleChangeCep = (event) => {
    const novoCep = event.target.value;
    setCep(novoCep);
    setAddressInfo(true)
    buscarEndereco();
  };

  useEffect(() => {
    getCart();
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const updateAddress = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };


  const [address, setAddress] = useState({
    "rua": "",
    "numero": 400,
    "complemento": "",
    "bairro": "",
    "cidade": "",
    "estado": "",
    "pais": "",
    "uf": "",
    "cep": "",
  });

  const handleTransport = async (event) => {
    const rua = endereco.logradouro;
    const numero = address.numero;
    const complemento = address.complemento;
    const bairro = endereco.bairro;
    const cidade = endereco.localidade;
    const estado = endereco.uf;
    const pais = address.pais;
    const uf = endereco.uf;
    const cep = endereco.cep;
    const userAddress = { rua, numero, complemento, bairro, cidade, estado, pais, uf, cep };
    console.log(userAddress);
    event.preventDefault();
    if (userAddress.rua !== "" && userAddress.numero !== "" && userAddress.bairro !== "" && userAddress.cidade !== "" && userAddress.estado !== "" && userAddress.pais !== "" && userAddress.uf !== "" && userAddress.cep !== "") {
      AddressService.create(userAddress);
      navigate("/cart/Confirm");
    } else {
      alert("Alguma informação está incorreta.");
    }
  };

  const renderDesktopView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_transport'>
        <div className="ui small steps">
          <div className="completed step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="completed step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_transport'>
        <div className='box_cart_product_detail_transport'>
          <div className='box_cart_product_transport'>
            <div className='cart_transport_title'>
              <h5 className='cart_transport_title_text'>Verificar Transporte do Pedido</h5>
            </div>
            <div className='cart_transport_form'>
              <form className="ui large form">
                <div className="field">
                  <label>Nome</label>
                  <div className="two fields">
                    <div className="field">
                      <input onChange={updateAddress} name="name" type="text" placeholder="Primiero Nome" />
                    </div>
                    <div className="field">
                      {!addressInfo ?
                        <input type="text" onChange={updateAddress} placeholder="Rua, Bairro, Número" value="" />
                        :
                        <input type="text" onChange={updateAddress} placeholder="Rua, Bairro, Número" value={endereco.localidade + ", " + endereco.bairro + ", " + endereco.logradouro} />
                      }

                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Endereço de Entrega</label>
                  <div className="fields">
                    <div className="twelve wide field">
                      <input type="text" name="complemento" onChange={updateAddress} placeholder="Complemento" />
                    </div>
                    <div className="four wide field">
                      <input type="text" name="shipping[address-2]" placeholder="CEP" onBlur={(event) => handleChangeCep(event)} />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Estado</label>
                    <select name="estado" onChange={updateAddress} className="ui fluid dropdown" value={endereco.uf}>
                      <option value="">Estado</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>País</label>
                    <select name="pais" onChange={updateAddress} className="ui fluid dropdown">
                      <option value="">País</option>
                      <option value="ZA">África do Sul</option>
                      <option value="DE">Alemanha</option>
                      <option value="AE">Emirados Árabes Unidos</option>
                      <option value="AR">Argentina</option>
                      <option value="DZ">Argélia</option>
                      <option value="AU">Austrália</option>
                      <option value="BR">Brasil</option>
                      <option value="BE">Bélgica</option>
                      <option value="CA">Canadá</option>
                      <option value="KZ">Cazaquistão</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CO">Colômbia</option>
                      <option value="KR">Coreia do Sul</option>
                      <option value="AE">Emirados Árabes Unidos</option>
                      <option value="ES">Espanha</option>
                      <option value="US">Estados Unidos</option>
                      <option value="FR">França</option>
                      <option value="IN">Índia</option>
                      <option value="IT">Itália</option>
                      <option value="MX">México</option>
                      <option value="PT">Portugal</option>
                      <option value="GB">Reino Unido</option>
                      <option value="TR">Turquia</option>

                      , Equador, Espanha, Estados Unidos, França, Gana, Itália, Japão, Malásia, Países Baixos, Peru, Polônia, Reino Unido, Rússia,[a] Singapura, Suécia, Tailândia, Turquia e Índia, além de 57 filiais[24] e distribuição em mais de 135 países.
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart'>
              <button onClick={handleTransport} className="fluid ui button final">Avançar Etapa</button>
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
            </div>
          </div>
        </div>
      </div>
      <div className='box_cart_transport_title_similar'>
        <i class="magic icon" color='var(--white)'></i>
        <h1>Produtos Semelhantes</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  )

  const renderTabletView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_transport'>
        <div className="ui small steps">
          <div className="completed step">
            <i className="shop icon"></i>
            <div className="content">
              <div className="title">Carrinho</div>
            </div>
          </div>
          <div className="completed step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="step">
            <i className="truck icon"></i>
            <div className="content">
              <div className="title">Transporte</div>
            </div>
          </div>
          <div className="disabled step">
            <i className="info icon"></i>
            <div className="content">
              <div className="title">Confirmação do Pedido</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container_cart_transport_tablet'>
        <div className='box_cart_product_detail_transport_tablet'>
          <div className='box_cart_product_transport_tablet'>
            <div className='cart_transport_title'>
              <h5 className='cart_transport_title_text'>Verificar Transporte do Pedido</h5>
            </div>
            <div className='cart_transport_form'>
              <form className="ui large form">
                <div className="field">
                  <label>Nome</label>
                  <div className="two fields">
                    <div className="field">
                      <input type="text" name="shipping[first-name]" placeholder="Primiero Nome" />
                    </div>
                    <div className="field">
                      {!addressInfo ?
                        <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" value="" />
                        :
                        <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" value={endereco.localidade + ", " + endereco.bairro + ", " + endereco.logradouro} />
                      }

                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Endereço de Entrega</label>
                  <div className="fields">
                    <div className="twelve wide field">
                      <input type="text" name="shipping[address]" placeholder="Complemento" />
                    </div>
                    <div className="four wide field">
                      <input type="text" name="shipping[address-2]" placeholder="CEP " onBlur={(event) => handleChangeCep(event)} />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Estado</label>
                    <select className="ui fluid dropdown" value={endereco.uf}>
                      <option value="">Estado</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>País</label>
                    <select className="ui fluid dropdown">
                      <option value="">País</option>
                      <option value="ZA">África do Sul</option>
                      <option value="DE">Alemanha</option>
                      <option value="AE">Emirados Árabes Unidos</option>
                      <option value="AR">Argentina</option>
                      <option value="DZ">Argélia</option>
                      <option value="AU">Austrália</option>
                      <option value="BR">Brasil</option>
                      <option value="BE">Bélgica</option>
                      <option value="CA">Canadá</option>
                      <option value="KZ">Cazaquistão</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CO">Colômbia</option>
                      <option value="KR">Coreia do Sul</option>
                      <option value="AE">Emirados Árabes Unidos</option>
                      <option value="ES">Espanha</option>
                      <option value="US">Estados Unidos</option>
                      <option value="FR">França</option>
                      <option value="IN">Índia</option>
                      <option value="IT">Itália</option>
                      <option value="MX">México</option>
                      <option value="PT">Portugal</option>
                      <option value="GB">Reino Unido</option>
                      <option value="TR">Turquia</option>

                      , Equador, Espanha, Estados Unidos, França, Gana, Itália, Japão, Malásia, Países Baixos, Peru, Polônia, Reino Unido, Rússia,[a] Singapura, Suécia, Tailândia, Turquia e Índia, além de 57 filiais[24] e distribuição em mais de 135 países.
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart_tablet'>
          <div className='info_total_buy'>
            <div>
              <h5 className='TitleTextBuyProduct'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete Grátis</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart_tablet'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/confirm'>Avançar Etapa</Link></button>
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

  const renderMobileView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_mobile'>
        <div className="menu_edit_profile">
          <div>
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaCheck className="edit_icon_mobile" color='green' />
          </div>
          <div >
            <FaTruck className="edit_icon_mobile" />
          </div>
          <div >
            <FaInfo className="edit_icon_mobile" color='grey' />
          </div>
        </div>
      </div>
      <div className='container_cart_transport_mobile'>
        <div className='box_cart_product_detail_transport_mobile'>
          <div className='box_cart_product_transport_mobile'>
            <div className='cart_transport_title'>
              <h5 className='cart_transport_title_text'>Endereço para Entrega</h5>
            </div>
            <div className='cart_transport_form_mobile'>
              <form className="ui large form">
                <div className="field">
                  <label>Nome</label>
                  <div className="two fields">
                    <div className="field">
                      <input type="text" name="shipping[first-name]" placeholder="Primiero Nome" />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Endereço de Entrega</label>
                  <div className="two fields">
                    <div className="four wide field">
                      <input type="text" name="shipping[address-2]" placeholder="CEP " onBlur={(event) => handleChangeCep(event)} />
                    </div>
                  </div>
                  <div className="field">
                    {!addressInfo ?
                      <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" value="" />
                      :
                      <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" value={endereco.localidade + ", " + endereco.bairro + ", " + endereco.logradouro} />
                    }
                  </div>
                  <div className="sixteen wide field">
                    <input type="text" name="shipping[address]" placeholder="Complemento" />
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Estado</label>
                    <select className="ui fluid dropdown" value={endereco.uf}>
                      <option value="">Estado</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>País</label>
                    <select className="ui fluid dropdown">
                      <option value="">País</option>
                      <option value="ZA">África do Sul</option>
                      <option value="DE">Alemanha</option>
                      <option value="AE">Emirados Árabes Unidos</option>
                      <option value="AR">Argentina</option>
                      <option value="DZ">Argélia</option>
                      <option value="AU">Austrália</option>
                      <option value="BR">Brasil</option>
                      <option value="BE">Bélgica</option>
                      <option value="CA">Canadá</option>
                      <option value="KZ">Cazaquistão</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CO">Colômbia</option>
                      <option value="KR">Coreia do Sul</option>
                      <option value="AE">Emirados Árabes Unidos</option>
                      <option value="ES">Espanha</option>
                      <option value="US">Estados Unidos</option>
                      <option value="FR">França</option>
                      <option value="IN">Índia</option>
                      <option value="IT">Itália</option>
                      <option value="MX">México</option>
                      <option value="PT">Portugal</option>
                      <option value="GB">Reino Unido</option>
                      <option value="TR">Turquia</option>

                      , Equador, Espanha, Estados Unidos, França, Gana, Itália, Japão, Malásia, Países Baixos, Peru, Polônia, Reino Unido, Rússia,[a] Singapura, Suécia, Tailândia, Turquia e Índia, além de 57 filiais[24] e distribuição em mais de 135 países.
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart_mobile'>
          <div className='info_total_buy'>
            <div>
              <h5 className='TitleTextBuyProduct'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/confirm'>Avançar Etapa</Link></button>
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;

}

export default CartTransport;