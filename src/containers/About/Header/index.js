import React from 'react';
import money from 'assets/icon-money.svg';
import personUk from 'assets/img-person-uk.png';
import personJp from 'assets/img-person-jp.png';

import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <h1>What's LKPay</h1>
      <h5>
        LKPAY is a global E-wallet service without the boundaries of locations.
        You can send/receive money via LKPAY account within one minute
        regardless of where the sender/receiver is.
      </h5>
      <ul>
        <li>
          <img src={personUk} alt="" className="person-img" />
          <p className="label">Steve in England</p>
        </li>
        <li>
          <img src={money} alt="" className="money-icon" />
          <span className="arrow" />
          <p className="label2">
            Send money via LKPAY It takes just one minute
          </p>
        </li>
        <li>
          <img src={personJp} alt="" className="person-img" />
          <p className="label">Hiroshige in Japan</p>
        </li>
      </ul>
      <h6>
        Example :<br />
        Steve from England wants to send money to Hiroshige in Japan. Without
        LKPAY, Steve’s only option is to send money via international transfer.
        For these types of services, traditional banks charge high transactional
        fees and takes at least 2-3days to clear. If Steve and Hiroshige both
        had LKPAY accounts, the entire transaction takes just under a minute
        with LKPAY E-Money technology.
      </h6>
      <h4>
        In other words, LKPAY makes your international transfers to your friends
        and family abroad faster and easier with the minimum fees.{' '}
      </h4>
      <section>
        <S.Grid>
          <header>
            <h5>Add Money to Steve’s LKPAY account</h5>
            <p>“Ways to add money to LKPay Account”</p>
          </header>
          <article>
            <h6>
              How would Steve from England transfer money to Hiroshige in Japan?
            </h6>
            <p>
              1. Add (deposit) money to his LKPAY account <br />
              - Credit Card (Visa, Master) <br />
              - Local Bank Wire <br />- Cryptocurrencies
            </p>
            <p>2. Transfer money to Hiroshige’s LKPAY Account</p>
          </article>
        </S.Grid>
        <S.Grid>
          <header>
            <h5>Use Money in Hiroshige’s LKPAY Account</h5>
            <p>“Ways to use money received in LKPay ”</p>
          </header>
          <article>
            <h6>
              How would Hiroshige in Japan use (withdraw) money from her LKPAY
              account??
            </h6>
            <p>
              1. Withdraw to her local bank in Japan from her LKPAY account(not
              an international transfer: local transfer linked to LKPAY
              partner banks)
            </p>
            <p>
              2. Use LKPay Card. LKPay Card are accepted in all over world for any
              offline stores. Withdraw using any ATM machines that accept
              Unionpay.
            </p>
            <p>
              3. Transfer money to LKPAY enabled merchant accounts instantly
              online.
            </p>
            <p>
              4. Transfer money to LKPAY enabled friend accounts instantly
              online.
            </p>
          </article>
        </S.Grid>
      </section>
    </S.Wrapper>
  );
}

export default Header;
