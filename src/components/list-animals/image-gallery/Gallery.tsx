import React from 'react'
import { Link } from "react-scroll";
import './gallery.sass'

interface myProps {
  images: any
  accessor: number
}

class Gallery extends React.Component<myProps, any> {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div className='list-omni-container'>

        <div className='orange-box-container'>
          <div className='bottom-orange-box' />
        </div>
        <div className='list-container'>
          <Link className='gallery-clickable-header'
            to="bottom-gallery" spy={true} smooth={true} offset={0} duration={500}>Gallery</Link>
          {this.props.images.map((Item, idx) =>

            <div className='image-container' id='bottom-gallery'>
              <Link to="top-gallery" spy={true} smooth={true} offset={0} duration={500}>
                <img className='mobile-gallery-image' style={{
                  height: idx === 1 || idx === 2 || idx === 5 || idx === 6 || idx === 9 || idx === 10 ?
                    '16rem' : '12rem',
                }}
                  onClick={() => this.setState({ accessor: Item[idx].id })}
                  src={Item.image} alt="image" />

                <img className='desktop-gallery-image'
                  onClick={() => this.setState({ accessor: Item[idx].id })}
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