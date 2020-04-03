import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  text-align: center;
  padding: 60px 40px;

  h2 {
    font-size: 45px;
    color: ${colors.navy_blue};
  }

  ul {
    display: flex;
    max-width: 1800px;
    margin: auto;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      padding: 7px;
      flex: 0 0 9%;

      figure {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${colors.gray_4};
        width: 140px;
        height: 60px;
        margin: auto;

        img {
          display: block;
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
