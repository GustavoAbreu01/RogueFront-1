import React, { useState } from 'react';
import './CartTransport.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';

function CartTransport() {

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
      <div className='boxContainerProgress  '>
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
      <div className='containerCartTransport'>
        <div className='boxCartProductDetailTransport'>
          <div className='boxCartProductTransport'>
            <div className='boxCartProductTitle'>
              <h5 className='TitleTextCartProduct'>Verificar Transporte do Pedido</h5>
            </div>
            <div className='formsTransport'>
              <form class="ui form">
                <div class="field">
                  <label>Nome</label>
                  <div class="two fields">
                    <div class="field">
                      <input type="text" name="shipping[first-name]" placeholder="Primiero Nome" />
                    </div>
                    <div class="field">
                      <input type="text" name="shipping[last-name]" placeholder="Rua, Bairro, Número" />
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label>Endereço de Entrega</label>
                  <div class="fields">
                    <div class="twelve wide field">
                      <input type="text" name="shipping[address]" placeholder="Complemento" />
                    </div>
                    <div class="four wide field">
                      <input type="text" name="shipping[address-2]" placeholder="CEP " />
                    </div>
                  </div>
                </div>
                <div class="two fields">
                  <div class="field">
                    <label>Estado</label>
                    <select class="ui fluid dropdown">
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
                  <div class="field">
                    <label>País</label>
                    <select class="ui fluid dropdown">
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
        <div className='boxInfoTotalCart'>
          <div className='boxInfoTotalBuy'>
            <div className='boxInfoTotalBuyTitle'>
              <h5 className='TitleTextBuyProduct'>Resumo do Pedido</h5>
            </div>
            <div className='boxInfoTotalBuySubTitle'>
              <h5 className='subTextBuyProduct'>Subtotal R${valor}</h5>
            </div>
            <div className='boxInfoTotalBuySubTitle'>
              <h5 className='subTextBuyProduct'>Frete R${frete}</h5>
            </div>
            <div className='boxInfoTotalBuySubTitle'>
              <h5 className='TotalTextBuyProduct'>Total R${total}</h5>
            </div>
            <div className='boxButtonTotalCart'>
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
      <div className='boxTitleSimilar'>
        <FaStar color='var(--white)' size={40} />
        <h1 className='titleSimilar' >Produtos Semelhantes</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  );
}

export default CartTransport;
