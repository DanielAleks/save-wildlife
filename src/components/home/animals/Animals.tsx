import React from 'react'
import './animals.sass'
import Gorilla from '../../../assets/images/gorilla.jpg'
import Panda from '../../../assets/images/panda.jpg'
import Penguin from '../../../assets/images/penguin.jpg'
import Rhino from '../../../assets/images/rhino.jpg'
import lionLogo from '../../../assets/images/lionLogo.png'

function Animals() {
  return (
    <div id='animals' className='animals-container'>
      <div className='top-left-tri' />
      <div className='bottom-right-tri' />
      <div className='image-slider-mobile'>
        <img className='image1M' src={Gorilla} />
        <img className='image2M' src={Gorilla} />
      </div>

      <div className='image-slider-desktop'>
        <img className='image1D' src={Gorilla} />
        <img className='image2D' src={Panda} />
        <img className='image3D' src={Penguin} /> 
        <img className='image4D' src={Rhino} />
      </div>
    </div>
  )
}

export default Animals
