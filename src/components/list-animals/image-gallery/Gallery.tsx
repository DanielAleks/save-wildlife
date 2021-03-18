import React from 'react'
import { Link } from "react-scroll";
import './gallery.sass'

interface myProps {
  images: any
  accessorHandler: any
}

class Gallery extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div className='list-omni-container'>
        <div className='bottom-orange-box' />
        <div className='list-container'>
          <p className='gallery-clickable-header'>Gallery</p>
          {this.props.images.map((Item, id) =>

            <div className='image-container' id='bottom-gallery'>
              <Link to="top-gallery" spy={true} smooth={true} offset={0} duration={500}>
                <img className='mobile-gallery-image' style={{
                  height: id === 1 || id === 2 || id === 5 || id === 6 || id === 9 || id === 10 ?
                    '16rem' : '12rem',
                }}
                  onClick={() => this.props.AccessorHandler(id)}
                  src={Item.image} alt="image" />

                <img className='desktop-gallery-image'
                  onClick={() => this.props.AccessorHandler(id)}
                  src={Item.image} alt="image" />
              </Link>
              <p>{Item.name}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Gallery