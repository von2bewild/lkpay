import React from 'react';
import * as S from './styles';

function Advantages() {
  return (
    <S.Wrapper>
      <h2>Can you explain the advantages of using LKPay local ?</h2>
      <h6>
        Unless it’s a local bank transfer, sending money takes 2-3 days
        categorised by the withdrawing bank as international transfers.
      </h6>

      <ul>
        <li>
          <img src="" alt="" />
          <p className="label">Your local bank account</p>
        </li>
        <li>
          <p className="label2">Local payout request</p>
          <span className="arrow" />
          <span className="arrow2" />
          <p className="label2">Bank to bank transfer</p>
        </li>
        <li>
          <img src="" alt="" />
          <p className="label">LKPay enabled local bank</p>
        </li>
      </ul>

      <h5>
        LKPay has pioneered the local payout using local banks. Local payout
        service is currently available in over 7 countries worldwide. However,
        we’re actively expanding to many more markets to keep up with the
        demands. The countries (ex: Philippines, japan, south Korea, Indonesia
        etc.) are where you can use LKPay local payout services today.
      </h5>

      <S.TableWrapper>
        <h3>Local Money Out Countries List</h3>
        <table>
          <thead>
            <tr>
              <td>Country</td>
              <td>Money-out method</td>
              <td>Currency</td>
              <td>Fees</td>
              <td>Limit Per Transaction</td>
              <td>Period</td>
            </tr>
          </thead>
        </table>
      </S.TableWrapper>
    </S.Wrapper>
  );
}

export default Advantages;
