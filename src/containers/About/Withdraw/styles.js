import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  background: ${colors.gray_3};

  > h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
  }
  > h6 {
    text-align: center;
    font-size: 16px;
    max-width: 1000px;
    margin: 0 auto;
    color: ${colors.dark_1};
    line-height: 1.4;
    font-weight: 400;
  }
  ul {
    margin: 50px auto;
    max-width: 400px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      padding: 0 20px;

      img {
        width: 42px;
        height: 42px;
        border: 1px solid #ddd;
        display: block;
        margin: 0 auto 10px;
      }
      p {
        text-align: center;
        margin: 0;
        font-size: 16px;
        max-width: 1000px;
        margin: auto;
        color: ${colors.dark_1};
        font-weight: 400;
      }
    }
  }

  > footer {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
    max-width: 700px;
    border: 1px solid ${colors.gray_4};

    > h4 {
      font-size: 18px;
      line-height: 1.4;
      color: ${colors.navy_blue};
      font-weight: 400;
      max-width: 300px;
      font-weight: 700;
      text-align: center;
    }
    article {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .check {
      width: 15px;
      height: 26px;
      flex: 0 0 15px;
    }
    p {
      font-size: 16px;
      color: ${colors.dark_1};
      font-weight: 400;
      margin: 0 0 0 10px;
    }
  }
`;
