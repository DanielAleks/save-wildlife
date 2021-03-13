import React from 'react'
import './animals.sass'
import Gorilla from '../../../assets/images/gorilla.jpg'

function Animals() {
  return (
    <div className='animals-container'>
      <div className='image-slider'>
        <img className='image1' src={Gorilla} />
        <img className='image2' src={Gorilla} />
      </div>
    </div>
  )
}

export default Animals
