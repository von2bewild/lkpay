import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  background: ${colors.navy_blue};
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  @media (max-width: 600px) {
    height: 400px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 28px;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    max-width: 280px;
    width: 100%;
    height: 50px;
    background: ${colors.sky_blue};
    color: ${colors.navy_blue};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    border: none;
    margin-top: 40px;
  }
`;
