import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  background: #f4f4f4;
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  > nav {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    a {
      font-size: 19px;
      color: ${colors.gray_1};
      margin: 0 40px;
      @media (max-width: 1200px) {
        margin: 0 20px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 40px auto 0;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    img {
      width: 108px;
    }
    p {
      margin-left: 60px;
      font-size: 16px;
      color: ${colors.gray_1};
      line-height: 1.4;
      @media (max-width: 900px) {
        margin: 20px 0 0;
        text-align: center;
      }
    }
  }
`;
