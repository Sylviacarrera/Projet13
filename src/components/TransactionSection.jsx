import PropTypes from 'prop-types';
import '../styles/TransactionSection.scss';

const TransactionSection = ({ title, amount, description }) => (
  <section className="transaction">
    <div className="transaction-content-wrapper">
      <h3 className="transaction-title">{title}</h3>
      <p className="transaction-amount">{amount}</p>
      <p className="transaction-description">{description}</p>
    </div>
    <div className="transaction-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
);

TransactionSection.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TransactionSection;
