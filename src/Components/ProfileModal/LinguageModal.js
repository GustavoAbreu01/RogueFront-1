import React, { useState } from 'react';
import './style.css';
import portugues from '../../assets/img/portugues.png';
import ingles from '../../assets/img/Ingles.png';
import frances from '../../assets/img/Frances.png';
import alemao from '../../assets/img/Alemao.png';

// Array de países
const countries = [
  { id: 1, name: 'Brasil' },
  { id: 2, name: 'Estados Unidos' },
  { id: 3, name: 'Canadá' },
  // Adicione mais países aqui...
];

// Componente principal
function LinguageModal() {
    const [openModal, setopenModal] = useState(false);

    const open = () => {
      setopenModal(true);
    };
  
    const openAndClose = () => {
      setopenModal(false);
    };

    const linguagemSelecionada = (linguagem) => {
        console.log(linguagem);
    }
  
    return (
      <>
        <button className="btnLinguage" onClick={open}>Linguagens</button>
          {openModal && (
            <div className="openModal">
              <div className="modalMenuLinguage">{
                <div className='paises'>
                <a class="item active">
                    <img src={portugues}/>
                  Português
                </a>
                <a class="item">
                <img src={ingles}/>
                Inglês
                </a>
                <a class="item">
                <img src={frances}/>
                Francês
                </a>
                <a class="item">
                <img src={alemao}/>
                Alemão
                </a>
              </div>}</div>
              <div className="background" onClick={openAndClose}></div>
            </div>
          )}
      </>
    );
}

export default LinguageModal;