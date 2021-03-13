import React from 'react'
import snowLeopard from '../../../assets/images/snowLeopard1.jpg'
import './gallery-image.sass'

function GalleryImage() {
  return (
       <div className='gallary-container'>

<div className='gallary-overlay'>
  <div className='white-bg' />
  <p className='name-overlay'>Snow Leopard</p>
</div>

<img className='close-up-image' src={snowLeopard} alt='image' />
</div>
  )
}

export default GalleryImage
