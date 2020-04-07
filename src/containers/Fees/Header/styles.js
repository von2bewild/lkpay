import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 50px 40px;
  background: ${colors.navy_blue};

  > section {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .select-after {
    width: 150px;
  }
  .ant-input-group-addon {
    cursor: pointer;
    background: ${colors.sky_blue};
    border-color: ${colors.sky_blue};
  }
  .ant-input-lg {
    padding: 15px;
  }
`;

export const LeftContent = styled.div`
  flex: 0 0 48%;

  h2 {
    font-weight: 900;
    font-size: 36px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
  }
  .exchange-rate {
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin: 5px 0 0 0;

    strong {
      font-weight: 700;
      color: ${colors.sky_blue};
    }
  }
`;

export const RightContent = styled.div`
  flex: 0 0 48%;
  .exchange-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    width: 100%;

    p {
      font-size: 12px;
      color: #fff;
      strong {
        color: ${colors.sky_blue};
      }
    }
  }
`;

export const ExchangeField = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  margin-bottom: 10px;

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
