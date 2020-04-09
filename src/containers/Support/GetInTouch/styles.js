import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  margin: 40px 0;

  > header {
    border-bottom: 1px solid ${colors.gray_4};
    padding-bottom: 30px;
    margin-bottom: 30px;
    h3 {
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
    }
    p {
      font-size: 16px;
      max-width: 600px;
      margin: 0;
    }
  }
`;
