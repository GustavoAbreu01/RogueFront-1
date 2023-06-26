import React from 'react'
import { useState, useEffect } from "react";
import '.././ProductCategory/style.css'

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
      <div class="ui vertically divided grid">
        <div class="two column row">
          <div class="four wide column">
            <div id="iconeMotor">
              <img src={iconeMotor} width="125" height="" />
            </div>
          
          <h1>
            <b>MOTORES</b>
          </h1>
          <input className="check" type="checkbox" id="monofasico" name="monofasico" value="Monofasico" />
          <label className="desc" htmlFor="Monofasico">
            Monofásico
          </label>
          <br />
          <br />
          <input className="check" type="checkbox" id="trifasicoBT" name="trifasicoBT" value="trifasicoBT" />
          <label className="desc" htmlFor="TrifasicoBT">
            Trifásico - Baixa Tensão
          </label>
          <br />
          <br />
          <input className="check" type="checkbox" id="trifasicoAT" name="trifasicoAT" value="trifasicoAT" />
          <label className="desc" htmlFor="TrifasicoAT">
            Trifásico - Alta Tensão
          </label>
          <br />
          <br />
          <input className="check" type="checkbox" id="sincronos" name="sincronos" value="sincronos" />
          <label className="desc" htmlFor="Sincronos">
            Síncronos
          </label>
          <br />
          <br />
          <input className="check" type="checkbox" id="aneis" name="aneis" value="aneis" />
          <label className="desc" htmlFor="Aneis">
            Anéis
          </label>
          <br />
          <br />
        </div>
        
        <div class="row">
          <div class="fourteen wide column">
            oi
          </div>
        </div>
        </div>
      </div>
    </>
  );
};


export default ProductCategory