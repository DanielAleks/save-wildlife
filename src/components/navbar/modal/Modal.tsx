import React from 'react'
import './modal.sass'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListAnimals from '../../list-animals/ListAnimals';
import Articles from '../../articles';
import Gallery from '../../list-animals/mobile-animal-info';
import Home from '../../home';
import { link } from 'node:fs';

interface myProps {
  highlighted: number
  closeModal: any
  hL0: any
  hL1: any
  hL2: any
}

class Modal extends React.Component<myProps, any> {
  constructor(props) {
    super(props)
  }

  render() {
    const navlink = [
      {
        to: '/',
        func: this.props.hL0,
        number: 0,
        name: "Home",
      },
      {
        to: 'gallery',
        func: this.props.hL1,
        number: 1,
        name: "Gallery",
      },
      {
        to: 'articles',
        func: this.props.hL2,
        number: 2,
        name: "Articles",
      },
    ]

    return (
      <nav className='modal-container'>
        {navlink.map((item) =>
          <Link className='link-p' to={item.to}
            onClick={() => {
              item.func()
              this.props.closeModal()
            }}
            style={{
              background: this.props.highlighted === item.number ?
                'linear-gradient(246.24deg, rgb(214, 150, 72, .6) 0%, rgb(240, 175, 95, .6) 50%, rgb(214, 150, 72, .6) 100%)'
                : null
            }}>{item.name}</Link>
        )}
      </nav>
    )
  }
}

export default Modal
