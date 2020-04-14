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

  > ul {
    text-align: center;
    max-width: 900px;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;

    li {
      flex: 1;
    }
  }
  > footer {
    max-width: 900px;
    margin: 50px auto 0;
    width: 100%;
    text-align: center;

    .line {
      width: 85%;
      margin: 0 auto 10px;
      display: block;
      height: 2px;
      position: relative;
      background: ${colors.sky_blue};

      &:before {
        height: 30px;
        width: 2px;
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        background: ${colors.sky_blue};
      }
      &:after {
        height: 30px;
        width: 2px;
        content: '';
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        background: ${colors.sky_blue};
      }
    }
  }

  .person {
    width: 130px;
    display: block;
    margin: auto;
    @media (max-width: 900px) {
      width: 70px;
      height: 70px;
    }
  }
  .bank {
    width: 130px;
    height: 130px;
    display: block;
    margin: auto;
    @media (max-width: 900px) {
      width: 70px;
      height: 70px;
    }
  }

  .arrow {
    width: 155px;
    height: 2px;
    background: ${colors.sky_blue};
    position: relative;
    display: block;
    margin: 60px auto 0;
    @media (max-width: 900px) {
      margin: 35px auto 0;
      width: 70%;
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
  h5 {
    font-size: 14px;
    color: ${colors.gray_1};
    margin: 10px 0 0;
    display: block;
  }
  h4 {
    font-size: 14px;
    color: ${colors.navy_blue};
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
