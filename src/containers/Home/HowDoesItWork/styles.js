import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 40px 40px 60px;
  text-align: center;
  width: 100%;
  margin: auto;
  background: ${colors.gray_3};

  h2 {
    letter-spacing: -0.8px;
    margin-bottom: 40px;
    color: ${colors.navy_blue};
    font-size: 40px;
  }
  ul {
    max-width: 1200px;
    width: 100%;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      flex: 0 0 30%;
      max-width: 280px;
      margin: 0 auto;
      width: 100%;

      img {
        display: block;
        margin: auto;
      }
      .number {
        width: 38px;
        height: 38px;
        border: 3px solid ${colors.navy_blue};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.navy_blue};
        font-size: 20px;
        font-weight: 700;
        margin: 20px auto 0;
        background: #fff;
      }
      h4 {
        font-size: 20px;
        color: ${colors.navy_blue};
        font-weight: 700;
        margin: 20px 0 10px;
      }
      p {
        font-size: 14px;
        color: ${colors.dark_2};
      }
    }
  }
  button {
    max-width: 354px;
    width: 100%;
    margin: 40px auto 0;
    display: block;
    height: 70px;
    background: ${colors.navy_blue};
    font-size: 17px;
    text-transform: uppercase;
    color: #fff;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    &:hover {
      background: ${colors.sky_blue};
      color: ${colors.navy_blue};
    }
  }
`;
