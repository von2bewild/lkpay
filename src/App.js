import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';
import Fees from 'containers/Fees';
import Merchant from 'containers/Merchant';
import Card from 'containers/Card';
import Bankwire from 'containers/Bankwire';
import Affiliates from 'containers/Affiliates';
import News from 'containers/News';
import Support from 'containers/Support';

function App() {
  return (
    <Router basename="/lkpay-staging">
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/fees">
            <Fees />
          </Route>
          <Route exact path="/merchant">
            <Merchant />
          </Route>
          <Route exact path="/lkpay-card">
            <Card />
          </Route>
          <Route exact path="/local-bankwire">
            <Bankwire />
          </Route>
          <Route exact path="/affiliates">
            <Affiliates />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
