import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component="/">
            <Home />
          </Route>
          <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Animals() {
  return <h2>Animals</h2>;
}

function Articles() {
  return <h2>Articles</h2>;
}
