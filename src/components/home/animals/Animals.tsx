import React from 'react'
import { useSpring, animated } from 'react-spring'
import './parallax.sass'
import './animals.sass'
import Gorilla from '../../../assets/images/gorilla.jpg'
import Panda from '../../../assets/images/panda.jpg'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1: any = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2: any = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3: any = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4: any = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Animals() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (

    <div id='animals' className='animals-container'>

      <div className='image-slider-mobile'>
        <img className='image1M' src={Gorilla} alt="image1" />
        <img className='image2M' src={Panda} alt="image2" />
      </div>

      <div className='image-slider-desktop'>
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
          <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
          <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
          <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
        </div>
      </div>
    </div>
  )
}

export default Animals