import styled from 'styled-components';
import { colors } from 'themes/colors';

import bg from 'assets/bg-card.jpg';

export const Wrapper = styled.div`
  > header {
    width: 100%;
    background: ${colors.gray_3};
    @media (max-width: 1200px) {
      display: flex;
      justify-content: center;
    }

    article {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 40px 20px;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
      @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
      }

      h3 {
        color: ${colors.navy_blue};
        font-size: 40px;
        margin-right: 20px;
        margin: 0 20px 0 0;
        @media (max-width: 900px) {
          font-size: 30px;
          margin-right: 0;
        }
      }
      p {
        color: ${colors.navy_blue};
        font-size: 12px;
        max-width: 500px;
        font-weight: 700;
        margin: 0;
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
      @media (max-width: 900px) {
        height: auto;
        padding: 40px 0;
      }
    }
    ul {
      width: 100%;
      display: flex;
      max-width: 920px;
      align-items: center;
      padding: 0 40px;
      position: relative;
      z-index: 1;
      flex-wrap: wrap;
      @media (max-width: 1200px) {
        margin: auto;
      }
      @media (max-width: 600px) {
        padding: 0 20px;
      }
      li {
        flex: 0 0 24%;
        text-align: center;
        @media (max-width: 900px) {
          flex: 0 0 49%;
          margin-top: 20px;
        }
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
      @media (max-width: 600px) {
        width: 90px;
        height: 90px;

        img {
          width: 50%;
          height: 50%;
          object-fit: contain;
        }
      }
    }
    h5 {
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      margin: 20px 0 0;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
    .card {
      position: absolute;
      bottom: 70px;
      right: 50px;
      @media (max-width: 1200px) {
        display: none;
      }

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
