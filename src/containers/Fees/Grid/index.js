import React from 'react';
import { Table } from 'antd';

import {
  COLUMNS_COUNTRIES,
  DATA_COUNTRIES_MONEY_OUT,
  DATA_COUNTRIES_MONEY_IN,
} from '../constants';

import * as S from './styles';

function Grid() {
  return (
    <S.Wrapper>
      <section>
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
