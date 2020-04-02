import React, { Fragment } from 'react';

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
    </Fragment>
  );
}

export default Home;
