import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 500px;
  margin-top: 25px;
  border: 1px solid #dad8d6;
`;

export const TransactionThead = styled.thead`
  text-align: center;
  font-size: 25px;
  background-color: aquamarine;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const TransactionTableBody = styled.tbody`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 1px solid black;
`;

export const TransactionTableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #eee;
  }
`;
