import React from 'react';

import jp from 'assets/flags/jp.svg';
import kr from 'assets/flags/kr.svg';
import cn from 'assets/flags/cn.svg';
import bankLoc from 'assets/img-bank-loc.svg';
import bankLogo from 'assets/img-bank-logo.svg';
import person from 'assets/img-person-jp.png';

import * as S from './styles';

function Deposits() {
  return (
    <S.Wrapper>
      <h2>Can I use Local Bank Wire for making deposits to LKPay account?</h2>
      <h6>
        You can now take advantage of LKPay’s fast and reliable local bank wire
        services in many of the countries listed below.
      </h6>
      <header>
        <ul>
          <li>
            <img src={jp} alt="" />
            <span className="label">Japan</span>
          </li>
          <li>
            <img src={kr} alt="" />
            <span className="label">South Korea</span>
          </li>
          <li>
            <img src={cn} alt="" />
            <span className="label">China</span>
          </li>
        </ul>
      </header>
      <footer>
        <ul>
          <li>
            <img src={bankLoc} alt="" />
            <h5>Ms. Hiroshige’s Japanese Bank Account</h5>
          </li>
          <li>
            <span className="arrow" />
            <h4>Local Bank Wire (Money In)</h4>
            <h6>
              0.5 day processing time,
              <br />
              Low transfer fees<strong>(1~2%*)</strong>
            </h6>
          </li>
          <li>
            <img src={bankLogo} alt="" />
            <h5>LKPay’s Japanese Partner Bank Account</h5>
          </li>
        </ul>
      </footer>
      <h6>* Fees are different for each country please check the table.</h6>

      <article>
        <img src={person} alt="" />
        <h6>
          Example:
          <br />
          Ms. Hiroshige resides in Japan and has a Japanese bank account. As a
          LKPay user in the approved country, she can deposit funds to LKPay
          account using our partner bank in the Japan.
        </h6>
      </article>
    </S.Wrapper>
  );
}

export default Deposits;
