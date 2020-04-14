import React from 'react';

import accountInt from 'assets/img-account-int.svg';
import accountLoc from 'assets/img-account-loc.svg';
import bankInt from 'assets/img-bank-int.svg';
import bankLoc from 'assets/img-bank-loc.svg';
import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <h1>WHAT IS LOCAL BANK WIRE?</h1>
      <h5>How is it different from International Bank Wire?</h5>
      <h6>
        Local bank wire option allows you to receive funds from LKPAY partner
        bank in your country to your bank account in your own currency. By using
        local banking system in your country, it eliminates the intermediary
        bank costing 2-3 days as well as higher transfer fees incurred from
        international bank wire.
      </h6>
      <header>
        <ul>
          <li>
            <img src={accountInt} alt="" className="account" />
          </li>
          <li className="arrow-item">
            <span className="arrow" />
          </li>
          <li>
            <img src={bankInt} alt="" className="bank" />
          </li>
          <li className="hide-mobile">
            <span className="arrow" />
          </li>
          <li>
            <img src={bankLoc} alt="" className="bank" />
          </li>
          <li className="arrow-item">
            <span className="arrow" />
          </li>
          <li>
            <img src={accountLoc} alt="" className="account" />
          </li>
        </ul>
        <h3>International Bank Wire</h3>
        <h6>
          2~3 day processing time,
          <br />
          High transfer fees <strong>(5%)</strong>
        </h6>
      </header>
      <footer>
        <ul>
          <li>
            <img src={bankLoc} alt="" className="account" />
            <h6>LKPay Partner Local Bank</h6>
          </li>
          <li className="arrow-item">
            <span className="arrow" />
          </li>
          <li>
            <img src={accountLoc} alt="" className="account" />
            <h6>Customer’s Local Bank Account</h6>
          </li>
        </ul>
        <h3>Local Bank Wire</h3>
        <h6>
          1 day processing time,
          <br />
          Low transfer fees <strong>(1~2%*)</strong>
        </h6>
      </footer>
      <small>
        * Processing times can vary depending on the country and the transaction
        time of the day.
      </small>
      <small>
        * Fees are different for each country please check the table.
      </small>
    </S.Wrapper>
  );
}

export default Header;
