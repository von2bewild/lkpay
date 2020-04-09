import React, {Fragment} from 'react';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Header from './Header';
import Fees from './Fees';

function Merchant() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Fees />
      <Footer />
    </Fragment>
  );
}

export default Merchant;
