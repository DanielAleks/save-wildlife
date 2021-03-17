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
          {this.props.images.map((Item, id) =>

            <div className='image-container' id='bottom-gallery'>
              <Link to="top-gallery" spy={true} smooth={true} offset={0} duration={500}>
                <img style={{
                  height: id === 1 || id === 2 || id === 5 || id === 6 || id === 9 || id === 10 ?
                    '16rem' : '12rem',
                }}
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