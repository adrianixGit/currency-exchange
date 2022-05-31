import './ExchangeRate.scss';
import PropTypes from 'prop-types';
function ExchangeRate({ exchangeRate }) {
  if (!exchangeRate) return 'loading';
  return (
    <div className="exchangeRate">
      {exchangeRate.map((item) => (
        <div key={item.code} className="exchangeRate__currency">
          <p>{item.code}</p>
          <p>{item.mid.toFixed(3)}</p>
        </div>
      ))}
    </div>
  );
}

ExchangeRate.propTypes = {
  exchangeRate: PropTypes.array
};

export default ExchangeRate;
