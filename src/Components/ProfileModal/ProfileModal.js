import React, { useEffect, useState } from 'react'
import './ProfileModal.css'
import { CgProfile } from 'react-icons/cg'
import logoWeg from "../../assets/img/logoWEG.png"
import LanguageModal from '../LanguageModal/LanguageModal'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowBarRight } from 'react-icons/bs'

export default function ProfileModal({ user }) {
  const [openModal, setOpenModal] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.classList.contains('background')) {
        setOpenModal(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleModal() {
    setOpenModal(!openModal);
  }

  const verifyScreen = () => {
    if (screenSize.width > 900) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div>
        <CgProfile className='profileIcon' onClick={toggleModal}></CgProfile>
      </div>
      {openModal && (
        <div className="modal-profile-content-detail">
          <BsArrowBarRight className="backIcon" onClick={toggleModal}></BsArrowBarRight>
          <div className="modal-profile-content" data-aos="fade-left">
          </div>
        </div>
      )}

      {openModal && <div className="background" onClick={toggleModal}></div>}
    </>
  );
}
