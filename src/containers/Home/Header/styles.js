import styled from 'styled-components';
import { colors } from 'themes/colors';
import bgHeader from 'assets/bg-home-banner.jpg';

export const Wrapper = styled.div`
  > header {
    width: 100%;
    height: 426px;
    background: url(${bgHeader}) center right/cover no-repeat;
  }
  > section {
    width: 100%;
    background: ${colors.navy_blue};
    padding: 20px 40px;
  }
  .reward {
    max-width: 1300px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 144px;
      display: block;
    }
    button {
      width: 251px;
      border-radius: 21px;
      height: 52px;
      background: #00e5ff 0% 0% no-repeat padding-box;
      border: 0;
      text-transform: uppercase;
      font-size: 14px;
      color: #023f69;
      font-weight: 700;
    }
    aside {
      display: flex;
      align-items: center;
    }
    article {
      margin-left: 100px;
      h4 {
        margin: 0 0 2px 0;
        color: #fff;
        font-weight: 400;
        font-size: 19px;
      }
      small {
        margin: 0;
        font-size: 10px;
        text-transform: uppercase;
        color: ${colors.sky_blue};
      }
    }
  }
`;
