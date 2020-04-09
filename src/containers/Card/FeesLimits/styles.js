import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
  h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  h5 {
    text-align: center;
    font-size: 16px;
    max-width: 800px;
    margin: 0 auto;
    font-weight: 400;
    color: ${colors.dark_1};
    line-height: 1.4;
  }
  > section {
    max-width: 1000px;
    margin: 30px auto;
    overflow: hidden;
  }
  h4 {
    font-size: 18px;
    margin: 0 0 15px 0;
  }

  article {
    max-width: 800px;
    margin: 0 auto 60px;

    aside {
      overflow: hidden;
    }
    h6 {
      font-size: 14px;
      margin: 0 auto 5px;
      font-weight: 400;
      color: ${colors.gray_2};
      line-height: 1.4;
    }
  }
  
  .ant-table-wrapper {
    width: 100%;
    max-width: 1000px;
    overflow: auto;
  }
`;
