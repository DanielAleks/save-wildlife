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
import Gallery from '../../gallery';
import Home from '../../home';

function Modal() {
  return (
    <Router>
      <nav className='modal-container'>
        <div style={{ background: 'linear-gradient(246.24deg, rgb(214, 150, 72, .6) 0%, rgb(240, 175, 95, .6) 50%, rgb(214, 150, 72, .6) 100%)' }}>
          <Link className='link-p' to="/">Home</Link>
        </div>
        <div>
          <Link className='link-p' to="/animals">Animals</Link>
        </div>
        <div>
          <Link className='link-p' to="/articles">Articles</Link>
        </div>
        <div>
          <Link className='link-p' to="/gallery">ListAnimals</Link>
        </div>
      </nav>
    </Router>
  )
}

export default Modal
