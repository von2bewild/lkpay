import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

export const Tabs = styled.div`
  max-width: 1000px;
  margin: auto;

  > nav {
    text-align: center;
    display: flex;
    align-items: center;

    button {
      font-weight: 16px;
      font-weight: 900;
      padding: 10px 0;
      width: 100%;
      flex: 0 0 50%;
      background: transparent;
      text-transform: uppercase;
      color: ${colors.gray_2};
      border: none;
      border-bottom: 5px solid ${colors.gray_4};
      cursor: pointer;
    }
    button.active {
      color: ${colors.sky_blue};
      border-bottom: 5px solid ${colors.sky_blue};
    }
  }
`;

export const TabContent = styled.div`
  display: none;
  max-width: 1000px;
  margin: 30px auto 0;

  &.active {
    display: block;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      padding: 0 10px 20px;
      flex: 0 0 33.33%;
    }
  }
`;

export const Items = styled.div`
  figure {
    width: 100%;
    height: 220px;
    background: ${colors.gray_4};
    margin: 0 0 15px;
    display: block;
  }
  h4 {
    font-size: 18px;
    margin: 0 0 5px 0;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
  small {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
