import React from 'react';

import money from 'assets/icon-money.svg';
import conversion from 'assets/icon-conversion.svg';
import support from 'assets/icon-support.svg';
import pay from 'assets/icon-pay.svg';
import telemarketer from 'assets/icon-telemarketer.svg';

import * as S from './styles';

function Benefits() {
  return (
    <S.Wrapper>
      <h2>More merchant benefits</h2>
      <section>
        <ul>
          <li>
            <img src={money} alt="" />
            <article>
              <h4>No charge back risk</h4>
              <p>
                All funds received via LKPay are 100% secure and indemnified.
              </p>
            </article>
          </li>
          <li>
            <img src={conversion} alt="" />
            <article>
              <h4>High conversion</h4>
              <p>
                Customers only need email and a password to pay , no
                re-direction involved.
              </p>
            </article>
          </li>
          <li>
            <img src={telemarketer} alt="" />
            <article>
              <h4>New customer acquisition</h4>
              <p>
                Expand and increase customer acquisition in emerging markets
                globally including high risk areas.
              </p>
            </article>
          </li>
          <li>
            <img src={pay} alt="" />
            <article>
              <h4>Recurring Payments</h4>
              <p>
                Merchants can set up a subscription plan, enrol a member and
                have charges applied against their LKPay account at any interval
                without any manual input.
              </p>
            </article>
          </li>
          <li>
            <img src={support} alt="" />
            <article>
              <h4>Extra services</h4>
              <p>
                Expand your billing team support by engaging our Global Customer
                Service team to convert and assist your users.
              </p>
            </article>
          </li>
        </ul>
      </section>
    </S.Wrapper>
  );
}

export default Benefits;
