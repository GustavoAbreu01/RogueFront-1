//Importando o React e o CSS
import React, { useEffect, useState } from 'react'
import './RatedProducts.css'

//importando as frameworks
import { Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";

//importando as imagens
import motors from "../../assets/img/motores.png"

function Orders() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
      <div className="container_rated_product">
        <Link to='/product'>
          <div className='box_rated_product'>
            <div id="imgItens order">
              <img src={motors} width="125" height="" />
            </div>
            <div className="rated_product_product_info">
              <h2 className="rated_product_name">Motor W22</h2>
              <p className="rated_product_description">
                Motor monofásico de carcaça de chapa, para uso geral desenvolvido para atender as mais variadas aplicações com o máximo desempenho e economia.
              </p>
            </div>
            <div className="rated_product_buttons">
              <button className="ui icon button rated_product">
                <Rating className="ui rating rated_product" maxRating={5} style={{ marginTop: '1rem' }} />
              </button>
            </div>
          </div>
        </Link>
      </div >
    </>
  )

  const renderMobileView = () => (
  <>
    <div className="container_rated_product_mobile">
      <Link to='/product'>
        <div className='box_rated_product_mobile'>
          <div className='box_two_rated_product_mobile'>
          <div id="imgItens order">
            <img src={motors} width="100" height="" />
          </div>
          <div className="rated_product_product_info_mobile">
            <h2 className="rated_product_name_mobile">Motor W22</h2>
            {/* <p className="rated_product_description_mobile">
              Motor monofásico de carcaça de chapa, para uso geral...
            </p> */}
            <div className="rated_product_buttons_mobile">
              <button className="ui icon button rated_product_mobile">
                <Rating className="ui rating rated_product_mobile" maxRating={5} style={{ marginTop: '1rem' }} />
              </button>
            </div>
          </div>
          </div>
        </div>
      </Link>
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