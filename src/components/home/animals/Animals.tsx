import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { connect, useDispatch } from 'react-redux';
import './parallax.sass'
import './animals.sass'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1: any = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2: any = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3: any = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4: any = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Animals({ images }) {
  const history = useHistory()
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const dispatch = useDispatch()
  const [newAccessor, setNewAccessor]: any = useState(0)

  const setTheAccessor = (propss) => {
    dispatch({ type: "BYID", payload: propss })
  }

  useEffect(() => {
    let setAccessor = setInterval(() => setNewAccessor((state) => state + 1), 5000);
    return () => clearInterval(setAccessor)
  }, []);

  const setReduxStateHandler = (myprop) => {
    setTheAccessor(myprop)
    history.push('gallery')
  }

  const desktopImages = [
    {
      style: 'card1',
      tran: trans1,
      propdata: images[5].id
    },
    {
      style: 'card2',
      tran: trans2,
      propdata: images[3].id
    },
    {
      style: 'card3',
      tran: trans3,
      propdata: images[1].id
    },
    {
      style: 'card4',
      tran: trans4,
      propdata: images[7].id
    }
  ]

  const mobileImages = [
    {
      style: "image1M",
      propdata: images[newAccessor].id,
      image: images[newAccessor].image
    },
    {
      style: "image1M",
      propdata: images[newAccessor + 1].id,
      image: images[newAccessor + 1].image
    }
  ]

  return (

    <div id='animals' className='animals-container'>
      <div className='image-slider-mobile'>

        {mobileImages.map((item) =>
          <button className='button-link' onClick={() => setReduxStateHandler(item.propdata)}>
            <img className={item.style} src={item.image} />
          </button>
        )}

      </div>

      <div className='image-slider-desktop'>
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          {desktopImages.map((item, idx) =>
            <button className='desktop-button-link' onClick={() => setReduxStateHandler(item.propdata)}>
              <animated.div className={item.style} style={{ transform: props.xy.interpolate(item.tran) }} />
            </button>
          )}
        </div>
      </div>
    </div >
  )
}

export default Animals