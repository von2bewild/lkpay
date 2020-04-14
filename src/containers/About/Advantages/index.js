import React from 'react';
import { Table } from 'antd';

import au from 'assets/flags/au.svg';
import ca from 'assets/flags/ca.svg';
import cn from 'assets/flags/cn.svg';
import id from 'assets/flags/id.svg';
import jp from 'assets/flags/jp.svg';
import my from 'assets/flags/my.svg';
import ph from 'assets/flags/ph.svg';
import sg from 'assets/flags/sg.svg';

import imgBankLoc from 'assets/img-bank-loc.svg';
import imgBankLogo from 'assets/img-bank-logo.svg';

import * as S from './styles';

const DATA_SOURCE = [
  {
    key: '1',
    country: 'Philippines',
    method: 'Local Bank Wire',
    currency: 'PHP',
    fees: 'PHP 120.00 + 1%',
    limitMax: 'MAX PHP 100,000.00',
    limitMin: 'MIN PHP 1,500.00',
    period: '1 to 2 business day',
    flag: ph,
  },
  {
    key: '2',
    country: 'Japan',
    method: 'Local Bank Wire',
    currency: 'JPY',
    fees: '¥ 800 + 1.5%',
    limitMax: 'MAX ¥ 990,000',
    limitMin: 'MIN ¥ 3,000',
    period: '1 to 2 business day',
    flag: jp,
  },
  {
    key: '3',
    country: 'Indonesia',
    method: 'Local Bank Wire',
    currency: 'IDR',
    fees: 'IDR 20,000 + 1%',
    limitMax: 'MAX IDR 25,000,000',
    limitMin: 'MIN IDR 250,000',
    period: '1 to 2 business day',
    flag: id,
  },
  {
    key: '4',
    country: 'Malaysia',
    method: 'Local Bank Wire',
    currency: 'MYR',
    fees: 'MYR 20.00 + 1%',
    limitMax: 'MAX MYR 20,000.00',
    limitMin: 'MIN MYR 200.00',
    period: '1 to 2 business day',
    flag: my,
  },
  {
    key: '5',
    country: 'Singapore',
    method: 'Local Bank Wire',
    currency: 'SGD',
    fees: 'SGD 3.00 + 1%',
    limitMax: 'MAX SGD 5,000.00',
    limitMin: 'MIN SGD 40.00',
    period: '1 to 2 business day',
    flag: sg,
  },
  {
    key: '6',
    country: 'China',
    method: 'Local Bank Wire',
    currency: 'CNY',
    fees: '2%',
    limitMax: 'MAX CN¥ 10,000.00',
    limitMin: 'MIN CN¥ 100.00',
    period: '1 to 2 business day',
    flag: cn,
  },
  {
    key: '7',
    country: 'Australia',
    method: 'Local Bank Wire',
    currency: 'AUD',
    fees: 'AU$ 5.00 + 1.5%',
    limitMax: 'MAX AU$ 15,000.00',
    limitMin: 'MIN AU$ 70.00',
    period: '1 to 2 business day',
    flag: au,
  },
  {
    key: '8',
    country: 'Canada',
    method: 'Local Bank Wire',
    currency: 'CAD',
    fees: 'CA$ 4.50 + 1.5%',
    limitMax: 'MAX CA$ 20,000.00',
    limitMin: 'MIN CA$ 70.00',
    period: '1 to 2 business day',
    flag: ca,
  },
];

const COLUMNS = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (text, data) => (
      <div className="country">
        <img src={data.flag} alt=""/>
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: 'Money-out method',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Fees',
    dataIndex: 'fees',
    key: 'fees',
  },
  {
    title: 'Limit Per Transaction',
    dataIndex: 'limitMin',
    key: 'limit',
    render: (p1, p2) => (
      <div className="limit">
        <p>{p1}</p>
        <p>{p2.limitMax}</p>
      </div>
    ),
  },
  {
    title: 'Period',
    dataIndex: 'period',
    key: 'period',
  },
];

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
          <img src={imgBankLoc} alt="" />
          <p className="label">Your local bank account</p>
        </li>
        <li>
          <p className="label2">Local payout request</p>
          <span className="arrow" />
          <span className="arrow2" />
          <p className="label2">Bank to bank transfer</p>
        </li>
        <li>
          <img src={imgBankLogo} alt="" />
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
        <Table dataSource={DATA_SOURCE} columns={COLUMNS} pagination={false} />
      </S.TableWrapper>
    </S.Wrapper>
  );
}

export default Advantages;
