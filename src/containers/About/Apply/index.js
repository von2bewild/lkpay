import React from 'react';
import check from 'assets/icon-check.svg';

import * as S from './styles';

function Withdraw() {
  return (
    <S.Wrapper>
      <h2>How do I apply for a LKPay account?</h2>
      <h6>
        It takes less than 3 minutes of your time to have your own LKPay
        account.
        <br /> You can start using your LKPay account without the approval
        process:
        <br /> combined transaction value up to 150 EUR
        (deposit+withdrawal+transfer).
      </h6>
      <h6>
        If you need to do more transactions than 150 EUR, you will need to be
        approved by our onboarding team as we need to abide by the AML rules. To
        do this, we will need to see two forms of documents as below.
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
      <article>
        <img src={check} alt="" className="check" />
        <p>
          <strong>Proof of Legal Identity</strong> (Government issued ID,
          Drivers License, Passport, etc.)
        </p>
      </article>
      <article>
        <img src={check} alt="" className="check" />
        <p>
          <strong>Proof of Address</strong> (Government issued residential
          registration, reoccurring statements to the address, etc.)
        </p>
      </article>
      <h5>
        You can do all of these with your smart phone by taking pictures of the
        documents and uploading them on our mobile friendly website.
      </h5>
    </S.Wrapper>
  );
}

export default Withdraw;
