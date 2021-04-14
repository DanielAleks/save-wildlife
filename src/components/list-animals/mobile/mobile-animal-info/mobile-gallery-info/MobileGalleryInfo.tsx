import { connect } from 'react-redux'
import React from 'react'
import { animalsApi } from '../../../../../ApiInfo'
import './gallery-info.sass'

class MobileGalleryInfo extends React.Component<any, any> {
  render() {
    return (
      <div className='gallery-info-bg' >

        <p className='gallery-main-header'>Information</p>

        <div className='gallery-items'>

          <div className='three-main'>
            <div>
              <h4>Habitat:</h4>
              <p>{animalsApi[this.props.accessor].Location}</p>
            </div>
            <div>
              <h4>Population:</h4>
              <p>{animalsApi[this.props.accessor].Population}</p>
            </div>
            <div>
              <h4>Description:</h4>
              <p className='description'>{animalsApi[this.props.accessor].Description}</p>
            </div>
          </div>

          <div className='secondary'>
            <div>
              <p className='animal-name'>{animalsApi[this.props.accessor].Name}</p>
            </div>
            <div className='status'>
              <h4>Status:</h4>
              <p>{animalsApi[this.props.accessor].Status}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accessor: state.accessor
})

export default connect(mapStateToProps)(MobileGalleryInfo)
