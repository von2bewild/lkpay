import styled from 'styled-components';
import { colors } from 'themes/colors';

import bg from 'assets/bg-card.jpg';

export const Wrapper = styled.div`
  > header {
    width: 100%;
    background: ${colors.gray_3};

    article {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;

      h3 {
        color: ${colors.navy_blue};
        font-size: 40px;
        margin-right: 20px;
      }
      p {
        color: ${colors.navy_blue};
        font-size: 12px;
        max-width: 500px;
        font-weight: 700;
      }
    }
  }
  > section {
    width: 100%;
    background: ${colors.navy_blue} url(${bg}) center/cover no-repeat;
    article {
      height: 345px;
      width: 100%;
      max-width: 1500px;
      margin: auto;
      display: flex;
      align-items: center;
      position: relative;
    }
    ul {
      width: 100%;
      display: flex;
      max-width: 920px;
      align-items: center;
      padding: 0 40px;
      position: relative;
      z-index: 1;
      li {
        flex: 0 0 24%;
        text-align: center;
      }
    }
    .circle {
      width: 150px;
      height: 150px;
      border: 3px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: auto;
    }
    h5 {
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      margin: 20px 0 0;
    }
    .card {
      position: absolute;
      bottom: 70px;
      right: 50px;

      img {
        width: 500px;
        z-index: 0;
        display: block;
      }

      button {
        background: transparent;
        border: 1px solid #fff;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 10px 20px;
        color: #fff;
        border-radius: 30px;
        margin: 20px auto 0;
        display: block;
        cursor: pointer;

        &:hover {
          background: #fff;
          color: ${colors.navy_blue};
        }
      }
    }
  }
`;
