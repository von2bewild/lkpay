import React, { Fragment } from 'react';

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
