import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  > h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
    line-height: 1.2;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  > h6 {
    text-align: center;
    font-size: 16px;
    max-width: 1000px;
    margin: 0 auto 30px;
    color: ${colors.dark_1};
    line-height: 1.4;
    font-weight: 400;
  }
  > h5 {
    text-align: center;
    font-size: 16px;
    max-width: 700px;
    margin: 40px auto 0;
    color: ${colors.gray_2};
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
        width: 100px;
        height: 122px;
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
  article {
    display: flex;
    max-width: 800px;
    margin: auto;
    .check {
      width: 15px;
      height: 26px;
      display: block;
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
