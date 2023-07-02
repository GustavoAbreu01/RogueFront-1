import React from 'react'
import './ProductCategory.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Dropdown } from 'semantic-ui-react';
import iconMotor from "../../assets/img/iconeMotor.png"
import motors from "../../assets/img/motores.png"
import save from "../../assets/img/salvo.png"

function ProductCategory() {
  const [verificacao, setVerificacao] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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

  // const verify = () => {
  //   console.log(localStorage.getItem("verificar"));
  //   if (
  //     localStorage.getItem("verificar") === "sim" ||
  //     localStorage.getItem("verificar2") === "sim"
  //   ) {
  //     setVerificacao(true);
  //   }
  // };
  return (
    <>
      <Header />
      <div class="ui grid">
        <div class="two column row page">
          <div class="row filter">
            <div class="column filter">
              <div className='second-filter '> 
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

        <div class="row itens">

          <div class="column itens">
          <Link to="/product"> </Link>
            <div id="produtos">

              {numero.map((i) => (
                
                <div class="ui segment itens" id="item" key={i}>
                  <Link to="/product">
                  <div class="itemContent" style={{color:'black'}}>
                    <div id="imgItens">
                      <img src={motors} width="125" height="" />
                    </div>
                    <div class="itemInfo">
                    <h2 id="itemNome">W12 Monofásico</h2>
                      <h4 id="descricao">Desenvolvido para oferecer versatilidade e eficiência.</h4>
                      <h2 id="itemPreco">R$ 495<sup> 99</sup></h2>
                    </div>
                  </div>
                  </Link>
                  <button className="save" href="">
                        <img onClick={teste} src={save} className="salvos" width="40" height="40" id="salvos" />
                  </button> 
                </div>
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