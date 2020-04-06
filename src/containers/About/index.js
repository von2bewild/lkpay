import React, { Fragment } from 'react';

import Footer from 'components/Footer';

import Header from './Header';
import Advantages from './Advantages';
import Merchants from './Merchants';
import Withdraw from './Withdraw';
import Apply from './Apply';
import WhoShouldUse from './WhoShouldUse';
import Experience from './Experience';

function About() {
  return (
    <Fragment>
      <Header />
      <Advantages />
      <Merchants />
      <Withdraw />
      <Apply />
      <WhoShouldUse />
      <Experience />
      <Footer />
    </Fragment>
  );
}

export default About;
