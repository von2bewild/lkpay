import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 40px;

  > section {
    max-width: 1200px;
    margin: auto;
  }
`;


export const TableWrapper = styled.div`
  margin: 40px auto;
  overflow: hidden;
  h4 {
    font-size: 18px;
    margin: 0 0 15px 0;
  }
  .country {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 10px;
    }
  }
  .ant-table-wrapper {
    width: 100%;
    overflow: auto;
    margin: 0 auto;
  }
  .ant-table-tbody > tr > td {
    background: #fff;
  }
  p {
    margin: 0;
  }
`;
