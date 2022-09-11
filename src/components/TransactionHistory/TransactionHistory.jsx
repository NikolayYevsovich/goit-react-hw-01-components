import PropTypes from 'prop-types';
import { string } from 'prop-types';
import {
  TransactionTable,
  TransactionThead,
  TransactionTableBody,
  TransactionTableRow,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionTableRow>
      </TransactionThead>

      <TransactionTableBody>
        {items.map(item => (
          <TransactionTableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TransactionTableRow>
        ))}
      </TransactionTableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: string.isRequired,
      type: string.isRequired,
      amount: string.isRequired,
      currency: string.isRequired,
    })
  ),
};
