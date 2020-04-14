import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  > h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  > ul {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
    margin: auto;
    text-align: center;
    flex-wrap: wrap;

    li {
      border: 1px solid ${colors.gray_4};
      flex: 0 0 24%;
      margin-bottom: 15px;
      @media (max-width: 900px) {
        flex: 0 0 49%;
      }
      @media (max-width: 600px) {
        flex: 0 0 100%;
      }

      > header {
        border-bottom: 1px solid ${colors.gray_4};
        padding: 20px;
      }
      > footer {
        padding: 20px;
      }
    }
  }

  img {
    width: 50px;
    height: 50px;
    display: block;
    margin: auto;
  }
  p {
    font-size: 14px;
    margin: 0 0 10px;
  }
  h5 {
    text-transform: uppercase;
    margin: 5px 0 0;
    font-weight: 700;
    font-size: 14px;
  }
`;
