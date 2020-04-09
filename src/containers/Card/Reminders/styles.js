import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  background: ${colors.gray_3};
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
  > h6 {
    text-align: center;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 400;
    color: ${colors.dark_1};
    line-height: 1.4;
  }

  ul {
    list-style: none;
    padding: 0;
    max-width: 800px;
    margin: 30px auto;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      figure {
        margin: 0;
        flex: 0 0 50%;
        img {
          width: 100%;
          @media (max-width: 600px) {
            width: 90%;
            margin: 0 auto 10px;
            display: block;
          }
        }
      }
      article {
        margin-left: 30px;
        @media (max-width: 600px) {
          margin-left: 0;
        }
      }
    }
    li.full {
      flex-direction: column;
      figure {
        flex: 0 0 100%;
      }
      article {
        margin-top: 30px;
      }
    }
  }
`;
