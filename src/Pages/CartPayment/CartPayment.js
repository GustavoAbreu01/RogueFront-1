//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './CartPayment.css';

//importando as frameworks
import { Dropdown } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

//Importando os componentes
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import ProductCarouselSmallSimilar from '../../Components/ProductCarouselSmallSimilar/ProductCarouselSmallSimilar';
import SmallProductHorizontal from '../../Components/SmallProductHorizontal/SmallProductHorizontal';

//Importando as imagens
import CardAll from '../../assets/img/CardAll.png';
import CardCVV from '../../assets/img/CardCVV.png';
import CardDate from '../../assets/img/CardDate.png';
import CardName from '../../assets/img/CardName.png';
import CardNumber from '../../assets/img/CardNumber.png';

//Importando os icones
import { FaCheck, FaCreditCard, FaTruck, FaInfo, FaStar } from 'react-icons/fa';
import { CartService, PaymentService } from '../../Service';


function CartPayment() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [focusedInput, setFocusedInput] = useState(null);
  const [productsCart, setProductsCart] = useState([]);
  const userPresent = JSON.parse(localStorage.getItem('user')) || []
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();

  const handleInputFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
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

  const [payment, setPayment] = useState({
    "name": "Soundeeper",
    "validity": "2004-08-02",
    "number": "9999888877776666",
    "cvv": 321,
    "userCount": userPresent.id
  });

  const updatePayment = (event) => {
    setPayment({ ...payment, [event.target.name]: event.target.value });
  };

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const handlePayment = async (event) => {
    event.preventDefault();
    if (payment.name !== "" && payment.validity !== "" && payment.number !== "" && payment.cvv !== "" && payment.userCount !== "") {
      PaymentService.create(payment);
      navigate("/cart/transport");
    } else {
      alert("Alguma informação está incorreta.");
    }
  };

  const options = [
    { key: 1, icon: 'cc visa icon', text: 'Visa', value: 1 },
    { key: 2, icon: 'cc mastercard icon', text: 'Mastercard', value: 2 },
    { key: 3, icon: 'cc discover icon', text: 'Discover', value: 3 },
    { key: 4, icon: 'cc diners club icon', text: 'Diners Club', value: 4 },
  ];

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

  const renderDesktopView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_payment'>
        <div className="ui small steps">
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
      <div className='container_cart_payment'>
        <div className='box_cart_product_detail_payment'>
          <div className='box_cart_product_payment'>
            <div className='cart_payment_title'>
              <h5 className='cart_payment_title_text'>Forma de Pagamento</h5>
            </div>
            <div className='cart_payment_form'>
              <form className="ui large form">
                <div className="fields">
                  {focusedInput === '1' && (
                    <img src={CardName} className='cart_payment_card_Instrution' />
                  )}
                  {focusedInput === '2' && (
                    <img src={CardNumber} className='cart_payment_card_Instrution' />
                  )}
                  {focusedInput === '3' && (
                    <img data-aos="flip-left" src={CardCVV} className='cart_payment_card_Instrution' />
                  )}
                  {focusedInput === '4' && (
                    <img src={CardDate} className='cart_payment_card_Instrution' />
                  )}
                  {focusedInput === '5' && (
                    <img src={CardDate} className='cart_payment_card_Instrution' />
                  )}
                  {focusedInput === null && (
                    <img src={CardAll} className='cart_payment_card_Instrution' />
                  )}
                  <div className='field payment'>
                    <div className="sixteen wide field">
                      <label>Bandera do Cartão</label>
                      <Dropdown
                        placeholder="Selecione uma opção"
                        className='dropDownCard'
                        fluid
                        selection
                        onChange={updatePayment}
                        options={options}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>Nome do Titular</label>
                      <input id='NameCard' type="text" name="name" maxlength="16" placeholder="Nome Completo"
                        value={payment.name}
                        onChange={updatePayment}
                        onFocus={() => handleInputFocus('1')}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>Número do cartão</label>
                      <input id='NumberCard' type="text" name="number" maxlength="16" placeholder="0000 0000 0000 0000"
                        value={payment.number}
                        onChange={updatePayment}
                        onFocus={() => handleInputFocus('2')}
                        onBlur={handleInputBlur}
                      />
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="four wide field">
                    <label>CVV</label>
                    <input id='CvvCard' type="text" name="cvv" maxlength="3" placeholder="CVC"
                      value={payment.cvv}
                      onChange={updatePayment}
                      onFocus={() => handleInputFocus('3')}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div className="ten wide field">
                    <label>CPF do titular</label>
                    <input id='NumberCard' type="text" name="card[number]" maxlength="14" placeholder="000.000.000-00"
                      onChange={updatePayment}
                      onFocus={() => handleInputFocus(null)}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div className="six wide field">
                    <label>Validade</label>
                    <div className="fields">
                      <div className="ten wide field">
                        <select id='DateCard' className="ui fluid search dropdown" name="card[expire-month]"
                          onChange={updatePayment}
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
                      <div className="field">
                        <select id='DateCard' className="ui fluid search dropdown" name="card[expire-month]"
                          onChange={updatePayment}
                          onFocus={() => handleInputFocus('4')}
                          onBlur={handleInputBlur}
                        >
                          <option value="">Ano</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                          <option value="32">32</option>
                          <option value="33">33</option>
                          <option value="34">34</option>
                        </select>
                      </div>
                    </div>
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
              <h5 className='info_total_buy_subtitle'>Taxa R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart'>
              <button onClick={handlePayment} className="fluid ui button final">Avançar Etapa</button>
              <button className="fluid ui button blue basic cont"><Link className='font_decoration_none_blue' to={"/"}>Continuar Comprando</Link></button>
            </div>
          </div>
          <div className='box_cart_info_recommend'>
            <SmallProductHorizontal />
            <SmallProductHorizontal />
            <SmallProductHorizontal />
          </div>
        </div>
      </div>
      <div className='box_cart_payment_title_similar'>
        <i class="magic icon" color='var(--white)'></i>
        <h1>Produtos Semelhantes</h1>
      </div>
      <ProductCarouselSmallSimilar />
      <Footer />
    </>
  )

  const renderTabletView = () => (
    <>{!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className='container_progress_cart_payment'>
        <div className="ui small steps">
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
      <div className='container_cart_payment_tablet'>
        <div className='box_cart_product_detail_payment_tablet'>
          <div className='box_cart_product_payment_tablet'>
            <div className='cart_payment_title'>
              <h5 className='cart_payment_title_text'>Forma de Pagamento</h5>
            </div>
            <div className='cart_payment_form'>
              <form className="ui large form">
                <div className="fields">
                  {focusedInput === '1' && (
                    <img src={CardName} className='cart_payment_card_Instrution_tablet' />
                  )}
                  {focusedInput === '2' && (
                    <img src={CardNumber} className='cart_payment_card_Instrution_tablet' />
                  )}
                  {focusedInput === '3' && (
                    <img data-aos="flip-left" src={CardCVV} className='cart_payment_card_Instrution_tablet' />
                  )}
                  {focusedInput === '4' && (
                    <img src={CardDate} className='cart_payment_card_Instrution_tablet' />
                  )}
                  {focusedInput === '5' && (
                    <img src={CardDate} className='cart_payment_card_Instrution_tablet' />
                  )}
                  {focusedInput === null && (
                    <img src={CardAll} className='cart_payment_card_Instrution_tablet' />
                  )}
                  <div className='field payment_tablet'>
                    <div className="sixteen wide field">
                      <label>Bandera do Cartão</label>
                      <Dropdown
                        placeholder="Selecione uma opção"
                        className='dropDownCard'
                        fluid
                        selection
                        options={options}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>Nome do Titular</label>
                      <input id='NameCard' type="text" name="card[number]" maxlength="16" placeholder="Nome Completo"
                        onFocus={() => handleInputFocus('1')}
                        onBlur={handleInputBlur}
                      />
                    </div>
                  </div>
                </div>
                <div className="sixteen wide field">
                  <label>Número do cartão</label>
                  <input id='NumberCard' type="text" name="card[number]" maxlength="16" placeholder="0000 0000 0000 0000"
                    onFocus={() => handleInputFocus('2')}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className="fields">
                  <div className="four wide field">
                    <label>CVV</label>
                    <input id='CvvCard' type="text" name="card[cvc]" maxlength="3" placeholder="CVC"
                      onFocus={() => handleInputFocus('3')}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div className="ten wide field">
                    <label>CPF do titular</label>
                    <input id='NumberCard' type="text" name="card[number]" maxlength="14" placeholder="000.000.000-00"
                      onFocus={() => handleInputFocus(null)}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div className="six wide field">
                    <label>Validade</label>
                    <div className="fields">
                      <div className="ten wide field">
                        <select id='DateCard' className="ui fluid search dropdown" name="card[expire-month]"
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
                      <div className="field">
                        <select id='DateCard' className="ui fluid search dropdown" name="card[expire-month]"
                          onFocus={() => handleInputFocus('4')}
                          onBlur={handleInputBlur}
                        >
                          <option value="">Ano</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                          <option value="32">32</option>
                          <option value="33">33</option>
                          <option value="34">34</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart_tablet'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Taxa R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart_tablet'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/transport'>Avançar Etapa</Link></button>
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
            <FaCreditCard className="edit_icon_mobile" />
          </div>
          <div >
            <FaTruck className="edit_icon_mobile" color='grey' />
          </div>
          <div >
            <FaInfo className="edit_icon_mobile" color='grey' />
          </div>
        </div>
      </div>
      <div className='container_cart_payment_mobile'>
        <div className='box_cart_product_detail_payment_mobile'>
          <div className='box_cart_product_payment_mobile'>
            <div className='cart_payment_title'>
              <h5 className='cart_payment_title_text'>Forma de Pagamento</h5>
            </div>
            <div className='cart_payment_form_mobile'>
              <form className="ui large form">
                <div className="fields">
                  <div className='field payment'>
                    <div className="sixteen wide field">
                      <label>Bandera do Cartão</label>
                      <Dropdown
                        placeholder="Selecione uma opção"
                        className='dropDownCard'
                        fluid
                        selection
                        options={options}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>Nome do Titular</label>
                      <input id='NameCard' type="text" name="card[number]" maxlength="16" placeholder="Nome Completo"
                        onFocus={() => handleInputFocus('1')}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>Número do cartão</label>
                      <input id='NumberCard' type="text" name="card[number]" maxlength="16" placeholder="0000 0000 0000 0000"
                        onFocus={() => handleInputFocus('2')}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>CVV</label>
                      <input id='CvvCard' type="text" name="card[cvc]" maxlength="3" placeholder="CVC"
                        onFocus={() => handleInputFocus('3')}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>CPF do titular</label>
                      <input id='NumberCard' type="text" name="card[number]" maxlength="14" placeholder="000.000.000-00"
                        onFocus={() => handleInputFocus(null)}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <div className="sixteen wide field">
                      <label>Validade - Mês</label>
                      <select id='DateCard' className="ui fluid search dropdown" name="card[expire-month]"
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
                    <div className="sixteen wide field">
                      <label>Validade - Ano</label>
                      <select id='DateCard' className="ui search dropdown" name="card[expire-month]"
                        onFocus={() => handleInputFocus('4')}
                        onBlur={handleInputBlur}
                      >
                        <option value="">Ano</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <div className='box_cart_payment_card_Instrution_mobile'>
                {focusedInput === '1' && (
                  <img src={CardName} className='cart_payment_card_Instrution_mobile' />
                )}
                {focusedInput === '2' && (
                  <img src={CardNumber} className='cart_payment_card_Instrution_mobile' />
                )}
                {focusedInput === '3' && (
                  <img data-aos="flip-left" src={CardCVV} className='cart_payment_card_Instrution_mobile' />
                )}
                {focusedInput === '4' && (
                  <img src={CardDate} className='cart_payment_card_Instrution_mobile' />
                )}
                {focusedInput === '5' && (
                  <img src={CardDate} className='cart_payment_card_Instrution_mobile' />
                )}
                {focusedInput === null && (
                  <img src={CardAll} className='cart_payment_card_Instrution_mobile' />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='box_info_total_cart_mobile'>
          <div className='info_total_buy'>
            <div>
              <h5 className='info_total_buy_title'>Resumo do Pedido</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Subtotal R${productsCart.totalPrice}</h5>
            </div>
            <div>
              <h5 className='info_total_buy_subtitle'>Taxa R$0.00</h5>
            </div>
            <div>
              <h5 className='total_text_buy_product'>Total R${productsCart.totalPrice}</h5>
            </div>
            <div className='button_total_Cart_mobile'>
              <button className="fluid ui button final"><Link className='font_decoration_none_white' to='/cart/transport'>Avançar Etapa</Link></button>
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

export default CartPayment;
