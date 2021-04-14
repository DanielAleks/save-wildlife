import React from 'react'
import Gallery from './image-gallery/Gallery';
import DesktopTopGallery from './desktop-top-container/DesktopTopGallery';
import MobileGalleryInfo from './mobile/mobile-animal-info/mobile-gallery-info/MobileGalleryInfo'
import './list-animals.sass'
import { connect } from 'react-redux';

interface myProps {
  images: any
  dispatch: any
  accessor: number
}

class ListAnimals extends React.Component<myProps, any> {
  constructor(props) {
    super(props)
  }

  render() {

    const images = this.props.images

    return (
      <div className='list-master-container' id='top-gallery'>

        <div className='list-bg'>
          <DesktopTopGallery
            images={images}
          />
        </div>

        <div className='mobile-container'>
          <img src={images[this.props.accessor].image} alt="image" />
        </div>

        <MobileGalleryInfo />

        <Gallery
          images={images}
        />

      </div >
    )
  }
}

const mapStateToProps = state => ({
  accessor: state.accessor
})

export default connect(mapStateToProps)(ListAnimals)
