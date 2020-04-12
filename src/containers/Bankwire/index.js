import React, { Fragment } from 'react';

import Footer from 'components/Footer';

import Header from './Header';
import Benefits from './Benefits';
import Countries from './Countries';
import Deposits from './Deposits';

function Bankwire() {
  return (
    <Fragment>
      <Header />
      <Benefits />
      <Countries />
      <Deposits />
      <Footer />
    </Fragment>
  );
}

export default Bankwire;
