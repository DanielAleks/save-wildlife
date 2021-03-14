import React from 'react'
import { animalsApi } from '../../ApiInfo'
import Navbar from '../navbar/Navbar'
import GalleryImage from './gallery-image/GalleryImage'
import './gallery.sass'

function Gallery() {
  return (
    <div>
      <GalleryImage />

      <div className='gallery-bg'>
        <div className='gray-box-bg' />
        <div className='orange-box-bg' />
        <button className='gallery-go-back'>
          <p>Go</p>
          <p>Back</p>
        </button>

        <div className='gallery-status'>
          <p>Status:</p>
          <p>{animalsApi[0].Status}</p>
        </div>

        <div className='gallery-items'>
          <p>Species:</p>
          <p>{animalsApi[0].Name}</p>

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
    </div>
  )
}

export default Gallery
