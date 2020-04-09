import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  ul {
    display: flex;
    max-width: 1000px;
    width: 100%;
    margin: 60px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 900px) {
      justify-content: center;
    }

    li {
      flex: 0 0 23%;
      text-align: center;
      padding: 0 10px;
      @media (max-width: 900px) {
        flex: 0 0 47%;
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        flex: 0 0 100%;
      }

      img {
        width: 32px;
        height: 32px;
        border: 1px solid ${colors.gray_4};
        margin: 0 auto 10px;
        display: block;
      }
      p {
        font-size: 16px;
        color: ${colors.dark_1};
        margin: 0;
      }
      strong {
        color: ${colors.navy_blue};
      }
    }
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
`;
