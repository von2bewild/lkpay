import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  background: ${colors.gray_3};
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
  h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 24px;
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
    font-size: 14px;
    color: ${colors.gray_2};
    margin: 10px auto 0;
    display: block;
    max-width: 180px;
  }
  h4 {
    font-size: 18px;
    line-height: 1.4;
    color: ${colors.navy_blue};
    font-weight: 700;
    max-width: 1000px;
    margin: 20px auto 5px;
    text-align: center;
  }
  h3 {
    font-size: 18px;
    line-height: 1.4;
    color: ${colors.navy_blue};
    font-weight: 400;
    margin: 20px auto;
    text-align: center;
  }
  ul {
    text-align: center;
    max-width: 800px;
    margin: 60px auto 20px;
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
  .arrow {
    width: 80%;
    height: 2px;
    background: ${colors.sky_blue};
    position: relative;
    display: block;
    margin: 30px auto 0;
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

  article {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto;
    @media (max-width: 600px) {
      flex-direction: column;
    }

    img {
      width: 113px;
      flex: 0 0 113px;
    }
    h6 {
      margin-left: 15px;
      text-align: left;
      @media (max-width: 600px) {
        margin: 10px 0 0 0;
        text-align: center;
      }
    }
  }
`;
