import styled from 'styled-components';
import { colors } from 'themes/colors';
import bg from 'assets/bg-home-benefits.jpg';

export const Wrapper = styled.div`
  width: 100%;
  margin: 60px 0 0;
  @media (max-width: 600px) {
    margin: 30px 0 0;
  }

  h2 {
    font-size: 45px;
    color: ${colors.navy_blue};
    text-align: center;
    padding: 0 40px;
    @media (max-width: 600px) {
      font-size: 28px;
    }
  }

  > section {
    width: 100%;
    background: #286198 url(${bg}) center right/contain no-repeat;
    padding: 80px 40px;
    @media (max-width: 1200px) {
      background: #286198 url(${bg}) center/cover no-repeat;
    }
    @media (max-width: 600px) {
      padding: 60px 20px;
    }

    ul {
      max-width: 1300px;
      margin: auto;
      width: 100%;

      li {
        margin-bottom: 50px;
        display: flex;
        align-items: center;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
    img {
      width: 60px;
      @media (max-width: 600px) {
        width: 45px;
      }
    }
    article {
      margin-left: 60px;
      @media (max-width: 600px) {
        margin-left: 30px;
      }
      h4 {
        margin: 0;
        font-size: 29px;
        letter-spacing: -0.14px;
        color: #fff;
        @media (max-width: 600px) {
          font-size: 21px;
        }
      }
      p {
        margin: 10px 0 0 0;
        font-size: 17px;
        color: #fff;
        max-width: 600px;
        @media (max-width: 600px) {
          font-size: 14px;
        }
      }
    }
  }
`;
