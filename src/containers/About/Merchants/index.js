import React from 'react';
import imgMerchantGuys from 'assets/img-merchant-guys.svg';
import imgMerchantPage from 'assets/img-merchant-page.svg';

import * as S from './styles';

function Merchants() {
  return (
    <S.Wrapper>
      <h2>Who are LKPay Merchants?</h2>
      <h6>
        LKPay partnered with many merchant accounts in diverse industries
        (online shops, online games companies, FX margin trading brokers, etc.).
        You can use LKPay e-wallet to make instant online purchases as well as
        our real time statements for refunds. It is the ideal payment solution
        for merchants with multinational client base. Our fast and convenient
        transactions made many loyal clients satisfied with our commitment to
        process deposit / withdrawal in less than a minute.
      </h6>
      <h5>“Process deposit / withdrawal in less than a minute”</h5>
      <ul>
        <li>
          <img src={imgMerchantGuys} alt="" />
          <p className="label">LKPay Users</p>
        </li>
        <li>
          <p className="label2">Pay/Transfer funds within a minute</p>
          <span className="arrow" />
          <span className="arrow2" />
          <p className="label2">LKPay Merchant service providers</p>
        </li>
        <li>
          <img src={imgMerchantPage} alt="" />
          <p className="label">LKPay Merchant service providers</p>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Merchants;
