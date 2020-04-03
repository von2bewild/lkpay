import React, { Fragment } from 'react';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import Header from './Header';
import Advantages from './Advantages';
import Merchants from './Merchants';

function About() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Advantages />
      <Merchants />
      <Footer />
    </Fragment>
  );
}

export default About;
