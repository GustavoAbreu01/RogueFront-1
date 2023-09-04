//Importando o React e o CSS
import React, { useEffect, useState } from 'react';
import './Footer.css';

//Importando as imagens
import img from '../../assets/img/footer.png';
import logo from '../../assets/img/logo-weg.png';

const Footer = () => {

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
    <footer className='container_footer'>
      <div className="box_footer_informations">
        <div className="footer_location_informations">
          <h4 style={{ alignItems: 'center' }}>WEG S.A.</h4>
          <div className="location_footer_divisor"></div>
          <p>
            Av. Pref. Waltermar Grubba,
          </p>
          <p>
            Jaraguá do Sul - SC / Brasil
          </p>
          <a href="#">Telefone: 55 47 3276-4000</a>
          <a href="https://mail.google.com/mail/u/0/#search/info-br%40weg.net?compose=CllgCJlKnNzSNTsBmkTvPwDKhClXHSMtXRxWkLKjVhmJQcVKPXTbCLrGnmZkSnPlTrHgGpPrJdV">
            E-mail: info-br@weg.net
          </a>
        </div>

        <div className="footer_contacts">
          <h4>Contatos</h4>
          <div className="contacts_footer_divisor"></div>
          <a href="">Fale conosco</a>
          <a href="">Onde comprar</a>
          <a href="">Assistencia tecnica</a>
          <a href="">FAQ</a>
          <a href="">Violação do código de ética</a>
        </div>

        <div className="footer_social">
          <h4>Redes Sociais</h4>
          <div className="social_footer_divisor"></div>
          <a href="https://www.instagram.com/weg.group/">
            <i className="instagram icon"></i> Instagram
          </a>
          <a href="https://www.youtube.com/wegvideos">
            <i className="youtube icon"></i> Youtube
          </a>
          <a href="https://www.linkedin.com/company/weg">
            <i className="linkedin in icon"></i> Linkedin
          </a>
        </div>
      </div>
      <div className="footer_image_weg">
        <img src={img} alt="" />
      </div>
    </footer>
  )

  const renderMobileView = () => (
    <><div className='container_footer_mobile'>
      <footer className="text-center ">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">WEG S.A.</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Av. Pref. Waltermar Grubba,</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Jaraguá do Sul - SC / Brasil</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Telefone: 55 47 3276-4000</a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/mail/u/0/#search/info-br%40weg.net?compose=CllgCJlKnNzSNTsBmkTvPwDKhClXHSMtXRxWkLKjVhmJQcVKPXTbCLrGnmZkSnPlTrHgGpPrJdV" className="text-white">E-mail: info-br@weg.net</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contatos</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">Fale conosco</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Onde comprar</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Assistencia tecnica</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Redes Sociais</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-white" href="https://www.instagram.com/weg.group/">
                      <i className="instagram icon"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href="https://www.youtube.com/wegvideos">
                      <i className="youtube icon"></i> Youtube
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href="https://www.linkedin.com/company/weg">
                      <i className="linkedin in icon"></i> Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
        <img src={logo} width={100} />
        <div className="text-center p-3" >
          © 2023 Copyright:
          <a className="text-white" href="https://weg.com/"> Weg.com</a>
        </div>

      </footer>
    </div>
    </>

  )

  const renderTabletView = () => (
    <footer className='container_footer'>
      <div className="box_footer_informations">
        <div className="footer_location_informations">
          <h4 style={{ alignItems: 'center' }}>WEG S.A.</h4>
          <div className="location_footer_divisor"></div>
          <p>
            Av. Pref. Waltermar Grubba,
          </p>
          <p>
            Jaraguá do Sul - SC / Brasil
          </p>
          <a href="#">Telefone: 55 47 3276-4000</a>
          <a href="https://mail.google.com/mail/u/0/#search/info-br%40weg.net?compose=CllgCJlKnNzSNTsBmkTvPwDKhClXHSMtXRxWkLKjVhmJQcVKPXTbCLrGnmZkSnPlTrHgGpPrJdV">
            E-mail: info-br@weg.net
          </a>
        </div>

        <div className="footer_contacts">
          <h4>Contatos</h4>
          <div className="contacts_footer_divisor"></div>
          <a href="">Fale conosco</a>
          <a href="">Onde comprar</a>
          <a href="">Assistencia tecnica</a>
          <a href="">FAQ</a>
          <a href="">Violação do código de ética</a>
        </div>

        <div className="footer_social">
          <h4>Redes Sociais</h4>
          <div className="social_footer_divisor"></div>
          <a href="https://www.instagram.com/weg.group/">
            <i className="instagram icon"></i> Instagram
          </a>
          <a href="https://www.youtube.com/wegvideos">
            <i className="youtube icon"></i> Youtube
          </a>
          <a href="https://www.linkedin.com/company/weg">
            <i className="linkedin in icon"></i> Linkedin
          </a>
        </div>
      </div>
      <div className="footer_image_weg">
        <img src={img} alt="" />
      </div>
    </footer>
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

export default Footer