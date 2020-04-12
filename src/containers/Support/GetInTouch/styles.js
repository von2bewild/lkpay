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
      @media (max-width: 600px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 16px;
      max-width: 600px;
      margin: 0;
    }
  }
  > section {
    max-width: 1000px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: 15px;

  .label {
    flex: 0 0 35%;
    margin: 5px 0 0 0;
    font-size: 16px;
    color: ${colors.gray_2};
  }
  > aside {
    flex: 0 0 65%;
  }
`;

export const Button = styled.div`
  max-width: 280px;
  width: 100%;
  padding: 12px 0;
  border-radius: 4px;
  background: ${colors.navy_blue};
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 40px auto 0;
`;
