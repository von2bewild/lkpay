import React from 'react';
import check from 'assets/icon-check.svg';

import * as S from './styles';

function Withdraw() {
  return (
    <S.Wrapper>
      <h2>How do merchants withdraw settled funds by clients?</h2>
      <h6>
        Merchants can use LKPay e-wallet for services online to check real time
        transactions for customers globally. To withdraw funds settled by the
        customers, merchants can use local bank wire, international bank wire,
        or LKPay Card.
      </h6>
      <ul>
        <li>
          <img src="" alt="" />
          <p>Local Bank</p>
        </li>
        <li>
          <img src="" alt="" />
          <p>International Bank</p>
        </li>
      </ul>
      <footer>
        <h4>“I want to withdraw money from my merchant account.”</h4>
        <aside>
          <article>
            <img src={check} alt="" className="check" />
            <p>Local Bank Payout</p>
          </article>
          <article>
            <img src={check} alt="" className="check" />
            <p>International Bank Transfer</p>
          </article>
        </aside>
      </footer>
    </S.Wrapper>
  );
}

export default Withdraw;
