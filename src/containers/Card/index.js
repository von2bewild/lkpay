import React, { Fragment } from 'react';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import Header from './Header';
import Why from './Why';
import Easy from './Easy';
import Apply from './Apply';
import Reminders from './Reminders';
import Charge from './Charge';
import FeesLimits from './FeesLimits';

function Card() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Why />
      <Easy />
      <Apply />
      <Reminders />
      <Charge />
      <FeesLimits />
      <Footer />
    </Fragment>
  );
}

export default Card;
