import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 70px 40px;
  max-width: 1300px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 40px 20px;
    flex-direction: column;
  }

  h2 {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
    color: ${colors.navy_blue};
    letter-spacing: -0.84px;
    line-height: 1.2;
    @media (max-width: 600px) {
      font-size: 28px;
      text-align: center;
    }
  }
  p {
    margin: 10px 0 0 0;
    font-size: 20px;
    color: ${colors.navy_blue};
    @media (max-width: 600px) {
      font-size: 16px;
      text-align: center;
    }
  }
  aside {
    height: 62px;
    max-width: 407px;
    width: 100%;
    border: 1px solid #707070;
    border-radius: 21px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1000px) {
      margin-top: 30px;
    }

    .email-field {
      padding: 0 20px;
      border: none;
    }
    .email-btn {
      background: ${colors.navy_blue};
      height: 62px;
      color: #fff;
      border: 1px solid ${colors.navy_blue};
      border-radius: 21px;
      width: 130px;
      cursor: pointer;
      text-transform: uppercase;
    }
  }
`;
