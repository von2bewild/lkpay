import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.dark_2};
  padding: 40px 20px;

  ul {
    display: flex;
    max-width: 550px;
    width: 100%;
    margin: 80px auto;
    justify-content: space-between;
    list-style: none;
    align-items: center;

    li {
      flex: 0 0 22%;
      position: relative;
      text-align: center;
      padding: 20px 0;
      @media (max-width: 600px) {
        flex: 0 0 25%;
      }

      h5 {
        font-weight: 700;
        font-size: 16px;
        line-height: 1.2;
        margin: 0;
        color: #fff;
        position: relative;
      }
      p {
        font-size: 14px;
        margin: 10px 0 0;
        color: #fff;
        line-height: 1.4;
        position: relative;
        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
      &:before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -54%);
        width: 140px;
        height: 140px;
        border: 2px solid ${colors.sky_blue};
        border-radius: 50%;
        content: '';
        @media (max-width: 600px) {
          width: 120px;
          height: 120px;
        }
      }
    }
    li:first-child:before {
      background: ${colors.navy_blue};
      border: 2px solid ${colors.navy_blue};
    }
    li.arrow-item {
      flex: 0 0 35%;
      @media (max-width: 600px) {
        flex: 0 0 15%;
      }

      &:before {
        display: none;
      }
    }
  }

  .arrow {
    width: 80%;
    height: 2px;
    background: ${colors.sky_blue};
    position: relative;
    display: block;
    margin: 0 auto;
    @media (max-width: 600px) {
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
`;
