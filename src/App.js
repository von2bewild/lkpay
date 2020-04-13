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
import Login from 'containers/Login/Loadable';
import Signup from 'containers/Signup/Loadable';

function App() {
  return (
    <Router basename="/von/lkpay">
      <div className="app">
        <Navigation />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/fees" component={Fees} />
            <Route exact path="/merchant" component={Merchant} />
            <Route exact path="/lkpay-card" component={Card} />
            <Route exact path="/local-bankwire" component={Bankwire} />
            <Route exact path="/affiliates" component={Affiliates} />
            <Route exact path="/news" component={News} />
            <Route path="/support" component={Support} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={Signup} />
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
