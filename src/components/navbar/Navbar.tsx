import React from 'react'
import './navbar.sass'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  return (
    <div className='nav-container nav-bg'>
      <p className='help-me'>Help Me.</p>
      <GiHamburgerMenu size={25} className='sandwich-icon'/>
    </div>
  )
} 

export default Navbar
