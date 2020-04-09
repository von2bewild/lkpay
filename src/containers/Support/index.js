import React, { useState, Fragment } from 'react';
import classNames from 'classnames';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import GetInTouch from './GetInTouch';

import * as S from './styles';

function Support() {
  const [selectedTab, setSelectedTab] = useState('customer');
  return (
    <Fragment>
      <Navigation />
      <S.Wrapper>
        <S.Tabs>
          <nav>
            <button
              className={classNames({
                active: selectedTab === 'customer',
              })}
              onClick={() => setSelectedTab('customer')}
            >
              customer service
            </button>
            <button
              className={classNames({
                active: selectedTab === 'faq',
              })}
              onClick={() => setSelectedTab('faq')}
            >
              faq
            </button>
          </nav>
        </S.Tabs>
        <ul>
          <li>
            <img src="" alt="" />
            <p>
              <strong>Account, General Inquiry</strong>
            </p>
            <p>account@lkpay.com</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>
              <strong>Funds Inquiry</strong>
            </p>
            <p>funds@lkpay.com</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>
              <strong>Merchant Inquiry</strong>
            </p>
            <p>merchant@lkpay.com</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>
              <strong>Affiliates Inquiry</strong>
            </p>
            <p>affiliate@lkpay.com</p>
          </li>
        </ul>
        <S.TabContent
          className={classNames({
            active: selectedTab === 'customer',
          })}
        >
          <GetInTouch />
        </S.TabContent>
        <S.TabContent
          className={classNames({
            active: selectedTab === 'faq',
          })}
        >
          boom boom
        </S.TabContent>
      </S.Wrapper>
      <Footer />
    </Fragment>
  );
}

export default Support;