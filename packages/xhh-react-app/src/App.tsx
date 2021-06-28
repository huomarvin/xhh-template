import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routers from "./pages/router";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {Routers.map((router, index) => (
            <li key={index}>
              <Link to={router.path}>{router.desc}</Link>
            </li>
          ))}
        </ul>
        <Switch>
          {Routers.map((router, index) => (
            <Route
              path={router.path}
              key={index}
              exact
              children={router.children}
            ></Route>
          ))}
        </Switch>
      </nav>
    </Router>
  );
}

export default hot(App);
