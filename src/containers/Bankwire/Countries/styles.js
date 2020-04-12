import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
  h2 {
    text-align: center;
    margin: 0 auto 20px;
    font-size: 30px;
    max-width: 600px;
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
    margin: 0 auto 20px;
    font-weight: 400;
    color: ${colors.gray_2};
    line-height: 1.4;
    strong {
      color: ${colors.sky_blue};
    }
  }

  ul {
    max-width: 800px;
    margin: 30px auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 0 0 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border: 1px solid ${colors.gray_4};
      flex-direction: column;
      margin: 5px;
      text-align: center;
      @media (max-width: 900px) {
        flex: 0 0 30%;
      }
      @media (max-width: 600px) {
        flex: 0 0 45%;
      }
      img {
        width: 35px;
      }
      .label {
        font-size: 14px;
        color: ${colors.dark_1};
      }
    }
  }
`;
