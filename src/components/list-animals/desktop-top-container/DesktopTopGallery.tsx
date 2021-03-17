import React from 'react'
import AnimalInfo from '../animal-info/AnimalInfo'
import { Link } from "react-scroll";
import { IoIosArrowDown } from 'react-icons/io'
import './desktop-top-container.sass'

interface myProps {
  images: any
  accessor: number
}

class DesktopTopGallery extends React.Component<myProps, {}> {
  constructor(props) {
    super(props)
  }
  render() {
    const accessor = this.props.accessor
    const images = this.props.images
    
    return (
      <div className='desktop-container'>
        <div className='whitespace-circle' />
        <Link to="bottom-gallery" className='scroll-down' spy={true} smooth={true} offset={0} duration={500}>
          <p>Scroll</p>
          <IoIosArrowDown size={30} />
          <p>Down</p>
        </Link>
        <div className='animal-top-container'>
          <div className='top-inner-container'>
            <img src={images[accessor].image} alt="image" />
            <AnimalInfo accessor={accessor} />
          </div>
        </div>
      </div>
    )
  }
}

export default DesktopTopGallery
