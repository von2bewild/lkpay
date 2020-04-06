import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from 'components/Navigation';
import Home from 'containers/Home/Loadable';
import About from 'containers/About/Loadable';
import Fees from 'containers/Fees/Loadable';
import Merchant from 'containers/Merchant/Loadable';
import Card from 'containers/Card/Loadable';
import Bankwire from 'containers/Bankwire/Loadable';
import Affiliates from 'containers/Affiliates/Loadable';
import News from 'containers/News/Loadable';
import Support from 'containers/Support/Loadable';

function App() {
  return (
    <Router basename="/von/lkpay">
      <div className="app">
        <Navigation />
        <Wrapper>
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
        </Wrapper>
      </div>
    </Router>
  );
}

const Wrapper = styled.div`
  margin-top: 75px;
  @media (max-width: 1200px) {
    margin-top: 55px;
  }
`;

export default App;
