import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 40px 20px;

  h2 {
    line-height: 1.4;
    font-size: 30px;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  > section {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  > ul {
    max-width: 840px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
    }
    .exchange-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 400px;
      width: 100%;

      p {
        font-size: 12px;
        color: ${colors.gray_2};
        font-weight: 700;
        strong {
          color: ${colors.sky_blue};
        }
      }
    }
  }

  footer {
    max-width: 840px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 50px auto 0;
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
    }

    article {
      padding: 20px;
      flex: 0 0 48%;
      border: 1px solid ${colors.gray_4};
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 700px) {
        justify-content: flex-start;
      }

      img {
        width: 45px;
        height: 45px;
        margin-right: 15px;
        display: block;
        border: 1px solid ${colors.gray_4};
        flex: 0 0 45px;
      }
      p {
        font-size: 15px;
        color: ${colors.gray_2};
        margin: 0;
        line-height: 1.4;
      }
      small {
        font-size: 12px;
        line-height: 1.4;
        display: block;
        margin-top: 5px;
        color: ${colors.gray_2};
      }
    }
  }
`;

export const ExchangeField = styled.div`
  max-width: 400px;
  width: 100%;
  height: 70px;
  display: flex;
  margin-bottom: 10px;
  border: 1px solid ${colors.gray_4};

  > section {
    flex: 1;
    height: 100%;
    background: #fff;
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 0 20px;

    small {
      color: ${colors.gray_4};
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
    }
    input {
      font-size: 18px;
      border: none;
      width: 100%;
      margin-top: -5px;
      font-weight: 700;
    }
  }
  > aside {
    flex: 0 0 140px;
    height: 100%;
    background: ${colors.sky_blue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    @media (max-width: 600px) {
      padding: 0 10px;
      flex: 0 0 110px;
    }

    > div {
      display: flex;
      align-items: center;
    }
    &.no-pointer {
      cursor: default;
    }
    .flag {
      width: 30px;
      display: inline-block;
    }
    .flag-label {
      display: inline-block;
      margin-left: 5px;
      font-weight: 700;
    }
    .down-arrow {
      width: 15px;
    }

    .currency-list {
      position: absolute;
      top: 0;
      right: 0;
      width: 140px;
      height: 200px;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
      overflow: auto;
      opacity: 0;
      visibility: hidden;
      z-index: 1;
      transition: 0.3s all ease-in-out;

      &.active {
        opacity: 1;
        visibility: visible;
        top: 80px;
      }

      li {
        display: flex;
        align-items: center;
        padding: 5px 10px;

        &:hover {
          background: #ddd;
        }
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']:disabled {
    background-color: transparent;
  }
`;
