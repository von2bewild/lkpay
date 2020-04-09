import React from 'react';
import passport from 'assets/img-passport.png';
import request from 'assets/img-request-card.png';
import status from 'assets/img-card-status.png';

import * as S from './styles';

function Reminders() {
  return (
    <S.Wrapper>
      <h2>Important Reminders</h2>
      <h6>
        We will contact you if there are additional delivery charges incurred
        due to your address. Please email us lkpay_card@lkpay.com for further
        queries.
      </h6>
      <ul>
        <li>
          <figure>
            <img src={passport} alt="" />
          </figure>
          <article>
            <h3>1. SUBMIT PASSPORT COPY</h3>
            <p>
              Scan the entire page with the signature line and photo. Your
              electronic signature for LKPay account should look like the one on
              your passport.
            </p>
          </article>
        </li>
        <li>
          <figure>
            <img src={request} alt="" />
          </figure>
          <article>
            <h3>2. REQUEST A LKPay CARD</h3>
            <p>
              If more than 18 characters, just type your first initial.
              ex)AAAAAAAAAABBBBBBBBBB BBB —> A BBBBBBBBBBBBB
            </p>
            <p>Your adress should match your proof of address(POA)document.</p>
            <p>
              Your phone number should be put in correctly for a prompt
              delivery.
            </p>
          </article>
        </li>
        <li className="full">
          <figure>
            <img src={status} alt="" />
          </figure>
          <article>
            <h3>3. CHECK YOUR CARD STATUS</h3>
            <p>
              You can check your application status in Mypage-LKPaypay
              card-Status during the 2-3 week process. Once status changes to
              “shipped”, you can track the delivery online.
            </p>
          </article>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Reminders;
