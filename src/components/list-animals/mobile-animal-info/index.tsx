import React from 'react'
import { animalsApi } from '../../../ApiInfo'
import Navbar from '../../navbar/Navbar'
import './gallery.sass'

class Gallery extends React.Component<{}, any> {
  constructor(props) {
    super(props)

  }

  render() {

    return (
        <div className='gallery-bg'>
          <div className='gray-box-bg' />
          <div className='orange-box-bg' />




          <div className='gallery-items'>
            <p>Species:</p>
            <p>{animalsApi[0].Name}</p>

            <div className='gallery-status'>
              <p>Status:</p>
              <p>{animalsApi[0].Status}</p>
            </div>

            <div style={{}}>
              <div>
                <p>Location:</p>
                <p>{animalsApi[0].Location}</p>
              </div>
              <div>
                <p>Population:</p>
                <p>{animalsApi[0].Population}</p>
              </div>
            </div>
            <p>Description:</p>
            <p>{animalsApi[0].Description}</p>
          </div>
        </div>
    )
  }
}

export default Gallery
