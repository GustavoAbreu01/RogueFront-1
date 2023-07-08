import React from 'react'
import './ProductCategory.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import iconMotor from "../../assets/img/iconeMotor.png"

import NewCard from '../../Components/NewCard/NewCard';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin';
import WeggnerModal from '../../Components/WeggnerModal/WeggnerModal';




function ProductCategory() {
  const [verificacao, setVerificacao] = useState(false);

  const [isOpen, setIsOpen] = useState(false);


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
    // Aqui você pode adicionar a lógica para lidar com a seleção do item do dropdown
  };




  const menuOptions = [
    { key: 'monofasico', value: 'monofasico', text: 'Monofásico' },
    { key: 'trifasicoBT', value: 'trifasicoBT', text: 'Trifásico - Baixa Tensão' },
    { key: 'trifasicoAT', value: 'trifasicoAT', text: 'Trifásico - Alta Tensão' },
    { key: 'sincronos', value: 'sincronos', text: 'Síncronos' },
    { key: 'aneis', value: 'aneis', text: 'Anéis' },
  ];








  const teste = () => {
    console.log('aaaaa')
  };




  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




  // useEffect(() => {
  //   verify();
  // }, []);

  return (
    <>
      {!verify() ? <Header /> : <HeaderLogin />}<WeggnerModal />
      <div class="ui grid category">
        <div class="two column row category">
          <div class="ui row category">
            <div class="column filter">
              <div className="second-filter">
                <img className="iconMotor" src={iconMotor} />
                <h1 className="ui header motor">MOTORES</h1>
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
                  <label className="desc" htmlFor="Monofasico"> Monofásico </label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
                  <label className="desc" htmlFor="TrifasicoBT">Trifásico - Baixa Tensão</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
                  <label className="desc" htmlFor="TrifasicoAT">Trifásico - Alta Tensão</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
                  <label className="desc" htmlFor="Sincronos">Síncronos</label>
                </div>
                <br />
                <br />
                <div class="ui checkbox">
                  <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
                  <label className="desc" htmlFor="Aneis">Anéis</label>
                </div>
                <br />
                <br />

              </div>
            </div>
          </div>




          <div class="ui row category">
            <div class="column itens">
              <div id="produtos">
                {numero.map((i) => (
                  <NewCard/>
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