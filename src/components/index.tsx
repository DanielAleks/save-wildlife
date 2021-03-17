import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Articles from "./articles";
import Home from "./home";
import ListAnimals from "./list-animals/ListAnimals";
import Navbar from "./navbar/Navbar";
import './style.sass'

interface myState {
  accessor: number
}

class App extends React.Component<{}, myState> {
  constructor(props) {
    super(props)

    this.state = {
      accessor: 9
    }
  }

  render() {

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/gallery">
            <ListAnimals />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App