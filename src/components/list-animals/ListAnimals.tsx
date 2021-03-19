import React from 'react'
import Gallery from './image-gallery/Gallery';
import DesktopTopGallery from './desktop-top-container/DesktopTopGallery';
import MobileGalleryInfo from './mobile/mobile-animal-info/mobile-gallery-info/MobileGalleryInfo'
import './list-animals.sass'

interface myProps {
  images: any
}

class ListAnimals extends React.Component<myProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      accessor: 0
    }
  }

  render() {

    const images = this.props.images
    const accessor = this.state.accessor

    return (
      <div className='list-master-container' id='top-gallery'>

        <div className='list-bg'>
          <DesktopTopGallery
            images={images}
            accessor={accessor}
          />
        </div>

        <div className='mobile-container'>
          <img src={images[accessor].image} alt="image" />
        </div>

        <MobileGalleryInfo />

        <Gallery
          accessor={accessor}
          images={images}
        />

      </div >
    )
  }
}

export default ListAnimals
