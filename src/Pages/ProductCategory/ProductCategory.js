import React from 'react'
import './ProductCategory.css'

//Importando as imagens
import iconMotor from "../../assets/img/iconeMotor.png"

//Importando os componentes
import NewCard from '../../Components/NewCard/NewCard';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'



function ProductCategory() {

  const verify = () => {
    const Registered = localStorage.getItem('verifyLogin');
    if (Registered === "yes") {
      return true
    } else {
      return false
    }
  }

  const handleDropdownChange = (event, { value }) => {
    console.log('Selected value:', value);
  };




  const menuOptions = [
    { key: 'monofasico', value: 'monofasico', text: 'Monofásico' },
    { key: 'trifasicoBT', value: 'trifasicoBT', text: 'Trifásico - Baixa Tensão' },
    { key: 'trifasicoAT', value: 'trifasicoAT', text: 'Trifásico - Alta Tensão' },
    { key: 'sincronos', value: 'sincronos', text: 'Síncronos' },
    { key: 'aneis', value: 'aneis', text: 'Anéis' },
  ];

  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div className="ui grid category">
        <div className="two column row category">
          <div className="ui row category">
            <div className="column filter">
              <div className="category_second_filter">
                <img className="icon_category_motor" src={iconMotor} />
                <h1 className="ui header motor">MOTORES</h1>
                <br />
                <div className="ui checkbox">
                  <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                  <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                </div>
                <br />
                <br />
                <div className="ui checkbox">
                  <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                  <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                </div>
                <br />
                <br />
                <div className="ui checkbox">
                  <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                  <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                </div>
                <br />
                <br />
                <div className="ui checkbox">
                  <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                  <label className="desc" htmlFor="Sincronos">Síncronos</label>
                </div>
                <br />
                <br />
                <div className="ui checkbox">
                  <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                  <label className="desc" htmlFor="Aneis">Anéis</label>
                </div>
                <br />
                <br />

              </div>
            </div>
          </div>




          <div className="ui row category">
            <div className="column itens">
              <div id="produtos">
                {numero.map((i) => (
                  <NewCard />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
};








export default ProductCategory