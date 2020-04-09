import React from 'react';
import { Table } from 'antd';

import * as S from './styles';

const COLUMN_LIMITS = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    width: '50%',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    width: '50%',
  },
];

const DATA_LIMITS = [
  {
    key: '1',
    action: 'Daily Point of Sale Transactions',
    amount: 'HKD 15,000 (US $ 2,000)',
  },
  {
    key: '2',
    action: 'POS (Monthly point of Sale Transactions)',
    amount: 'HKD 75,000 (US $ 9,500)',
  },
  {
    key: '3',
    action: 'Daily ATM Withdrawals',
    amount: 'HKD 40,000 (US $ 5,000)',
  },
  {
    key: '4',
    action: 'Monthly ATM withdrawals',
    amount: 'HKD 75,000 (US $ 9,500)',
  },
];

const COLUMN_FEES = [
  {
    title: 'Transaction type',
    dataIndex: 'type',
    key: 'type',
    width: '50%',
  },
  {
    title: 'Transaction fee',
    dataIndex: 'fee',
    key: 'fee',
    width: '50%',
  },
];

const DATA_FEES = [
  {
    key: '1',
    type: 'Load Handling Fee',
    fee: '1.3%',
  },
  {
    key: '2',
    type: 'Card Replacement handling Fee',
    fee: 'HKD 130',
  },
  {
    key: '3',
    type: 'Minimum load amount',
    fee: 'HKD 500',
  },
  {
    key: '4',
    type: 'Handling Fee of overseas Purchase',
    fee: '*Free',
  },
  {
    key: '5',
    type: 'ATM withdrawal Fee',
    fee:
      'Minimum 20 HKD or 1.5% of withdrawal amount excluding overseas purchase fee',
  },
  {
    key: '6',
    type: 'Account Management Fee',
    fee: 'HKD 10 / month from 13th month of issuance of STIC card',
  },
  {
    key: '7',
    type: 'Balance Enquiry',
    fee: 'Online:Free | CRS:Free | ATM: HKD 5',
  },
  {
    key: '8',
    type: 'Issuance Fee',
    fee: '**Free (Only delivery charges will be applied)',
  },
  {
    key: '9',
    type: 'Card Renewal Handling Fee',
    fee: 'HKD 130',
  },
];

const COLUMN_BANNED_COUNTRIES = [
  {
    title: 'Burma(Myanmar)',
    dataIndex: 'myanmar',
    key: 'myanmar',
    width: '25%',
  },
  {
    title: "Cote d'lvoire(Ivory Coast)",
    dataIndex: 'ivory',
    key: 'ivory',
    width: '25%',
  },
  {
    title: 'Democratic Republic of the Congo',
    dataIndex: 'congo',
    key: 'congo',
    width: '25%',
  },
  {
    title: 'North Korea',
    dataIndex: 'korea',
    key: 'korea',
    width: '25%',
  },
];

const DATA_BANNED_COUNTRIES = [
  {
    key: '1',
    myanmar: 'Somalia',
    ivory: 'Somalia',
    congo: 'Cuba',
    korea: 'Eritrea',
  },
  {
    key: '2',
    myanmar: 'Republic of Guinea',
    ivory: 'Syria',
    congo: 'Zimbabwe',
    korea: 'Iran',
  },
  {
    key: '3',
    myanmar: 'Iraq',
    ivory: 'Liberia',
    congo: '',
    korea: '',
  },
];

function FeesLimits() {
  return (
    <S.Wrapper>
      <h2>LKPay Card Fees and Limits</h2>
      <section>
        <h4>Daily and Monthly Limits</h4>
        <Table
          dataSource={DATA_LIMITS}
          columns={COLUMN_LIMITS}
          pagination={false}
        />
      </section>
      <section>
        <h4>Fees</h4>
        <Table
          dataSource={DATA_FEES}
          columns={COLUMN_FEES}
          pagination={false}
        />
      </section>
      <article>
        <h6>* Currency exchange rate will be determine by Card Issuer.</h6>
        <h6>
          * STIC Card is available to use for 2 years after initial activation,
          and you must renew the card after expiration. For renewal card, please
          contact to lkpay_card@lkpay.com
        </h6>
        <h6>
          * 10 HKD/mo management fees will be assessed for STIC card holders if
          the account is inactive for over 6 months.
        </h6>
        <h6>
          ** The recipient is responsible for any taxes or customs charges that
          may incur upon receipt of the card shipment.
        </h6>
      </article>
      <h2>Banned Countries</h2>
      <h5>
        Finally a list of all banned countries. If you are located in one of
        them (or just travel within those countries) you are not allowed to use
        LKPay at all
      </h5>
      <section>
        <aside>
          <Table
            dataSource={DATA_BANNED_COUNTRIES}
            columns={COLUMN_BANNED_COUNTRIES}
            pagination={false}
          />
        </aside>
      </section>
    </S.Wrapper>
  );
}

export default FeesLimits;
