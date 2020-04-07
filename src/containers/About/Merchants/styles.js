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
    line-height: 1.2;
    color: ${colors.navy_blue};
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  > h6 {
    text-align: center;
    font-size: 16px;
    max-width: 1000px;
    margin: auto;
    color: ${colors.dark_1};
    line-height: 1.4;
    font-weight: 400;
  }
  > h5 {
    font-size: 18px;
    line-height: 1.4;
    color: ${colors.navy_blue};
    font-weight: 400;
    max-width: 700px;
    margin: 30px auto 0;
    font-weight: 700;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    margin: 30px 0 30px;
    li {
      padding: 0 10px;
      text-align: center;
      .label {
        font-size: 14px;
        color: ${colors.gray_1};
        margin: 10px 0 0;
        max-width: 160px;
        display: block;
        @media (max-width: 600px) {
          max-width: 100px;
        }
      }
      .label2 {
        font-size: 14px;
        color: ${colors.dark_1};
        margin: 10px 0;
      }
      img {
        display: block;
        width: 130px;
        height: 126px;
        border: 1px solid #ddd;
        margin: auto;
        @media (max-width: 600px) {
          width: 70px;
          height: 70px;
        }
      }
      .arrow {
        width: 220px;
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
        width: 220px;
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
