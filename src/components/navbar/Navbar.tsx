import React from 'react'
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

interface isOpen {
  isModalOpen: boolean
  highlighted: number
}

class Navbar extends React.Component<any, isOpen> {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      highlighted: 0
    };
  };

  render() {

    const hL0 = () =>
      this.setState({ highlighted: 0 })
    const hL1 = () =>
      this.setState({ highlighted: 1 })
    const hL2 = () =>
      this.setState({ highlighted: 2 })
    const closeModal = () =>
      this.setState({ isModalOpen: false })

    return (
      <div className=' nav-container nav-bg' >
        <nav className='mobile-nav-container' >
          <p className='help-me'>Help Me.</p>
          <GiHamburgerMenu size={25} className='sandwich-icon' onClick={() => this.setState((state) => ({
            isModalOpen: !state.isModalOpen
          }))} />
          {this.state.isModalOpen ? <Modal
            hL0={hL0} hL1={hL1} hL2={hL2}
            highlighted={this.state.highlighted}
            closeModal={closeModal} /> : null}
        </nav>


        < nav className='desktop-nav-container' >
          <div style={{ animationDelay: '.1s' }} onClick={hL0}>
            <Link style={{ color: this.state.highlighted === 0 ? '#b56803' : '#393939', borderBottom: this.state.highlighted === 0 ? '.15rem solid #b56803' : 'none' }} className='link-d' to="/">Home</Link>
          </div>
          <div style={{ animationDelay: '.3s' }} onClick={hL1}>
            <Link style={{ color: this.state.highlighted === 1 ? '#b56803' : '#393939', borderBottom: this.state.highlighted === 1 ? '.15rem solid #b56803' : 'none' }} className='link-d' to="/gallery">Gallery</Link>
          </div>
          <div style={{ animationDelay: '.5s' }} onClick={hL2}>
            <Link style={{ color: this.state.highlighted === 2 ? '#b56803' : '#393939', borderBottom: this.state.highlighted === 2 ? '.15rem solid #b56803' : 'none' }} className='link-d' to="/articles">Articles</Link>
          </div>
        </nav>

      </div >
    )
  }
}

export default Navbar
