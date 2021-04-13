import React from 'react'
import AnimalInfo from '../animal-info/AnimalInfo'
import { Link } from "react-scroll";
import { IoIosArrowDown } from 'react-icons/io'
import './desktop-top-container.sass'
import { connect } from 'react-redux';

interface myProps {
  images: any
  accessor: number
}

class DesktopTopGallery extends React.Component<any, {}> {
  constructor(props) {
    super(props)
  }

  setTheAccessor = () => {
    this.props.dispatch({ type: "INCREMENT" })
    console.log(this.props.accessor, "this better be incrementing")
  }

  render() {
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
            <img src={images[this.props.accessor].image} alt="image" />
            {/* <AnimalInfo accessor={accessor} /> */}
            <button onClick={this.setTheAccessor}>
              <p>add to accessor</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accessor: state.accessor
})

export default connect(mapStateToProps)(DesktopTopGallery)
