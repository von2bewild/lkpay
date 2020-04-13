import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  padding: 40px 20px;

  > header {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 30px;
    padding: 0 0 20px;
    border-bottom: 1px solid ${colors.gray_4};

    h4 {
      font-size: 30px;
      font-weight: 700;
    }
    p {
      margin: 0 0 5px;
    }
  }
  > section {
    max-width: 800px;
    margin: auto;
    width: 100%;
  }
  .ant-picker {
    width: 100%;
  }
  > footer {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 30px;
    padding: 20px 0;
    border-bottom: 1px solid ${colors.gray_4};
    border-top: 1px solid ${colors.gray_4};
    p {
      margin: 0 0 5px;
    }
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

export const Button = styled.button`
  max-width: 280px;
  width: 100%;
  padding: 12px 0;
  border-radius: 4px;
  border: none;
  display: block;
  background: ${colors.navy_blue};
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 40px auto 0;
`;
