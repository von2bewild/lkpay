import React from 'react';
import { Table } from 'antd';

import {
  MONEY_IN,
  MONEY_OUT,
  INTERNAL_TRANSFER,
  COLUMNS_COUNTRIES,
  DATA_COUNTRIES_MONEY_OUT,
  DATA_COUNTRIES_MONEY_IN,
} from '../constants';

import * as S from './styles';

function Grid() {
  return (
    <S.Wrapper>
      <section>
        <S.ListWrapper>
          <h4>Money in</h4>
          <ul>
            {MONEY_IN.map((i, index) => (
              <li key={index}>
                <header>
                  <img src={i.bank} alt="" />
                </header>
                <footer>
                  <p>{i.fee}</p>
                  {i.note ? <small>{i.note}</small> : null}
                </footer>
              </li>
            ))}
          </ul>
        </S.ListWrapper>
        <S.ListWrapper>
          <h4>Money out</h4>
          <ul>
            {MONEY_OUT.map((i, index) => (
              <li key={index}>
                <header>
                  <img src={i.bank} alt="" />
                </header>
                <footer>
                  <p>{i.fee}</p>
                  {i.note ? <small>{i.note}</small> : null}
                </footer>
              </li>
            ))}
          </ul>
        </S.ListWrapper>
        <S.ListWrapper>
          <h4>Internal transfer (Send / Receive)</h4>
          <ul>
            {INTERNAL_TRANSFER.map((i, index) => (
              <li key={index}>
                <header>
                  <p>{i.name}</p>
                  <strong>{i.currency}</strong>
                </header>
                <footer>
                  <p>{i.fee}</p>
                </footer>
              </li>
            ))}
          </ul>
        </S.ListWrapper>
        <S.TableWrapper>
          <h4>Local Money In Countries List</h4>
          <Table
            dataSource={DATA_COUNTRIES_MONEY_IN}
            columns={COLUMNS_COUNTRIES}
            pagination={false}
          />
        </S.TableWrapper>
        <S.TableWrapper>
          <h4>Local Money Out Countries List</h4>
          <Table
            dataSource={DATA_COUNTRIES_MONEY_OUT}
            columns={COLUMNS_COUNTRIES}
            pagination={false}
          />
        </S.TableWrapper>
      </section>
    </S.Wrapper>
  );
}

export default Grid;
