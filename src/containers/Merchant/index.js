import React, { Fragment } from 'react';

import Footer from 'components/Footer';
import Header from './Header';
import Fees from './Fees';

function Merchant() {
  return (
    <Fragment>
      <Header />
      <Fees />
      <Footer />
    </Fragment>
  );
}

export default Merchant;
