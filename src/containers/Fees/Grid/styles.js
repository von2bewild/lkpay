import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  > section {
    max-width: 1200px;
    margin: auto;
  }
`;

export const ListWrapper = styled.div`
  h4 {
    font-size: 18px;
    margin: 0 0 15px 0;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media (max-width: 900px) {
      justify-content: space-between;
    }
    li {
      border: 1px solid ${colors.gray_4};
      flex: 0 0 23%;
      margin: 0 20px 20px 0;
      @media (max-width: 1200px) {
        flex: 0 0 30%;
      }
      @media (max-width: 900px) {
        flex: 0 0 49%;
        margin: 0 0 20px 0;
      }
      @media (max-width: 600px) {
        flex: 0 0 100%;
      }
      header {
        padding: 20px;
        text-align: center;
        min-height: 84px;

        img {
          height: 28px;
        }
        p {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
        }
        strong {
          font-size: 14px;
          margin: 0;
          color: ${colors.sky_blue};
        }
      }
      footer {
        padding: 10px 20px;
        border-top: 1px solid ${colors.gray_4};
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          margin: 0;
          font-size: 12px;
          font-weight: 700;
        }
        small {
          font-size: 12px;
          line-height: 1.1;
          margin-left: 10px;
        }
      }
    }
  }
`;

export const TableWrapper = styled.div`
  margin: 40px auto;
  overflow: hidden;
  h4 {
    font-size: 18px;
    margin: 0 0 15px 0;
  }
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
