import React from 'react';
import person from 'assets/img-person-jp.png';

import * as S from './styles';

function Apply() {
  return (
    <S.Wrapper>
      <h2>What do i need to apply for LKPay Card?</h2>
      <h6>
        "To be eligible for LKPay card application, you just need to have more
        than $110 in your LKPay account."
      </h6>
      <h6>
        *Minimum balance of $110 is needed in your LKPay account for us to
        process your LKPay cards ($40 delivery charges + 500 HKD initial top
        up).
      </h6>
      <h6>
        *The recipient is responsible for any taxes or customs charges that may
        incur upon receipt of the card shipment.
      </h6>
      <header>
        <article>
          <img src="" alt="" />
          <h3>Passport</h3>
        </article>
        <article>
          <img src="" alt="" />
          <h3>Proof of Legal Existence</h3>
        </article>
        <article>
          <img src="" alt="" />
          <h3>Proof of Address</h3>
        </article>
      </header>

      <ul>
        <li>
          <img src={person} alt="" className="person" />
          <h5>LKPay Customer</h5>
          <h4>APPLICATION</h4>
        </li>
        <li>
          <span className="arrow" />
        </li>
        <li>
          <img src="" alt="" className="bank" />
          <h5>LKPAY</h5>
          <h4>Review</h4>
        </li>
        <li className="hide-mobile">
          <span className="arrow" />
        </li>
        <li>
          <img src="" alt="" className="bank" />
          <h5>Card Company</h5>
          <h4>Review</h4>
        </li>
        <li>
          <span className="arrow" />
        </li>
        <li>
          <img src={person} alt="" className="person" />
          <h5>LKPay Customer</h5>
          <h4>READY TO USE</h4>
        </li>
      </ul>
      <footer>
        <span className="line"></span>
        <h4>2~3 Weeks</h4>
        <p>
          It typically takes between 2-3 weeks from LKPay card application to
          receiving your card.
        </p>
      </footer>
    </S.Wrapper>
  );
}

export default Apply;
