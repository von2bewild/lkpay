import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  background: ${colors.gray_3};
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  > h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  > h6 {
    text-align: center;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 400;
    color: ${colors.dark_1};
    line-height: 1.4;
  }
  > h5 {
    font-size: 16px;
    line-height: 1.4;
    color: ${colors.gray_2};
    font-weight: 400;
    max-width: 700px;
    margin: 30px auto 0;
    text-align: center;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 30px;
    li {
      padding: 0 10px;
      text-align: center;
      .label {
        font-size: 14px;
        color: ${colors.gray_1};
        margin: 10px 0 0;
        display: block;
      }
      .label2 {
        font-size: 14px;
        color: ${colors.dark_1};
        max-width: 195px;
        margin: 10px 0;
      }
      img {
        display: block;
        width: 130px;
        margin: auto;
        @media (max-width: 600px) {
          width: 70px;
          height: 70px;
        }
      }
      .arrow {
        width: 195px;
        height: 2px;
        background: ${colors.sky_blue};
        position: relative;
        display: block;
        @media (max-width: 600px) {
          width: 100%;
        }

        &:after {
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-left: 13px solid ${colors.sky_blue};
          border-bottom: 6px solid transparent;
          top: -5px;
          right: -5px;
        }
      }
      .arrow2 {
        width: 195px;
        height: 2px;
        background: ${colors.sky_blue};
        position: relative;
        display: block;
        margin-top: 20px;
        @media (max-width: 600px) {
          width: 100%;
        }

        &:after {
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-right: 13px solid ${colors.sky_blue};
          border-bottom: 6px solid transparent;
          top: -5px;
          left: -5px;
        }
      }
    }
  }
`;

export const TableWrapper = styled.div`
  margin: 40px auto;
  overflow: hidden;

  .country {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 10px;
    }
  }
  .ant-table-wrapper {
    width: 100%;
    max-width: 1000px;
    overflow: auto;
    margin: 0 auto;
  }
  .ant-table-tbody > tr > td {
    background: #fff;
  }
  p {
    margin: 0;
  }
`;
