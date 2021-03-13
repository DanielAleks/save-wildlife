import React from 'react'
import './more.sass'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

function HomeMore() {
  return (
    <div className='more-container'>

      <div className='more-overlay'>
        <div className='more-bg' />

        <div className='more-content'>
          <header>
            <h1>Save</h1>
            <h1>Wildlife</h1>
          </header>
          <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt molliti. </p>
          <button className='more-button'>See More...</button>
          
          <div className='arrow-box'>
            <BsArrowDown size={30}/> 
            <BsArrowUp size={30}/>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default HomeMore 