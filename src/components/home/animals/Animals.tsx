import React from 'react'
import './animals.sass'
import Gorilla from '../../../assets/images/gorilla.jpg'
import lionLogo from '../../../assets/images/lionLogo.png'

function Animals() {
  return (
    <div className='animals-container'>
      <div className='top-left-tri' />
      <div className='bottom-right-tri' />
      <div className='image-slider-mobile'>
        <img className='image1M' src={Gorilla} />
        <img className='image2M' src={Gorilla} />
      </div>

      <div className='image-slider-desktop'>
        <img className='image1D' src={Gorilla} />
        <img className='image2D' src={Gorilla} />
        <img className='image3D' src={Gorilla} />
        <img className='image4D' src={Gorilla} />
      </div>
    </div>
  )
}

export default Animals
