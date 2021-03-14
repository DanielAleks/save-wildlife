import React from 'react'
import { animalsApi } from '../../../ApiInfo'
import './animal-info.sass'

function AnimalInfo() {
  return (
    <div className='info-outer-container'>
      <p className='info-header'>Information:</p>

      <div className='short-info-container'>
        <div>
          <div>
            <h4>Name:</h4>
            <p>{animalsApi[0].Name}</p>
          </div>
          <div>
            <h4>Location:</h4>
            <p>{animalsApi[0].Location}</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Estimated Population:</h4>
            <p>{animalsApi[0].Population}</p>
          </div>
          <div>
            <h4>Status:</h4>
            <p>{animalsApi[0].Status}</p>
          </div>
        </div>
      </div>

      <div className='description-container'>
        <h4 className='description'>Description:</h4>
        <p>{animalsApi[0].Description}</p>
      </div>
    </div>
  )
}

export default AnimalInfo
