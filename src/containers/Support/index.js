import React, { Fragment } from 'react';

import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Footer from 'components/Footer';

import iconInquiry1 from 'assets/icon-inquiry-general.svg';
import iconInquiry2 from 'assets/icon-inquiry-funds.svg';
import iconInquiry3 from 'assets/icon-inquiry-merchant.svg';
import iconInquiry4 from 'assets/icon-inquiry-affiliates.svg';

import GetInTouch from './GetInTouch';
import Faq from './Faq';

import * as S from './styles';

function Support() {
  return (
    <Fragment>
      <S.Wrapper>
        <S.Tabs>
          <nav>
            <NavLink to="/support/customer-service" activeClassName="active">customer service</NavLink>
            <NavLink to="/support/faq" activeClassName="active">faq</NavLink>
          </nav>
        </S.Tabs>
        <S.SupportList>
          <li>
            <img src={iconInquiry1} alt="" />
            <p>
              <strong>Account, General Inquiry</strong>
            </p>
            <p>account@lkpay.com</p>
          </li>
          <li>
            <img src={iconInquiry2} alt="" />
            <p>
              <strong>Funds Inquiry</strong>
            </p>
            <p>funds@lkpay.com</p>
          </li>
          <li>
            <img src={iconInquiry3} alt="" />
            <p>
              <strong>Merchant Inquiry</strong>
            </p>
            <p>merchant@lkpay.com</p>
          </li>
          <li>
            <img src={iconInquiry4} alt="" />
            <p>
              <strong>Affiliates Inquiry</strong>
            </p>
            <p>affiliate@lkpay.com</p>
          </li>
        </S.SupportList>
        <Switch>
          <Route exact path="/support/customer-service" component={GetInTouch} />
          <Route exact path="/support/faq" component={Faq} />
          <Redirect from="/support" to="/support/customer-service" />
        </Switch>
      </S.Wrapper>
      <Footer />
    </Fragment>
  );
}

export default Support;
