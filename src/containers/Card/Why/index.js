import React from 'react';

import iconCard1 from 'assets/icon-card-1.svg';
import iconCard2 from 'assets/icon-card-2.svg';
import iconCard3 from 'assets/icon-card-3.svg';
import iconCard4 from 'assets/icon-card-4.svg';


import * as S from './styles';

function Why() {
  return (
    <S.Wrapper>
      <h2>Why LKPay Card</h2>
      <ul>
        <li>
          <header>
            <img src={iconCard1} alt="" />
            <h5>safe</h5>
          </header>
          <footer>
            <p>LKPay Card gives you the immediate credibility worldwide.</p>
            <p>
              No need to worry about currency fluctuations: conversion rates
              apply when LKPay cards are charged (except for USD account).
            </p>
          </footer>
        </li>
        <li>
          <header>
            <img src={iconCard2} alt="" />
            <h5>transparent</h5>
          </header>
          <footer>
            <p>
              LKPay cards are issued by Unionpay HK regulated by Hong Kong
              financial authorities.
            </p>
          </footer>
        </li>
        <li>
          <header>
            <img src={iconCard3} alt="" />
            <h5>instant</h5>
          </header>
          <footer>
            <p>
              Charging your LKPay card is done instantly by your LKPay online
              account.
            </p>
          </footer>
        </li>
        <li>
          <header>
            <img src={iconCard4} alt="" />
            <h5>convenient</h5>
          </header>
          <footer>
            <p>
              It allows you to use your LKPay card in all over the country for
              ATM withdrawlas, offline purchases that accept Unionpay.
            </p>
          </footer>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Why;
