import React, { Fragment } from 'react';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Header from './Header';
import HowDoesItWork from './HowDoesItWork';
import LkCard from './LkCard';
import Merchants from './Merchants';
import Benefits from './Benefits';
import Subscribe from './Subscribe';

function Home() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <HowDoesItWork />
      <LkCard />
      <Merchants />
      <Benefits />
      <Subscribe />
      <Footer />
    </Fragment>
  );
}

export default Home;
