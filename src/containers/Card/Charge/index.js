import React from 'react';
import * as S from './styles';

function Charge() {
  return (
    <S.Wrapper>
      <h2>How do i charge LKPay Card?</h2>
      <h6>Once your LKPay card is delivered, you need to active.</h6>
      <S.StepsDesktop>
        <li>
          <h5>
            STEP 1.
            <br /> CHARGE
          </h5>
          <p>
            “MY PAGE - STIC CARD -TRANSFER FUNDS” APPLY FOR TRANSFER (MINIMUM
            HKD 500)
          </p>
          <small>
            APPROVAL FOR CHARGING <br />
            (1 BUSINESS DAY)
          </small>
        </li>
        <li>
          <h5>
            STEP 2.
            <br /> LOGIN
          </h5>
          <p>
            WHEN SETTING UP PASSWORD FOR EXISTING PIN, USE THE PIN ON THE BACK
            OF THE CARD
          </p>
        </li>
        <li>
          <h5>
            STEP 3.
            <br /> CARD ACTIVATION
          </h5>
          <p>1. “CARD ACTIVATION“ CLICK</p>
          <p>2. SET UP PASSWORD AND "ACTIVATE"</p>
        </li>
        <li>
          <span className="arrow" />
          <span className="circle">
            <h5>
              STEP 4.
              <br /> Use
            </h5>
          </span>
        </li>
      </S.StepsDesktop>
      <S.StepsMobile>
        <li>
          <h5>STEP 1. CHARGE</h5>
          <p>
            “MY PAGE - STIC CARD -TRANSFER FUNDS” APPLY FOR TRANSFER (MINIMUM
            HKD 500)
          </p>
          <small>APPROVAL FOR CHARGING (1 BUSINESS DAY)</small>
        </li>
        <li>
          <h5>STEP 2. LOGIN</h5>
          <p>
            WHEN SETTING UP PASSWORD FOR EXISTING PIN, USE THE PIN ON THE BACK
            OF THE CARD
          </p>
        </li>
        <li>
          <h5>STEP 3. CARD ACTIVATION</h5>
          <p>1. “CARD ACTIVATION“ CLICK</p>
          <p>2. SET UP PASSWORD AND "ACTIVATE"</p>
        </li>
        <li>
          <h5>STEP 4. Use</h5>
          <p>
            You can use LKPay Card as soon as money charging is approved.
            <br />
            In the LKPay card homepage, you can check your balance, transaction,
            password charges, etc.
          </p>
        </li>
      </S.StepsMobile>
      <h6>
        You can use LKPay Card as soon as money charging is approved. In the
        LKPay card homepage, you can check your balance, transaction, password
        charges, etc.
      </h6>
    </S.Wrapper>
  );
}

export default Charge;
