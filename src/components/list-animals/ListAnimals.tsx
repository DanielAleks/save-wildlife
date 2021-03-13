import React from 'react'
import Navbar from '../navbar/Navbar'
import './list-animals.sass'
import Orangutan from '../../assets/images/orangutan.jpg'
import Gorilla from '../../assets/images/gorilla.jpg'
import Bengal from '../../assets/images/bengalTiger.jpg'
import Elaphant from '../../assets/images/elephant.jpg'
import Panda from '../../assets/images/panda.jpg'
import Penguin from '../../assets/images/penguin.jpg'
import PolarBear from '../../assets/images/polarBear.jpg'
import RedPanda from '../../assets/images/redPanda.jpg'
import Rhino from '../../assets/images/rhino.jpg'
import Leopard from '../../assets/images/snowLeopard.jpg'
import Turtle from '../../assets/images/turtle.jpg'
import Whale from '../../assets/images/whale.jpg'

function ListAnimals() {

  const images = [
    { 1: Orangutan, 2: Gorilla, 3: Bengal },
    { 1: Elaphant, 2: Panda, 3: Penguin },
    { 1: PolarBear, 2: RedPanda, 3: Rhino },
    { 1: Leopard, 2: Turtle, 3: Whale }
  ]

  return (
    <div>
      <Navbar />
      <div className='list-bg'>

        <div className='list-container'>
          {images.map((Item) =>
            <div className='image-container'>
              <img src={Item[1]} alt="" />
              <img src={Item[2]} alt="" />
              <img src={Item[3]} alt="" />
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default ListAnimals
