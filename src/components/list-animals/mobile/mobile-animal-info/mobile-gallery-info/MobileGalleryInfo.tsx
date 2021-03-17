import React from 'react'
import { animalsApi } from '../../../../../ApiInfo'
import './gallery-info.sass'

function MobileGalleryInfo() {
  return (
    <div className='gallery-info-bg'>

      <p className='gallery-main-header'>Information</p>

      <div className='gallery-items'>

        <div className='three-main'>
          <div>
            <h4>Habitat:</h4>
            <p>{animalsApi[0].Location}</p>
          </div>
          <div>
            <h4>Population:</h4>
            <p>{animalsApi[0].Population}</p>
          </div>
          <div>
            <h4>Description:</h4>
            <p>{animalsApi[4].Description}</p>
          </div>
        </div>

        <div className='secondary'>
          <div>
            <p className='animal-name'>{animalsApi[0].Name}</p>
          </div>
          <div className='status'>
            <h4>Status:</h4>
            <p>{animalsApi[0].Status}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MobileGalleryInfo
