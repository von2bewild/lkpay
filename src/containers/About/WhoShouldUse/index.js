import React from 'react';
import check from 'assets/icon-check.svg';

import * as S from './styles';

function WhoShouldUse() {
  return (
    <S.Wrapper>
      <h2>Who should use LKPay the most?</h2>
      <h6>
        If you need to do more transactions than 150 EUR, you will need to be
        approved by our onboarding team as we need to abide by the AML rules. To
        do this, we will need to see two forms of documents as below.
      </h6>
      <article>
        <img src={check} alt="" className="check" />
        <p>
          LKPay enables multi currency settlements for businesses selling
          services globally.
        </p>
      </article>
      <article>
        <img src={check} alt="" className="check" />
        <p>
          LKPay is useful especially for non-major currencies used for traveling
          abroad and online international purchases. You can save a lot by using
          local ATM machine for withdrawals with LKPay Card.
        </p>
      </article>
      <article>
        <img src={check} alt="" className="check" />
        <p>
          Any international transfers to and from your friends and family can be
          done instantly with accounts’ internal transfer option.
        </p>
      </article>

      <ul>
        <li>
          <img src="" alt="" />
          <p className="label">Global Customers</p>
        </li>
        <li>
          <span className="arrow" />
          <p className="label2">Local Currency Settlement</p>
        </li>
        <li>
          <img src="" alt="" />
          <p className="label">Global Businesses</p>
        </li>
      </ul>

      <ul>
        <li>
          <img src="" alt="" />
          <p className="label">In Japan</p>
        </li>
        <li>
          <span className="arrow" />
          <p className="label2">Borderless Money Transfer</p>
        </li>
        <li>
          <img src="" alt="" />
          <p className="label">In China</p>
        </li>
      </ul>

      <ul>
        <li>
          <img src="" alt="" />
          <p className="label">Korean Merchant</p>
        </li>
        <li>
          <p className="label2">
            Provide goods / services to Chinese online merchant
          </p>
          <span className="arrow" />
          <span className="arrow2" />
          <p className="label2">Pay with STICPAY internationally</p>
          <small>
            Receive payments from the Chinese merchants selling Korean
            goods/services in China instantly.
          </small>
        </li>
        <li>
          <img src="" alt="" />
          <p className="label">Chinese Merchant</p>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default WhoShouldUse;
