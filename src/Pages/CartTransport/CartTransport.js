import React, { useState } from 'react';
import './CartTransport.css';
import axios from "axios";

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';

//Importando os icones
import { FaStar } from 'react-icons/fa'

//importando as frameworks
import { Link } from 'react-router-dom';


function CartTransport() {

  const [cep, setCep] = useState('');
  const [addressInfo, setAddressInfo] = useState(false);
  const [endereco, setEndereco] = useState({});

  const buscarEndereco = () => {
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => setEndereco(response.data))
        .catch(error => console.log('Erro na busca do CEP:', error));
    }
  };

  const handleChangeCep = (event) => {
    const novoCep = event.target.value;
    setCep(novoCep);
    setAddressInfo(true)
    buscarEndereco();
  };

  var valor = 1100.00;
  var frete = 100;
  var total = 1200;

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  return (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress  '>
        <div className="ui tiny steps">
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
                <form className="ui form">
                  <div className="field">
                    <label>Nome</label>
                    <div className="two fields">
                      <div className="field">
                        <input type="text" name="shipping[first-name]" placeholder="Primiero Nome" />
                      </div>
                      <div className="field">
                        {!addressInfo ?
                          <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" value=""/>
                          :
                          <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" value={endereco.localidade + ", " + endereco.bairro + ", " + endereco.logradouro}/>
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
                        <input type="text" name="shipping[address-2]" placeholder="CEP " onBlur={(event) => handleChangeCep(event)}/>
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
              <h5 className='TitleTextBuyProduct'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${valor}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Frete R${frete}</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${total}</h5>
            </div>
            <div className='button_total_Cart'>
              <Link to='/cart/confirm'>
                <button className="fluid ui button final">Finalizar Compra</button>
              </Link>
              <Link to='/'>
                <button className="fluid ui button blue basic cont">Continuar Comprando</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='box_cart_transport_title_similar'>
        <FaStar color='var(--white)' size={40} />
        <h1>Produtos Semelhantes</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  );
}

export default CartTransport;
