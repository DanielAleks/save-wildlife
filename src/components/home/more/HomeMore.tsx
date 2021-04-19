import React from 'react'
import './more.sass'
import { Link } from "react-scroll";
import 'aos/dist/aos.css';

interface myState {

}

class HomeMore extends React.Component<{}, myState> {
  render() {

    return (
      <div className='more-container'>

        <div className='more-overlay'>
          <div className='more-bg' />

          <div className='desktop-left-container' >
            <div className='desktop-left-bg' />
            <p className='help-me-logo'>Help Me.</p>
          </div>

          <div className='more-content'>
            <header>
              <h1>Save</h1>
              <h1>Wildlife</h1>
            </header>
            <div className='more-info'>
              <p>By conserving wildlife, we're ensuring that future generations can enjoy our natural world and the incredible species that live within it. Not only that, but conserving wildlife can further enrich our food in both nutrition and flavor.</p>
              <Link to="animals" spy={true} smooth={true} offset={0} duration={1500}>
                <button className='more-button'>See More...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMore