import React from 'react'
import HomeMore from './more/HomeMore'
import Animals from './animals/Animals'
import './home.sass'

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
