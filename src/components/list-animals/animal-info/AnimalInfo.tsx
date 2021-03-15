import React from 'react'
import { animalsApi } from '../../../ApiInfo'
import './animal-info.sass'

interface myProps {
  accesso: number
}

class AnimalInfo extends React.Component<myProps, any> {
  constructor(props) {
    super(props)

  }

  render() {

    const accessor = this.props.accesso

    return (
      <div className='info-outer-container'>
        <p className='info-header'>Information:</p>

        <div className='short-info-container'>
          <div>
            <div>
              <h4>Name:</h4>
              <p>{animalsApi[accessor].Name}</p>
            </div>
            <div>
              <h4>Location:</h4>
              <p>{animalsApi[accessor].Location}</p>
            </div>
          </div>
          <div>
            <div>
              <h4>Estimated Population:</h4>
              <p>{animalsApi[accessor].Population}</p>
            </div>
            <div>
              <h4>Status:</h4>
              <p>{animalsApi[accessor].Status}</p>
            </div>
          </div>
        </div>

        <div className='description-container'>
          <h4 className='description'>Description:</h4>
          <p>{animalsApi[accessor].Description}</p>
        </div>
      </div>
    )
  }
}

export default AnimalInfo
