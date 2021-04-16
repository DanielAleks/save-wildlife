import React from 'react'
import HomeMore from './more/HomeMore'
import Animals from './animals/Animals'
import './home.sass'

interface myProps {
  images: any
}

class Home extends React.Component<myProps, any> {
 constructor(props) {
   super(props)

   this.state = {

   }
 }
 
  render() {
    const images: any = this.props.images

    return (
      <div>
      <div className='bg-image'/>
      <HomeMore/>
      <Animals images={images}/>
    </div>
  )
}
}

export default Home 
