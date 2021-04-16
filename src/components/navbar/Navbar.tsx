import React, { useEffect, useState } from 'react'
import './navbar.sass'
import { GiHamburgerMenu } from 'react-icons/gi'
import Modal from './modal/Modal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom'

interface isOpen {
  isModalOpen: boolean
  highlighted: number
}

function Navbar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)

  useEffect(() => {
    if (location.pathname === "/") {
      setHighlighted(0)
    } else if (location.pathname === "/gallery") {
      setHighlighted(1)
    } else if (location.pathname === "/articles") {
      setHighlighted(2)
    }
  }, [location])

  const hL0 = () =>
    setHighlighted(0)
  const hL1 = () =>
    setHighlighted(1)
  const hL2 = () =>
    setHighlighted(2)
  const closeModal = () =>
    setTimeout(() => setIsModalOpen(false), 300)
  return (
    <div className=' nav-container nav-bg' >
      <nav className='mobile-nav-container' >
        <p className='help-me'>Help Me.</p>
        <GiHamburgerMenu size={25} className='sandwich-icon'
          onClick={() => setIsModalOpen(!isModalOpen)} />
        {isModalOpen ? <Modal
          isModalOpen={isModalOpen}
          hL0={hL0} hL1={hL1} hL2={hL2}
          highlighted={highlighted}
          closeModal={closeModal} /> : null}
      </nav>


      < nav className='desktop-nav-container' >
        <div style={{ animationDelay: '.1s' }} onClick={hL0}>
          <Link style={{ color: highlighted === 0 ? '#b56803' : '#393939', borderBottom: highlighted === 0 ? '.15rem solid #b56803' : 'none' }} className='link-d' to="/">Home</Link>
        </div>
        <div style={{ animationDelay: '.3s' }} onClick={hL1}>
          <Link style={{ color: highlighted === 1 ? '#b56803' : '#393939', borderBottom: highlighted === 1 ? '.15rem solid #b56803' : 'none' }} className='link-d' to="/gallery">Gallery</Link>
        </div>
        <div style={{ animationDelay: '.5s' }} onClick={hL2}>
          <Link style={{ color: highlighted === 2 ? '#b56803' : '#393939', borderBottom: highlighted === 2 ? '.15rem solid #b56803' : 'none' }} className='link-d' to="/articles">Articles</Link>
        </div>
      </nav>

    </div >
  )
}

export default Navbar
