import React from 'react'
import './list-animals.sass'
import { Link } from "react-scroll";
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
import { IoIosArrowDown } from 'react-icons/io'

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

    const accesso = this.state.accessor
    const accessorHandler = (id) =>
      this.setState({ accessor: id })

    return (
      <div id='top-gallery' className='list-bg'>
        <div className='whitespace-circle' />

        <Link to="bottom-gallery" className='scroll-down' spy={true} smooth={true} offset={0} duration={500}>
          <p>Scroll</p>
          <IoIosArrowDown size={30} />
          <p>Down</p>
        </Link>
        <div className='animal-top-container'>
          <div className='top-inner-container'>
            <img src={images[accesso].image} alt="image" />
            <AnimalInfo accesso={accesso} />
          </div>
        </div>

        <div className='list-omni-container'>
          <div className='bottom-orange-box' />
          <div className='list-container'>
            {images.map((Item, id) =>
              <div id='bottom-gallery' className='image-container'>
                <Link to="top-gallery" spy={true} smooth={true} offset={0} duration={500}>
                  <img onClick={() => accessorHandler(id)} src={Item.image} alt="image" />
                </Link>
                <p>{Item.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ListAnimals
