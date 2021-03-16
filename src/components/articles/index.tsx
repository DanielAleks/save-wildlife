import React from 'react'
import RedPandaCartoon from '../../assets/images/redPandaCartoon.jpg'
import Orangutan from '../../assets/images/orangutan.jpg'
import Gorilla from '../../assets/images/gorilla.jpg'
import Bengal from '../../assets/images/bengalTiger.jpg'
import Elephant from '../../assets/images/elephant.jpg'
import Panda from '../../assets/images/panda.jpg'
import Penguin from '../../assets/images/penguin.jpg'
import PolarBear from '../../assets/images/polarBear.jpg'
import Rhino from '../../assets/images/rhino.jpg'
import Leopard from '../../assets/images/snowLeopard.jpg'
import Turtle from '../../assets/images/turtle.jpg'
import Whale from '../../assets/images/whale.jpg'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './articles.sass'

const images = [
  { image: Bengal }, { image: Panda }, { image: Whale },
  { image: Elephant }, { image: Gorilla }, { image: Leopard },
  { image: Orangutan }, { image: Turtle }, { image: Rhino },
  { image: Penguin }, { image: RedPandaCartoon }, { image: PolarBear }
]

export const articles = [
  {
    header: "Success stories on animal conservation so far",
    description: "Top stories that demonstrated wildlife conservation efforts were not in vain. Stories of how we saved species such as whales, gorillas, bald eagles and many more.",
    url: "https://www.weforum.org/agenda/2020/03/conservation-stories-on-world-wildlife-day/"
  },
  {
    header: "How we can help wildlife",
    description: "Ways you can help wildlife, whether it be by donating, joining a team or spreading awareness. Sign up to help or just learn on how to make an impact on wildlife conservation.",
    url: "https://www.worldwildlife.org/how-to-help"
  },
  {
    header: "Current articles on wildlife conservation",
    description: "Recent feed on conservation efforts. Elaborating on how climate change and human interferance is negatively impacting wildlife.",
    url: "https://theconversation.com/us/topics/wildlife-conservation-4235"
  }
]

class Articles extends React.Component<{}, any> {
  constructor(props) {
    super(props);

    this.state = {
      accessor: 0
    };
  }

  render() {

    const accessor = this.state.accessor
    const addToAccessor = () => {
      this.setState({ accessor: accessor + 1 })
    }

    // const removeList = () => 
    // store.dispatch({ type: ADD_ACCESSOR })

    return (
      <div className='art-bg'>

        <div className='art-sidebar'>
          <Link to="gallery" spy={true} smooth={true} offset={0} duration={500}>
            <img className='art-image' src={images[accessor].image} alt="image" />
          </Link>
          <button onClick={addToAccessor}>Next Animal</button>
        </div>

        <div className='art-container'>
          {articles.map((item) =>
            <div className='art-mapped-container'>
              <p className='art-header'>{item.header}</p>
              <p className='art-description'>{item.description}</p>
              <a href={item.url} target='_blank' >
                <button className='art-button'>Go to Article</button>
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Articles
