import React from 'react';
import './style.css';
// import twitter from '../../Assets/img/twitter.png';
// import youtube from '../../Assets/img/youtube.png';
// import issuu from '../../Assets/img/issuu.png';
// import linkedin from '../../Assets/img/linkedin.png';
// import img from '../../Assets/img/img.png';
const Footer = () => {
  return (
    <footer>
      <div className="informations">
        <div className="local">
          <h4 style={{ alignItems: 'center' }}>WEG S.A. - HEADQUARTERS</h4>
          <div className="localDivisor"></div>
          <p>
            Av. Pref. Waltermar Grubba,
            3000 - 89256-900 -
            Jaraguá do Sul - SC / Brasil
          </p>
          <a href="#">Telefone: 55 47 3276-4000</a>
          <a href="https://mail.google.com/mail/u/0/#search/info-br%40weg.net?compose=CllgCJlKnNzSNTsBmkTvPwDKhClXHSMtXRxWkLKjVhmJQcVKPXTbCLrGnmZkSnPlTrHgGpPrJdV">
            E-mail: info-br@weg.net
          </a>
        </div>

        <div className="contacts">
          <h4>Contatos</h4>
          <div className="contactsDivisor"></div>
          <a href="">Fale conosco</a>
          <a href="">Onde comprar</a>
          <a href="">Assistencia tecnica</a>
          <a href="">FAQ</a>
          <a href="">Violação do código de ética</a>
        </div>

        <div className="social">
          <h4>Redes Sociais</h4>
          <div className="socialDivisor"></div>
          <a href="">
            <i class="twitter icon"></i>
          </a>
          <a href="">
            <i class="youtube icon"></i> Youtube
          </a>
          {/* <a href="">
            <img src={issuu} alt="" /> Issuu
          </a> */}
          <a href="">
            <i class="linkedin in icon"></i>
          </a>
        </div>
      </div>
      {/* <div className="image">
        <img src={img} alt="" />
      </div> */}
    </footer>
  );
};

export default Footer;