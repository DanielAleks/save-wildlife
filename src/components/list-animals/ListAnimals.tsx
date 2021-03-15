import React from 'react'
import Navbar from '../navbar/Navbar'
import './list-animals.sass'
import Orangutan from '../../assets/images/orangutan.jpg'
import Gorilla from '../../assets/images/gorilla.jpg'
import Bengal from '../../assets/images/bengalTiger.jpg'
import Elephant from '../../assets/images/elephant.jpg'
import Panda from '../../assets/images/panda.jpg'
import Penguin from '../../assets/images/penguin.jpg'
import PolarBear from '../../assets/images/polarBear.jpg'
import RedPanda from '../../assets/images/redPanda.jpg'
import Rhino from '../../assets/images/rhino.jpg'
import Leopard from '../../assets/images/snowLeopard.jpg'
import Turtle from '../../assets/images/turtle.jpg'
import Whale from '../../assets/images/whale.jpg'
import AnimalInfo from './animal-info/AnimalInfo'

function ListAnimals() {

  const images = [
    { image: Bengal, name: 'Bengal Tiger' }, { image: Panda, name: 'Panda' }, { image: Whale, name: 'Blue Whale' },
    { image: Elephant, name: 'Elephant' }, { image: Gorilla, name: 'Gorilla' }, { image: Leopard, name: 'Snow Leopard' },
    { image: Orangutan, name: 'Orangutan' }, { image: Turtle, name: 'Sea Turtle' }, { image: Rhino, name: 'Rhinocerus' },
    { image: Penguin, name: 'Penguin' }, { image: RedPanda, name: 'Red Panda' }, { image: PolarBear, name: 'Polar Bear' }
  ]

  return (
    <div className='list-bg'>
      <div className='whitespace-circle' />

      <div className='animal-top-container'>
        <div className='top-inner-container'>
          <img src={images[0].image} alt="image" />
          <AnimalInfo />
        </div>
      </div>

      <div className='list-omni-container'>
        <div className='bottom-orange-box' />
        <div className='list-container'>
          {images.map((Item) =>
            <div className='image-container'>
              <img src={Item.image} alt="" />
              <p>{Item.name}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default ListAnimals
