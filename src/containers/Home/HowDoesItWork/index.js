import React from 'react';

import step1 from 'assets/icon-step-1.svg';
import step2 from 'assets/icon-step-2.svg';
import step3 from 'assets/icon-step-3.svg';

import * as S from './styles';

function HowDoesItWork() {
  return (
    <S.Wrapper>
      <h2>How does it work?</h2>
      <ul>
        <li>
          <img src={step1} alt="" />
          <span className="number">1</span>
          <h4>Sign up for your free account</h4>
          <p>
            It takes just a few minutes to create a LKPay wallet and bring all
            your payment details together in one place.
          </p>
        </li>
        <li>
          <img src={step2} alt="" />
          <span className="number">2</span>
          <h4>Upload Funds</h4>
          <p>
            Stay in control with simple, secure and quick payment methods
            including your account balance.
          </p>
        </li>
        <li>
          <img src={step3} alt="" />
          <span className="number">3</span>
          <h4>Send & Spend with LKPay</h4>
          <p>Move funds – from LKpay to your bank account instantly</p>
        </li>
      </ul>
      <button>OPEN FREE ACCOUNT</button>
    </S.Wrapper>
  );
}

export default HowDoesItWork;
