import React from 'react';

import img1 from 'assets/img-jp-money.png';
import img2 from 'assets/img-uk-atm.png';
import img3 from 'assets/img-hk-food.png';
import img4 from 'assets/img-us-shopper.png';
import person from 'assets/img-person-jp.png';
import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <h1>ANYTIME ANYWHERE LKPAY CARD</h1>
      <h5>
        LKPay Card allows you to use your money in LKPAY E-wallet anywhere in
        the world. If you are a LKPay user, you can apply online with just a few
        steps and start using LKPay card by easy transfers from your LKPay
        account.
      </h5>
      <ul>
        <li>
          <img src={img1} alt="" />
          <p>200,000 JPY ATM withdrawal from a bankin Japan</p>
        </li>
        <li>
          <img src={img2} alt="" />
          <p>ATM withdrawalfrom 500 GBP in London Heathrow Airport</p>
        </li>
        <li className="full">
          <img src={person} alt="" />
          <p>Hiroshige</p>
        </li>
        <li>
          <img src={img3} alt="" />
          <p>Purchase 1,000 HKD in a Restaurant in Hong Kong</p>
        </li>
        <li>
          <img src={img4} alt="" />
          <p>Purchase $188for a pair of shoes in a mall in the US</p>
        </li>
      </ul>
      <h5>
        LKPay partnered with Unionpay’s Prepaid card services. It allows you
        to use your LKPay card in all over the world for ATM withdrawlas, offline
        purchases that accept Unionpay.
        <br />
        You can use up to HKD15,000 ($2,000)a day for offline purchases and
        HKD25,000($5,000) for ATM withdrawals (monthly limit : HKD75,000($9,500)
        / for purchases and withdrawals combined)
      </h5>
    </S.Wrapper>
  );
}

export default Header;
