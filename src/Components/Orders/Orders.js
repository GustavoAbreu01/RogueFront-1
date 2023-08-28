//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './Orders.css'

//importando as frameworks
import { FaAngleDown } from 'react-icons/fa'

//Importando as imagens
import motors from "../../assets/img/motores.png"


function Orders() {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user')) || [];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    console.log(user.cart)
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
      <div className="container_product_order">
        <div className={`item_order_content ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <div id="imgItens order">
            <img src={motors} width="125" height="" />
          </div>
          <div className="order_item_info">
            <h2 className="order_product_name">Pedido 25/08/2023</h2>
            <h2 id="itemPreco order" className="order_product_price">
              Total: R$ {user.cart.totalPrice}<sup></sup>
              <sub className="order_product_subtext">parcelado em 8x</sub>
            </h2>
            <p className="order_product_complement">
              Motor monofásico de carcaça de chapa, para uso geral, desenvolvido para atender as mais variadas aplicações...
            </p>
          </div>
          <div className="order_buttons">
            <button className="ui icon button order">
              <i className="angle down icon order"></i>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="order_dropdown" data-aos="fade-down">
            <div className='container_order_dropdown_info'>
              <div className='container_order_transport_info'>
                <form className="ui form confirm order">
                  <div className="field order">
                    <div className="three fields order">
                      <div className="field order">
                        <label>Produtos</label>
                        <p>{user.cart.product}</p>
                        <p>Motor W12</p>
                      </div>
                      <div className="field order">
                        <br />
                        <p>x3</p>
                        <p>x1</p>
                      </div>
                      <div className="field order">
                        <br />
                        <p>R$ 2.333,33</p>
                        <p>R$ 1.333,33</p>
                      </div>
                    </div>
                    <div className="three fields order">

                      <div className="field order">
                        <label>Nome do Responsável</label>
                        <p>{user.name}</p>
                      </div>
                      <div className="field order">
                        <label>Endereço:</label>
                        <p>{user.address[0].rua}, {user.address[0].bairro}, {user.address[0].cidade}</p>
                      </div>
                      <div className="field order">
                        <label>Complemento:</label>
                        <p>{user.address[0].complemento}</p>
                      </div>
                    </div>
                  </div>
                  <div className="three fields order">
                    <div className="field order">
                      <label>Estado:</label>
                      <p>{user.address[0].estado}</p>
                    </div>
                    <div className="field order">
                      <label>País:</label>
                      <p>{user.address[0].pais}</p>
                    </div>
                    <div className="field order">
                      <label>CEP</label>
                      <p>{user.address[0].cep}</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className='container_order_steps'>
                <div className="ui tiny steps order">
                  <div className="step order">
                    <i className="boxes icon"></i>
                    <div className="content">
                      <div className="title">Pedido finalizado</div>
                    </div>
                  </div>
                  <div className="disabled step order">
                    <i className="dolly flatbed icon"></i>
                    <div className="content">
                      <div className="title">Entregue a transportadora</div>
                    </div>
                  </div>
                  <div className="disabled step order">
                    <i className="shipping fast icon"></i>
                    <div className="content">
                      <div className="title">Saiu para entrega</div>
                    </div>
                  </div>
                  <div className="disabled step">
                    <i className="clipboard check icon"></i>
                    <div className="content">
                      <div className="title">Entregue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        )
        }
      </div >
    </>
  )
  const renderMobileView = () => (
    <>
      <div className="container_product_order_mobile">
        <div className={`item_order_content_mobile ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <div className="order_item_info_mobile">
            <h2 className="order_product_name_mobile">Pedido 26/07/2023</h2>
            <h2 id="itemPreco order" className="order_product_price_mobile">
              Total: R$ 495<sup>99</sup>
              <sub className="order_product_subtext_mobile">parcelado em 8x</sub>
            </h2>
          </div>

          <div className='box_order_icon'>
            <FaAngleDown color='var(--blue-primary)' size={30} />
          </div>



        </div>
        {isOpen && (
          <div className="order_dropdown_mobile" data-aos="fade-down">
            <div className='container_order_dropdown_info_mobile'>
              <div className='container_order_transport_info_mobile'>
                <form className="ui form confirm order_mobile">
                  <div className="field order_mobile">
                    <table className='container_order_info_mobile'>
                      <tr>
                        <th className='order_info_mobile'>Produtos</th>
                        <th className='order_info_mobile'>Quantidade</th>
                        <th className='order_info_mobile'>Preço</th>
                      </tr>
                      <tr>
                        <td>
                          <p className='order_info_mobile'>Motor W33</p>
                          <p className='order_info_mobile'>Motor W12</p>
                        </td>
                        <td>
                          <p className='order_info_mobile'>x3</p>
                          <p className='order_info_mobile'>x1</p>
                        </td>
                        <td>
                          <p className='order_info_mobile'>R$ 2.333,33</p>
                          <p className='order_info_mobile'>R$ 1.333,33</p>
                        </td>
                      </tr>
                    </table>
                    <br/>
                    <div className="three fields order_mobile">

                      <div className="field order">
                        <label>Nome do Responsável</label>
                        <p>Gustavo Guilherme de Abreu</p>
                      </div>
                      <div className="field order">
                        <label>Endereço:</label>
                        <p>Rua Adolfo Tribess, Vieiras, N. 400</p>
                      </div>
                      <div className="field order">
                        <label>Complemento:</label>
                        <p>Torre 1, Apto 706</p>
                      </div>
                    </div>
                  </div>
                  <div className="three fields order_mobile">
                    <div className="field order">
                      <label>Estado:</label>
                      <p>Santa Catarina</p>
                    </div>
                    <div className="field order">
                      <label>País:</label>
                      <p>Brasil</p>
                    </div>
                    <div className="field order">
                      <label>CEP</label>
                      <p>89256-690</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className='container_order_steps_mobile'>
                <div className="ui tiny steps order_mobile">
                  <div className="step order_mobile">
                    <div className="content">
                    <i className="boxes icon"></i>
                    </div>
                  </div>
                  <div className="disabled step order_mobile">
                    <div className="content">
                    <i className="dolly flatbed icon"></i>
                    </div>
                  </div>
                  <div className="disabled step order_mobile">
                    <div className="content">
                    <i className="shipping fast icon"></i>
                    </div>
                  </div>
                  <div className="disabled step order_mobile">
                    <div className="content">
                    <i className="clipboard check icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        )
        }
      </div >
    </>
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
};
export default Orders