import React, { Fragment } from 'react';

import Footer from 'components/Footer';

import Header from './Header';
import SignupForm from './SignupForm';

function Signup() {
  return (
    <Fragment>
      <Header />
      <SignupForm />
      <Footer />
    </Fragment>
  );
}

export default Signup;
