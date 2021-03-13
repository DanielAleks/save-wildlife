import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Articles from "./articles";
import Gallery from "./gallery";
import Home from "./home";
import ListAnimals from "./list-animals/ListAnimals";
import './style.sass'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/gallery">ListAnimals</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <ListAnimals />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/animals">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}