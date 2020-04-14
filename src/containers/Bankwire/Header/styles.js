import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    color: ${colors.navy_blue};
    text-align: center;
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 28px;
    }
  }
  h6 {
    text-align: center;
    font-size: 16px;
    max-width: 1000px;
    margin: 0 auto;
    font-weight: 400;
    color: ${colors.gray_2};
    line-height: 1.4;
    strong {
      color: ${colors.sky_blue};
    }
  }
  h5 {
    font-size: 18px;
    line-height: 1.4;
    color: ${colors.dark_1};
    font-weight: 400;
    max-width: 1000px;
    margin: 30px auto 20px;
    text-align: center;
  }
  h3 {
    font-size: 18px;
    line-height: 1.4;
    color: ${colors.navy_blue};
    font-weight: 700;
    max-width: 1000px;
    margin: 20px auto 5px;
    text-align: center;
  }

  header {
    text-align: center;
    margin: 30px auto;
    padding: 30px 0;
    border: 1px dotted ${colors.gray_4};
    max-width: 1000px;
    ul {
      text-align: center;
      max-width: 900px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      li {
        flex: 1;
        @media (max-width: 600px) {
          flex: 0 0 32%;
          margin-top: 30px;
        }
      }
      li.arrow-item {
        @media (max-width: 600px) {
          flex: 0 0 20%;
        }
      }
      img {
        display: block;
        margin: auto;
        height: 100px;
        @media (max-width: 900px) {
          height: 70px;
        }
      }
    }
  }

  footer {
    text-align: center;
    margin: 30px auto;
    padding: 30px 0;
    border: 1px dotted ${colors.gray_4};
    max-width: 1000px;
    ul {
      text-align: center;
      max-width: 600px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      li {
        flex: 1;
        @media (max-width: 600px) {
          flex: 0 0 32%;
          margin-top: 30px;
        }
      }
      li.arrow-item {
        @media (max-width: 600px) {
          flex: 0 0 20%;
        }
      }
      img {
        display: block;
        margin: auto;
        height: 100px;
        @media (max-width: 900px) {
          height: 70px;
        }
      }
      h6 {
        margin-top: 5px;
      }
    }
  }

  .arrow {
    width: 80%;
    height: 2px;
    background: ${colors.sky_blue};
    position: relative;
    display: block;
    margin: auto;
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

  .hide-mobile {
    @media (max-width: 600px) {
      display: none;
    }
  }

  small {
    font-size: 13px;
    display: block;
    text-align: center;
    margin-top: 5px;
  }
`;
