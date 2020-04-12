import React from 'react';
import ph from 'assets/flags/ph.svg';
import jp from 'assets/flags/jp.svg';
import kr from 'assets/flags/kr.svg';
import id from 'assets/flags/id.svg';
import my from 'assets/flags/my.svg';
import sg from 'assets/flags/sg.svg';
import cn from 'assets/flags/cn.svg';
import au from 'assets/flags/au.svg';
import ca from 'assets/flags/ca.svg';

import * as S from './styles';

function Countries() {
  return (
    <S.Wrapper>
      <h2>
        In which countries can I use Local Bank Wire Services for withdrawals?
      </h2>
      <h6>
        Local Bank Wire Services are only available at LKPAY for the first time
        in the industry with over 10 countries enabled worldwide. If you have a
        bank account in one of these countries, you can receive funds much
        faster than international bank wires.
      </h6>
      <h6>
        You can now take advantage of LKPay's fast and reliable local bank wire
        services in many of the countries listed below.
      </h6>
      <ul>
        <li>
          <img src={ph} alt="" />
          <span className="label">Philippines</span>
        </li>
        <li>
          <img src={jp} alt="" />
          <span className="label">Japan</span>
        </li>
        <li>
          <img src={kr} alt="" />
          <span className="label">South Korea</span>
        </li>
        <li>
          <img src={id} alt="" />
          <span className="label">Indonesia</span>
        </li>
        <li>
          <img src={my} alt="" />
          <span className="label">Malaysia</span>
        </li>
        <li>
          <img src={sg} alt="" />
          <span className="label">Singapore</span>
        </li>
        <li>
          <img src={cn} alt="" />
          <span className="label">China</span>
        </li>
        <li>
          <img src={au} alt="" />
          <span className="label">Australia</span>
        </li>
        <li>
          <img src={ca} alt="" />
          <span className="label">Canada</span>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Countries;
