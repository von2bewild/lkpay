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
`;

export const StepsDesktop = styled.ul`
  display: flex;
  max-width: 1000px;
  margin: 80px auto;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 1000px) {
    display: none;
  }

  li {
    flex: 0 0 25%;
    position: relative;
    text-align: center;
    padding: 20px;

    h5 {
      font-weight: 700;
      font-size: 16px;
      line-height: 1.2;
      margin: 0;
    }
    p {
      font-size: 14px;
      margin: 10px 0 0;
    }
    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -54%);
      width: 260px;
      height: 260px;
      border: 2px solid ${colors.sky_blue};
      border-radius: 50%;
      content: '';
    }
    small {
      font-size: 10px;
      color: ${colors.navy_blue};
      margin: 5px 0 0;
      line-height: 1.4;
      display: block;
      font-weight: 700;
    }
  }
  li:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:before {
      display: none;
    }
    .circle {
      width: 130px;
      height: 130px;
      display: block;
      background: ${colors.sky_blue};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      h5 {
        color: #fff;
      }
    }
    .arrow {
      width: 60px;
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
  }
`;

export const StepsMobile = styled.ul`
  display: none;
  margin: 50px 0;
  @media (max-width: 1000px) {
    display: block;
  }
  li {
    margin-bottom: 30px;
    text-align: center;
  }
  h5 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
    margin: 0;
    color: ${colors.sky_blue};
  }
  p {
    font-size: 14px;
    margin: 5px 0 0;
  }
  small {
    font-size: 12px;
    color: ${colors.navy_blue};
    margin: 5px 0 0;
    line-height: 1.4;
    display: block;
  }
`;
