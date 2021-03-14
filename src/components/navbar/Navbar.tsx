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

interface isOpen {
  isModalOpen: boolean
}

class Navbar extends React.Component<any, isOpen> {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

  };

  render() {
    return (
      <div className='nav-container nav-bg'>
        {/* <p className='help-me'>Help Me.</p>
        <GiHamburgerMenu size={25} className='sandwich-icon' onClick={() => this.setState((state) => ({
          isModalOpen: !state.isModalOpen
        }))} />

        {this.state.isModalOpen && <Modal />} */}

        <nav className='nav-container'>
          <div>
            <Link style={{ color: '#b56803', borderBottom: '.15rem solid #b56803' }} className='link-d' to="/">Home</Link>
          </div>
          <div>
            <Link className='link-d' to="/gallery">Animals</Link>
          </div>
          <div>
            <Link className='link-d' to="/articles">Articles</Link>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
