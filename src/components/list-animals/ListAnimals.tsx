import React from 'react'
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
import Gallery from './image-gallery/Gallery';
import DesktopTopGallery from './desktop-top-container/DesktopTopGallery';
import './list-animals.sass'

const images = [
  { image: Bengal, name: 'Bengal Tiger' }, { image: Panda, name: 'Panda' }, { image: Whale, name: 'Blue Whale' },
  { image: Elephant, name: 'Elephant' }, { image: Gorilla, name: 'Gorilla' }, { image: Leopard, name: 'Snow Leopard' },
  { image: Orangutan, name: 'Orangutan' }, { image: Turtle, name: 'Sea Turtle' }, { image: Rhino, name: 'Rhinocerus' },
  { image: Penguin, name: 'Penguin' }, { image: RedPanda, name: 'Red Panda' }, { image: PolarBear, name: 'Polar Bear' }
]

class ListAnimals extends React.Component<{}, any> {
  constructor(props) {
    super(props);

    this.state = {
      accessor: 0
    }
  }

  render() {

    const accessor = this.state.accessor
    const accessorHandler = (id) =>
      this.setState({ accessor: id })

    return (
      <div id='top-gallery' className='list-bg'>

        <DesktopTopGallery
          images={images}
          accessor={accessor}
        />

        <div className='mobile-container'>
          <img src={images[accessor].image} alt="image" />
        </div>
        <div className='white-container'></div>


        <Gallery
          accessorHandler={accessorHandler}
          images={images}
        />

      </div>
    )
  }
}

export default ListAnimals
