import styled from 'styled-components';
import { colors } from 'themes/colors';
import bgHeader from 'assets/bg-card-header.jpg';

export const Wrapper = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: ${colors.dark_1} url(${bgHeader}) center/cover no-repeat;

  h1 {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    line-height: 1.4;
    @media (max-width: 600px) {
      font-size: 28px;
    }
  }
  h5 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    max-width: 650px;
    margin: auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 30px auto;

    li {
      flex: 0 0 50%;

      img {
        width: 130px;
        @media (max-width: 600px) {
          width: 70px;
        }
      }
      p {
        font-size: 14px;
        color: #fff;
        max-width: 220px;
        margin: 10px auto 0;
      }
    }
    li.full {
      flex: 0 0 100%;
    }
  }
`;
