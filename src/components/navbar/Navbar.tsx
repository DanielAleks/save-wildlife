import React from 'react'
import './navbar.sass'
import { GiHamburgerMenu } from 'react-icons/gi'
import Modal from './modal/Modal';


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
        <p className='help-me'>Help Me.</p>
        <GiHamburgerMenu size={25} className='sandwich-icon' onClick={() => this.setState((state) => ({
          isModalOpen: !state.isModalOpen
        }))} />

        {this.state.isModalOpen && <Modal />}

      </div>
    )
  }
}

export default Navbar
