import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  background: ${colors.dark_1};
  color: #fff;
  padding: 40px 20px;

  small {
    font-size: 14px;
    font-weight: 700;
  }
  h2 {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
  }
  p {
    font-size: 16px;
    max-width: 500px;
    margin: 30px auto;
  }
  article {
    max-width: 600px;
    text-align: center;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      flex: 0 0 49%;
      display: block;
      font-size: 16px;
      text-transform: uppercase;
      color: #fff;
      height: 50px;
      cursor: pointer;
      font-weight: 700;
    }
    button.outline-btn {
      background: transparent;
      border: 1px solid #fff;
    }
    button.solid-btn {
      background: ${colors.sky_blue};
      border: 1px solid ${colors.sky_blue};
      color: ${colors.navy_blue};
    }
  }
`;
