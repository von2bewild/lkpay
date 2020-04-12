import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  height: calc(100vh - 390px);
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 40px;

  > section {
    max-width: 400px;
    width: 100%;

    h3 {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      color: ${colors.gray_2};
      letter-spacing: 2px;
      margin: 0 0 30px;
    }
    button {
      width: 100%;
      padding: 10px 0;
      margin-top: 20px;
      border: none;
      background: ${colors.sky_blue};
      border-radius: 4px;
      font-weight: 700;
      letter-spacing: 2px;
      color: ${colors.navy_blue};
      cursor: pointer;
    }
    footer {
      display: flex;
      justify-content: space-between;
      margin: 20px 0 0;
    }
    a {
      color: ${colors.navy_blue};
      font-size: 12px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
