import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './articles.sass'

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

interface myProps {
  images: any
  accessor: number
  dispatch: any
}

class Articles extends React.Component<myProps, any> {
  constructor(props) {
    super(props);
  };

  incrementAccessor = () => {
    if (this.props.accessor < 11) {
      return this.props.dispatch({ type: "INCREMENT" })
    } else return null
  }

  render() {
    const images = this.props.images

    return (
      <div className='art-bg'>

        <div className='art-sidebar'>
          <Link to="gallery" spy={true} smooth={true} offset={0} duration={500}>
            <img className='art-image' src={images[this.props.accessor].image} alt="image" />
          </Link>
          <button onClick={this.incrementAccessor}>Next Animal</button>
        </div>

        <div className='art-container'>
          {articles.map((item, id) =>
            <div className='art-mapped-container'>
              <p style={{ animationDelay: `${.1 + id * .1}s` }} className='art-header'>{item.header}</p>
              <p style={{ animationDelay: `${.2 + id * .1}s` }} className='art-description'>{item.description}</p>
              <a href={item.url} target='_blank' >
                <button style={{ animationDelay: `${.3 + id * .1}s` }} className='art-button'>Go to Article</button>
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accessor: state.accessor
})

export default connect(mapStateToProps)(Articles)
