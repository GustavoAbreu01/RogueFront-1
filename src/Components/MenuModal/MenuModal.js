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
    <div>MenuModal</div>
  )
}

export default MenuModal;