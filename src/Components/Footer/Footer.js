//Importando o React e o CSS
import React from 'react';
import './Footer.css';

//Importando as imagens
import img from '../../assets/img/footer.png';


const Footer = () => {
  return (
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
          {/* <a href="">
            <img src={issuu} alt="" /> Issuu
          </a> */}
          <a href="https://www.linkedin.com/company/weg">
            <i className="linkedin in icon"></i> Linkedin
          </a>
        </div>
      </div>
      <div className="footer_image_weg">
        <img src={img} alt="" />
      </div>
    </footer>
  );
};

export default Footer