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
    </Router>
  );
}