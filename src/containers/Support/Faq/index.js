import React from 'react';
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';

import * as S from './styles';

const { Panel } = Collapse;

function Faq() {
  return (
    <S.Wrapper>
      <ul>
        <li>
          <h3>Registration and login</h3>
          <Collapse>
            <Panel header="How do I register in the system?" key="1">
              <p>
                For new accounts application, click on “Sign Up” button on the
                top right corner and follow the process from the link. Our
                account opening team will normally process your application
                within one business day.
              </p>
            </Panel>
            <Panel
              header="Why didn't I receive my account activation e-mail?"
              key="2"
            >
              <p>
                If you haven’t received an activation email from us, there can
                be two possibilities
                <br />
                1) Wrong email address was entered during the application
                <br />
                2) Your email blocks automatically generated messages In case
                you cannot retrieve our emails in your spam folder, please
                contact us at: account@LKPAY.com and we can regenerate the
                message for you.
              </p>
            </Panel>
            <Panel
              header="What should I do if the system does not accept the password or the password is lost?"
              key="3"
            >
              <p>
                You can head to the <Link to="/">forgot password page</Link> and
                follow the process.
              </p>
            </Panel>
          </Collapse>
        </li>
        <li>
          <h3>My account</h3>
          <Collapse>
            <Panel
              header="What is the purpose of the My account section?"
              key="1"
            >
              <p>
                “My Account” is the first page you see upon logging into the
                Member area. Here you can find your recent transactions history,
                information about your accounts, as well as details about the
                security tools used in your account. You can also create an
                additional account here.
              </p>
            </Panel>
            <Panel header="What do I need to receive money?  " key="2">
              <p>
                To transfer funds, you need to use your email address, which is
                your login ID.
              </p>
            </Panel>
            <Panel header="Can I cancel my top up / payment to LKPAY?" key="3">
              <p>
                No, you cannot. All payments made within the system are final
                and irreversible.
              </p>
            </Panel>
          </Collapse>
        </li>
        <li>
          <h3>Deposit</h3>
          <Collapse>
            <Panel header="How can I make a deposit by a bank wire?" key="1">
              <p>
                First of all, you need to verify your account. Upon
                verification, you should go to the “Money-in” section and choose
                the "Bank Wire" option.
                <br />
                Once the page opens, you can see the bank information to send
                your funds.
              </p>
            </Panel>
            <Panel
              header="What is the minimum amount for a bank wire deposit?"
              key="2"
            >
              <p>
                The minimum amount is currently 100 USD or its equivalent in
                other currency. This number may change with no prior notice.
              </p>
            </Panel>
            <Panel
              header="How long does it take to transfer money through a bank?"
              key="3"
            >
              <p>
                Money transfers via bank wire usually take from 3 to 5 business
                days. The money is credited to your account immediately once we
                receive the transfer from your bank.
              </p>
            </Panel>
            <Panel
              header="Why is the amount credited slightly smaller than the amount sent?"
              key="4"
            >
              <p>
                For bank wires, 1% transfer fee is applied. However, depending
                on the bank you use (beneficiary or intermediary) the actual
                deposit amount can be different.
              </p>
            </Panel>
            <Panel
              header="What should I do if funds are not credited within 5 working days after the bank wire transfer was made?"
              key="5"
            >
              <p>
                Sometimes transfers take longer than 5 days. Please contact the
                bank to process your order and notify of the delay.
                <br />
                Check whether the bank’s name matches the one you specified in
                your transfer order.
              </p>
            </Panel>
            <Panel
              header="How and where can I receive bank details to make a transfer?"
              key="6"
            >
              <p>You can see the information in Money in menu.</p>
            </Panel>
          </Collapse>
        </li>
        <li>
          <h3>Withdrawal via bank transfer</h3>
          <Collapse>
            <Panel
              header="What do I need to do to money out into my bank account?"
              key="1"
            >
              <p>
                To do money out into a bank account you need to register your
                bank account information in “Bank Account” tab first, Once all
                the necessary information are filled in correctly, you can go to
                Money out tab and request money out via bank wire. Your money
                will be transferred to your bank account within 2~5 business
                days.
              </p>
            </Panel>
            <Panel
              header="How long does it take to money out via bank transfer?"
              key="2"
            >
              <p>
                We process the withdrawals within one business day. However,
                bank transfer usually takes 3-5 business days.
              </p>
            </Panel>
            <Panel
              header="What is the minimal money out amount via bank transfer?"
              key="3"
            >
              <p>
                For bank withdrawals, the minimum amount is 100 USD. For other
                withdrawal methods, the minimum amount is 10 USD.
              </p>
            </Panel>
            <Panel
              header="What is the maximum money out amount via bank transfer?"
              key="4"
            >
              <p>
                There is no limit on the amounts for money out. But when you
                transfer very large amounts your bank might request the account
                status to be one of a corporate client.
              </p>
            </Panel>
            <Panel
              header="What countries can a bank transfer be made to?"
              key="5"
            >
              <p>
                STICPAY offers its services with almost countries except of
                certain jurisdictions such as Cuba, Sudan, Syria and North Korea
                and listed / relevant parties of Consolidated United Nations
                Security Council Sanctions Lists.
              </p>
            </Panel>
          </Collapse>
        </li>
        <li>
          <h3>Withdrawal from STIC Card</h3>
          <Collapse>
            <Panel header="What is STIC Card?" key="1">
              <p>
                STIC Card is accepted in all over world and can be used in
                offline merchants. Also cash withdrawal is available for any ATM
                machine which supports Uniopay. Clients can get STIC card as
                free-of-charge from STICPAY and transfer of fund from STICPAY
                account is also convenient with minimum fee.
              </p>
            </Panel>
          </Collapse>
        </li>
        <li>
          <h3>Questions about fees, commissions and payouts</h3>
          <Collapse>
            <Panel
              header="What is the fee for a funds money in via bank transfer?"
              key="1"
            >
              <p>
                For bank deposits, 5% transfer fee is applied. You can check the
                fee schedule here:{' '}
                <Link to="/fees">http://www.sticpay.com/fees</Link>
              </p>
            </Panel>
            <Panel
              header="What is the fee for a funds transfer within the system?"
              key="2"
            >
              <p>
                We charge 1%(up to 35 USD) transaction fees for member to member
                transfers. However, for member to merchant transfers, 2.5% +
                $0.3 transaction fees are applied.
              </p>
            </Panel>
          </Collapse>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Faq;
