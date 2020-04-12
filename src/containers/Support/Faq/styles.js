import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  ul {
    margin: 40px auto;
    max-width: 1000px;
    list-style: none;
    li {
      margin: 0 0 25px;
    }
  }
  h3 {
    font-size: 18px;
    color: ${colors.navy_blue};
  }
  p {
    font-size: 14px;
    color: ${colors.gray_2};
    margin: 0;
  }
  a {
    color: ${colors.sky_blue};

    &:hover {
      text-decoration: underline;
    }
  }
`;
