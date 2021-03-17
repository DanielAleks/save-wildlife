import React from 'react'
import { animalsApi } from '../../../../../ApiInfo'
import './gallery-info.sass'

function MobileGalleryInfo() {
  return (
    <div className='gallery-info-bg'>
      <div className='gallery-items'>

        <div>
          <div>
            <p>Species:</p>
            <p>{animalsApi[0].Name}</p>
          </div>
          <div>
            <p>Status:</p>
            <p>{animalsApi[0].Status}</p>
          </div>
        </div>

        <div>
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

export default MobileGalleryInfo
