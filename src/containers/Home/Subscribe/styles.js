import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 70px 40px;
  max-width: 1300px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    height: 62px;
    width: 407px;
    border: 1px solid #707070;
    border-radius: 21px;
    overflow: hidden;
  }
  h2 {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
    color: ${colors.navy_blue};
    letter-spacing: -0.84px;
  }
  p {
    margin: 10px 0 0 0;
    font-size: 20px;
    color: ${colors.navy_blue};
  }
`;
