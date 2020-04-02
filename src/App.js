import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navigation from "components/Navigation";
import Home from "containers/Home";
import About from "containers/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
