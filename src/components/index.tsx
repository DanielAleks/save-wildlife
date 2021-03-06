import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Articles from "./articles";
import Home from "./home";
import ListAnimals from "./list-animals/ListAnimals";
import Navbar from "./navbar/Navbar";
import Orangutan from '../assets/images/orangutan.jpg'
import Gorilla from '../assets/images/gorilla.jpg'
import Bengal from '../assets/images/bengalTiger.jpg'
import Elephant from '../assets/images/elephant.jpg'
import Panda from '../assets/images/panda.jpg'
import Penguin from '../assets/images/penguin.jpg'
import PolarBear from '../assets/images/polarBear.jpg'
import RedPanda from '../assets/images/redPanda.jpg'
import Rhino from '../assets/images/rhino.jpg'
import Leopard from '../assets/images/snowLeopard1.jpg'
import Turtle from '../assets/images/turtle.jpg'
import Whale from '../assets/images/whale.jpg'
import { Provider } from "react-redux";
import { createStore } from "redux"
// import storeConfig from "./store.ts";
import { connect } from "react-redux";
// import fetchContentAction from "./actions/fetchContentAction"
import './style.sass'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true
})

interface myState {
  accessor: number
}

const images = [
  { image: Bengal, name: 'Bengal Tiger', id: 0 }, { image: Panda, name: 'Panda', id: 1 }, { image: Whale, name: 'Blue Whale', id: 2 },
  { image: Elephant, name: 'Elephant', id: 3 }, { image: Gorilla, name: 'Gorilla', id: 4 }, { image: Leopard, name: 'Snow Leopard', id: 5 },
  { image: Orangutan, name: 'Orangutan', id: 6 }, { image: Turtle, name: 'Sea Turtle', id: 7 }, { image: Rhino, name: 'Rhinocerus', id: 8 },
  { image: Penguin, name: 'Penguin', id: 9 }, { image: RedPanda, name: 'Red Panda', id: 10 }, { image: PolarBear, name: 'Polar Bear', id: 11 }
]

class App extends React.Component<{}, myState> {
  constructor(props) {
    super(props)
  }

  render() {

    const initialState = {
      accessor: 0
    }
    function reducer(state = initialState, action) {
      switch (action.type) {
        case "INCREMENT":
          return {
            accessor: state.accessor + 1
          }
        case "BYID":
          return {
            accessor:
              action.payload,
          }
        default:
          return state
      }
    }
    const store = createStore(reducer)
    store.dispatch({ type: "INCREMENT" })

    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home images={images} />
            </Route>
            <Route path="/gallery">
              <ListAnimals images={images} />
            </Route>
            <Route path="/articles">
              <Articles images={images} />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;