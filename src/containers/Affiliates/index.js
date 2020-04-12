import React, { Fragment } from 'react';

import Footer from 'components/Footer';

import * as S from './styles';

function Affiliates() {
  return (
    <Fragment>
      <S.Wrapper>
        <article>
          <small>LKPay Affiliate Partnership</small>
          <h2>REVENUE SHARE 20%</h2>
          <p>
            Refer customers and earn commission on their activity Join our
            partner program and promote the great LKPay wallets You will
            receive commissions when new customers are introduced
          </p>
          <footer>
            <button className="outline-btn">sign up</button>
            <button className="solid-btn">affiliate login</button>
          </footer>
        </article>
      </S.Wrapper>
      <Footer />
    </Fragment>
  );
}

export default Affiliates;
