import styled from 'styled-components';
import { colors } from 'themes/colors';
import bgHeader from 'assets/bg-home-banner.jpg';

export const Wrapper = styled.div`
  > header {
    width: 100%;
    height: 426px;
    background: url(${bgHeader}) center right/cover no-repeat;
    @media (max-width: 900px) {
      height: 300px;
    }
    @media (max-width: 600px) {
      height: 250px;
    }
    @media (max-width: 500px) {
      height: 200px;
    }
    @media (max-width: 400px) {
      height: 160px;
    }
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
    @media (max-width: 1000px) {
      flex-direction: column;
    }

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
      cursor: pointer;

      &:hover {
        background: #fff;
      }
    }
    aside {
      display: flex;
      align-items: center;
      @media (max-width: 1000px) {
        flex-direction: column;
      }
    }
    article {
      margin-left: 50px;
      @media (max-width: 1000px) {
        margin: 20px 0;
        text-align: center;
      }
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
