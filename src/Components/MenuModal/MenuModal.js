import React, { useState } from "react";
import { BiMenu } from 'react-icons/bi';
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
      <BiMenu className="MenuIcon" onClick={open}></BiMenu>
        {openModal && (
          <div className="openModal">
            <div className="modalMenu">{<div class="ui vertical pointing menu">
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