import React from 'react';

import bankLoc from 'assets/img-bank-loc.svg';
import bankLogo from 'assets/img-bank-logo.svg';
import person from 'assets/img-person-jp.png';

import * as S from './styles';

function Benefits() {
  return (
    <S.Wrapper>
      <h2>What are the benefits of using Local Bank Wire?</h2>
      <h6>
        Most importantly, Local Bank Wire service saves time and money. This is
        made possible by receiving money directly from LKPay partnered local
        bank, unlike international bank wires. It also makes it easier for
        anyone to send money by a few clicks rather than the traditional way of
        sending money internationally.
      </h6>
      <ul>
        <li>
          <img src={bankLogo} alt="" />
          <h5>LKPay’s Japanese Partner Bank Account</h5>
        </li>
        <li className="arrow-item">
          <span className="arrow" />
          <h4>Local Bank Wire</h4>
          <h6>
            Day processing time,
            <br />
            Low transfer fees <strong>(1~2%*)</strong>
          </h6>
        </li>
        <li>
          <img src={bankLoc} alt="" />
          <h5>Ms. Hiroshige’s Japanese Bank Account</h5>
        </li>
      </ul>
      <h6>* Fees are different for each country please check the table.</h6>

      <article>
        <img src={person} alt="" />
        <h6>
          Example:
          <br />
          Ms. Hiroshige resides in Japan and has a Japanese bank account. As a
          LKPay user, she was reluctant to withdraw funds from international
          bank wires due to the high costs and longer time for the transfers.
          Now, with LKPay’s new “Local Bank Wire” services in place, Ms.
          Hiroshige does not have to hesitate when withdrawing funds. All she
          has to do is to add her Japanese bank account information and the
          funds will be available to withdraw from her account within the same
          day.
        </h6>
      </article>
      <h3>Is it legal to send money to my local bank account?</h3>
      <h6>
        Yes. Unlike traditional transfers using bank SWIFT Code network, LKPay
        introduced local bank wire using block chain methodology for
        transferring funds. In other words, We use technologically innovative
        way to move funds: commonly referred as FinTech. Block chain technology
        is being adopted in many of our banking partners and it is becoming more
        and more common in the financial services industry. These banking
        partners are regulated in their own jurisdiction approved by the
        regulators.
      </h6>
    </S.Wrapper>
  );
}

export default Benefits;
