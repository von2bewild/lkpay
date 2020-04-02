import React from 'react';
import * as S from './styles';

import mostbet from 'assets/merchants/mostbet.jpg';
import sector from 'assets/merchants/sector.jpg';
import aitech from 'assets/merchants/ai-tech.jpg';
import anzo from 'assets/merchants/anzo.jpg';
import bettilt from 'assets/merchants/bettilt.jpg';
import blackbull from 'assets/merchants/blackbull.jpg';
import broker from 'assets/merchants/broker.jpg';
import cjcmarkets from 'assets/merchants/cjc-markets.jpg';
import coinprime from 'assets/merchants/coinprime.jpg';
import coinshype from 'assets/merchants/coins-hype.jpg';
import ecwid from 'assets/merchants/ecwid.jpg';
import finotec from 'assets/merchants/finotec.jpg';
import fxglory from 'assets/merchants/fxglory.jpg';
import infinitrade from 'assets/merchants/infinitrade.jpg';
import mahjong from 'assets/merchants/mahjong.jpg';
import marketequity from 'assets/merchants/market-equity.jpg';
import markets from 'assets/merchants/markets.jpg';
import masdar from 'assets/merchants/masdar.jpg';
import myflora from 'assets/merchants/myflora.jpg';
import quanta from 'assets/merchants/quanta.jpg';
import rexor from 'assets/merchants/rexor.jpg';
import vibhs from 'assets/merchants/vibhs.jpg';

const MERCHANTS = [
  mostbet,
  sector,
  aitech,
  anzo,
  bettilt,
  blackbull,
  broker,
  cjcmarkets,
  coinprime,
  coinshype,
  ecwid,
  finotec,
  fxglory,
  infinitrade,
  mahjong,
  marketequity,
  markets,
  masdar,
  myflora,
  quanta,
  rexor,
  vibhs,
];

function Merchants() {
  return (
    <S.Wrapper>
      <h2>LKPay Merchants</h2>
      <ul>
        {MERCHANTS.map((merchant, index) => (
          <li key={index}>
            <figure>
              <img src={merchant} alt="" />
            </figure>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
}

export default Merchants;
