import React, { useState } from "react";
import { BiMenu } from 'react-icons/bi';
import './MenuModal.css';

function MenuModal() {

  const [openModal, setOpenModal] = useState(0)

  function verify() {
    if (openModal !== 0) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <div>
        <BiMenu className="MenuIcon" onClick={() => setOpenModal(openModal + 1)}></BiMenu>
      </div>
      {verify() &&
        <div className="modal-menu-content-detail" >
          <div className="modal-menu-content" data-aos="fade-right">
            <ul>
              <li>primeiro item</li>
              <li>segundo item</li>
              <li>terceiro item</li>
              <li>primeiro item</li>
              <li>segundo item</li>
              <li>terceiro item</li>
            </ul>
          </div>
        </div>
      }

      {verify() &&
        <div className="background" onClick={() => setOpenModal(openModal - 1)}></div>
      }
    </>
  );
}

export default MenuModal;