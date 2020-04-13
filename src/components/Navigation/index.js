import React from 'react';
import { withRouter } from 'react-router-dom';

import DefaultNav from './DefaultNav';
// import AuthNav from './AuthNav';

function Navigation({ location: { pathname } }) {
  // const renderNav = () => {
  //   if (pathname === '/login' || pathname === '/register') {
  //     return <AuthNav />;
  //   } else {
  //     return <DefaultNav />;
  //   }
  // };
  return <DefaultNav />;
}

export default withRouter(Navigation);
