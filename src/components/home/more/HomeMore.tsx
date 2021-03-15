import React from 'react'
import './more.sass'
import { Link } from "react-scroll";

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
            <p>Help Me.</p>
          </div>

          <div className='more-content'>
            <header>
              <h1>Save</h1>
              <h1>Wildlife</h1>
            </header>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt molliti. </p>
            <Link to="animals" spy={true} smooth={true} offset={0} duration={1500}>
              <button className='more-button'>See More...</button>
            </Link>
          </div>
        </div>
      </div> 
    )
  }
}

export default HomeMore 