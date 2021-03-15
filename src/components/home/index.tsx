import React from 'react'
import Navbar from '../navbar/Navbar'
import './home.sass'
import Tiger from '../../assets/images/tigerNew.jpg'
import HomeMore from './more/HomeMore'
import Animals from './animals/Animals'


interface myProps {
  accessor: number
}

class Home extends React.Component<myProps, any> {
 constructor(props) {
   super(props)

   this.state = {

   }
 }
 
  render() {
    const accessor = this.props.accessor
    return (
      <div>
      <div className='bg-image'/>
      <HomeMore/>
      <Animals accessor={accessor} />
    </div>
  )
}
}

export default Home 
