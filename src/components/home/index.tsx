import React from 'react'
import Navbar from '../navbar/Navbar'
import './home.sass'
import Tiger from '../../assets/images/tigerNew.jpg'
import HomeMore from './more/HomeMore'
import Animals from './animals/Animals'

function Home() {
  return (
    <div>
      <div className='bg-image'/>
      <HomeMore/>
      <Animals/>
    </div>
  )
}

export default Home
