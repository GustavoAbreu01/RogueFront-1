import React, { useState } from "react";
import './style.css';

function MenuModal() {
  const [openModal, setopenModal] = useState(false);

  const open = () => {
    setopenModal(true);
  };

  const openAndClose = () => {
    setopenModal(false);
  };

  return (
    <>
      <button onClick={open}>abrate</button>
        {openModal && (
          <div className="openModal">
            <div className="modal">{<div class="ui vertical pointing menu">
              <a class="item active">
                Motor
              </a>
              <a class="item">
                Tintas
              </a>
              <a class="item">
                Tomada
              </a>
              <a class="item">
                Silvane
              </a>
            </div>}</div>
            <div className="background" onClick={openAndClose}></div>
          </div>
        )}
    </>
  );
}

export default MenuModal;