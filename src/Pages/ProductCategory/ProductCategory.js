import React from 'react'
import { useState, useEffect } from "react";
import Header from '../../Components/Header/Header'
import '.././ProductCategory/style.css'
import iconMotor from "../../assets/img/iconeMotor.png"
import motors from "../../assets/img/motores.png"

function ProductCategory() {
  const [verificacao, setVerificacao] = useState(false);

  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const iconeMotor = "{{iconeMotor}}";
  const motores = "{{motores}}";
  const salvo = "/assets/img/salvo.png";
  const salvoBranco = "/assets/img/salvoBranco.png";

  useEffect(() => {
    verify();
  }, []);

  const verify = () => {
    console.log(localStorage.getItem("verificar"));
    if (
      localStorage.getItem("verificar") === "sim" ||
      localStorage.getItem("verificar2") === "sim"
    ) {
      setVerificacao(true);
    }
  };
  return (
    <>
      <Header />
      <div class="ui vertically divided grid">
        <div class="two column row page">
          <div class="four wide column filter" style={{ padding: '3.5rem' }}>
            <div style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>
              <img className="image" src={iconMotor} />
              <h1 className="ui header">MOTORES</h1>
            </div>
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

          <div class="row">
            <div class="fourteen wide column">
              <div id="produtos">
                <div routerLink="/produto" id="cardProduto">
                  {numero.map((i) => (
                    <div class="ui segment itens" id="item" key={i}>
                      <div id="imgItens">
                        <img src={motors} width="125" height="" />
                      </div>
                      <br />
                      <div className="info">
                        <h2 id="itemNome">W12 Monofásico</h2>
                        <h4 id="descricao">
                          Desenvolvida para oferecer versatilidade e eficiência.
                        </h4>
                        <h2 id="itemPreco">R$ 495<sup> 99</sup></h2>
                      </div>
                      <button className="salvos" href="">
                        <img src={salvo} className="salvos" width="40" height="40" id="salvos" />
                      </button>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ProductCategory