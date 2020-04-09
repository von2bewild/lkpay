import React from 'react';
import person from 'assets/img-person-jp.png';

import * as S from './styles';

function Easy() {
  return (
    <S.Wrapper>
      <h2>Easy LKPay Card Charge - Up</h2>
      <h6>
        LKPay Card are chargeable with your money in LKPay account. You can
        charge your LKPay cards online in my page and use it within one business
        day.
      </h6>
      <ul>
        <li>
          <img src={person} alt="" className="person" />
          <h5>LKPay Customer</h5>
          <h4>Charge</h4>
        </li>
        <li>
          <span className="arrow" />
        </li>
        <li>
          <img src="" alt="" className="bank" />
          <h5>LKPay / Card Company</h5>
          <h4>APPROVAL</h4>
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
        <h4>1 BUSINESS DAY</h4>
      </footer>
    </S.Wrapper>
  );
}

export default Easy;
