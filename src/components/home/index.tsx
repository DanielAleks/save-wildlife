import React from 'react'
import Navbar from '../navbar/Navbar'
import './home.sass'
import Tiger from '../../assets/images/tigerNew.jpg'
import HomeMore from './more/HomeMore'
import Animals from './animals/Animals'

class Home extends React.Component<{}, any> {
 constructor(props) {
   super(props)

   this.state = {

   }
 }
 
  render() {
    return (
      <div>
      <div className='bg-image'/>
      <HomeMore/>
      <Animals />
    </div>
  )
}
}

export default Home 
