import React, { useState } from 'react';
import './CartPayment.css';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import { Link } from 'react-router-dom';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';
import { FaStar } from 'react-icons/fa';
import CardAll from '../../assets/img/CardAll.png';
import CardCVV from '../../assets/img/CardCVV.png';
import CardDate from '../../assets/img/CardDate.png';
import CardName from '../../assets/img/CardName.png';
import CardNumber from '../../assets/img/CardNumber.png';
import { Dropdown } from 'semantic-ui-react';


function CartPayment() {

  var valor = 1100.00;
  var frete = 100;
  var total = 1200;

  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const options = [
    { key: 1, icon: 'cc visa icon', text: 'Visa', value: 1 },
    { key: 2, icon: 'cc mastercard icon', text: 'Mastercard', value: 2 },
    { key: 3, icon: 'cc discover icon', text: 'Discover', value: 3 },
    { key: 3, icon: 'cc diners club icon', text: 'Diners Club', value: 4 },
  ];


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
          <div className="step">
            <i className="payment icon"></i>
            <div className="content">
              <div className="title">Pagamento</div>
            </div>
          </div>
          <div className="disabled step">
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
      <div className='containerCartPayment'>
        <div className='boxCartProductDetailPayment'>
          <div className='boxCartProductPayment'>
            <div className='boxCartProductTitle'>
              <h5 className='TitleTextCartProduct'>Forma de Pagamento</h5>
            </div>
            <div className='formsPayment'>
              <form class="ui form">
                <div class="fields">
                  <div class="eight wide field">
                    <label>Bandera do Cartão</label>
                    <Dropdown
                      placeholder="Selecione uma opção"
                      className='dropDownCard'
                      fluid
                      selection
                      options={options}
                    />
                  </div>
                  <div class="eight wide field">
                    <label>Nome do Titular</label>
                    <input id='NameCard' type="text" name="card[number]" maxlength="16" placeholder="Nome Completo"
                      onFocus={() => handleInputFocus('1')}
                      onBlur={handleInputBlur}
                    />
                  </div>
                </div>
                <div class="fields">
                  <div class="seven wide field">
                    <label>Número do cartão</label>
                    <input id='NumberCard' type="text" name="card[number]" maxlength="16" placeholder="0000 0000 0000 0000"
                      onFocus={() => handleInputFocus('2')}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div class="three wide field">
                    <label>CVV</label>
                    <input id='CvvCard' type="text" name="card[cvc]" maxlength="3" placeholder="CVC"
                      onFocus={() => handleInputFocus('3')}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div class="six wide field">
                    <label>Validade</label>
                    <div class="two fields">
                      <div class="field">
                        <select id='DateCard' class="ui fluid search dropdown" name="card[expire-month]"
                          onFocus={() => handleInputFocus('4')}
                          onBlur={handleInputBlur}
                        >
                          <option value="">Mês</option>
                          <option value="1">Janeiro</option>
                          <option value="2">Fevereiro</option>
                          <option value="3">Março</option>
                          <option value="4">Abril</option>
                          <option value="5">Maio</option>
                          <option value="6">Junho</option>
                          <option value="7">Julho</option>
                          <option value="8">Agosto</option>
                          <option value="9">Setembro</option>
                          <option value="10">Outubro</option>
                          <option value="11">Novembro</option>
                          <option value="12">Dezembro</option>
                        </select>
                      </div>
                      <div class="field">
                        <input id='YearCard' type="text" name="card[expire-year]" maxlength="4" placeholder="Ano"
                          onFocus={() => handleInputFocus('5')}
                          onBlur={handleInputBlur}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {focusedInput === '1' && (
              <img src={CardName} className='cardInstrution' />
            )}
            {focusedInput === '2' && (
              <img src={CardNumber} className='cardInstrution' />
            )}
            {focusedInput === '3' && (
              <div>
                <img data-aos="flip-left" src={CardCVV} className='cardInstrution' />
              </div>
            )}
            {focusedInput === '4' && (
              <img src={CardDate} className='cardInstrution' />
            )}
            {focusedInput === '5' && (
              <img src={CardDate} className='cardInstrution' />
            )}
            {focusedInput === null && (
              <img src={CardAll} className='cardInstrution' />
            )}
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
              <Link to='/cart/transport'>
                <button className="fluid ui button final">Finalizar Compra</button>
              </Link>
              <Link to='/'>
                <button className="fluid ui button blue basic cont">Continuar Compando</button>
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

export default CartPayment;
