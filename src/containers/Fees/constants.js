import React from 'react';

import us from 'assets/flags/us.svg';
import au from 'assets/flags/au.svg';
import ca from 'assets/flags/ca.svg';
import cn from 'assets/flags/cn.svg';
import hk from 'assets/flags/hk.svg';
import id from 'assets/flags/id.svg';
import jp from 'assets/flags/jp.svg';
import my from 'assets/flags/my.svg';
import ph from 'assets/flags/ph.svg';
import sg from 'assets/flags/sg.svg';
import kr from 'assets/flags/kr.svg';

export const CURRENCIES = [
  {
    currency: 'USD',
    flag: us,
  },
  {
    currency: 'AUD',
    flag: au,
  },
  {
    currency: 'CAD',
    flag: ca,
  },
  {
    currency: 'CNY',
    flag: cn,
  },
  {
    currency: 'HKD',
    flag: hk,
  },
  {
    currency: 'IDR',
    flag: id,
  },
  {
    currency: 'JPY',
    flag: jp,
  },
  {
    currency: 'MYR',
    flag: my,
  },
  {
    currency: 'PHP',
    flag: ph,
  },
  {
    currency: 'SGD',
    flag: sg,
  },
];

export const DATA_COUNTRIES_MONEY_OUT = [
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
    country: 'South Korea',
    method: 'Local Bank Wire',
    currency: 'KRW',
    fees: '₩ 4,000 + 1.5%',
    limitMax: 'MAX ₩ 5,500,000',
    limitMin: 'MIN ₩ 13,000',
    period: '1 to 2 business day',
    flag: kr,
  },
  {
    key: '4',
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
    key: '5',
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
    key: '6',
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
    key: '7',
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
    key: '8',
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
    key: '9',
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

export const DATA_COUNTRIES_MONEY_IN = [
  {
    key: '1',
    country: 'Japan',
    method: 'Local Bank Wire',
    currency: 'JPY',
    fees: '2%',
    limitMax: 'MAX ¥ 1,000,000',
    limitMin: 'MIN ¥ 5,000',
    period: 'Half business day',
    flag: jp,
  },
  {
    key: '2',
    country: 'South Korea',
    method: 'Local Bank Wire',
    currency: 'KLW',
    fees: '₩ 5,000 + 2%',
    limitMax: 'MAX ₩ 5,500,000',
    limitMin: 'MIN ₩ 13,000',
    period: '1 hour',
    flag: kr,
  },
  {
    key: '3',
    country: 'China',
    method: 'Local Bank Wire',
    currency: 'CNY',
    fees: '1.5%',
    limitMax: 'MAX CN¥ 30,000.00',
    limitMin: 'MIN CN¥ 200.00',
    period: '1 hour',
    flag: cn,
  },
];

export const COLUMNS_COUNTRIES = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (text, data) => (
      <div className="country">
        <img src={data.flag} alt="" />
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
