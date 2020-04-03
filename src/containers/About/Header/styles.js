import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  max-width: 1400px;
  width: 100%;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 900;
    color: ${colors.dark_1};
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 10px;
    margin-top: 0;
  }
  h5 {
    font-size: 15px;
    font-weight: 400;
    max-width: 600px;
    margin: auto;
    line-height: 1.5;
  }
  h4 {
    font-size: 18px;
    max-width: 600px;
    margin: 70px auto 0;
    line-height: 1.4;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 30px;
    li {
      padding: 0 15px;
    }
  }
  .person-img {
    width: 130px;
    display: block;
    margin: auto;
  }
  .money-icon {
    width: 50px;
    display: block;
    margin: 0 auto 20px;
  }
  .label {
    font-size: 14px;
    color: ${colors.gray_1};
    margin-top: 10px;
    display: block;
  }
  .label2 {
    font-size: 14px;
    color: ${colors.dark_1};
    max-width: 195px;
  }
  .label3 {
    font-size: 14px;
    color: ${colors.dark_1};
    text-align: left;
    font-weight: 400;
    max-width: 800px;
    margin: auto;
    line-height: 1.4;
  }
  .arrow {
    width: 195px;
    height: 2px;
    background: ${colors.sky_blue};
    position: relative;
    display: block;

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

  > section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 50px auto;
    max-width: 1000px;
  }
`;

export const Grid = styled.div`
  max-width: 480px;
  border: 1px solid ${colors.gray_4};
  flex: 0 0 48%;
  color: ${colors.navy_blue};

  > header {
    padding: 25px;
    text-align: center;
    border-bottom: 1px solid ${colors.gray_4};
    p {
      font-size: 16px;
      margin: 0;
    }
  }
  > article {
    padding: 25px 35px;
    text-align: left;
    p {
      font-size: 15px;
      margin: 0 0 10px 0;
      color: ${colors.dark_1};
      line-height: 1.4;
    }
  }
  h5 {
    font-size: 18px;
    font-weight: 700;
  }
  h6 {
    font-size: 16px;
    margin: 0 0 15px 0;
    font-weight: 700;
    line-height: 1.4;
  }
`;
