import './Exchange.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
function Exchange({ exchangeRate }) {
  if (!exchangeRate) return 'loading';

  const [selectFromValue, setSelectFromValue] = useState(exchangeRate[0].code);
  const [selectToValue, setSelectToValue] = useState(exchangeRate[0].code);
  const [quantity, setQuantity] = useState();
  const [sum, setSum] = useState(0);
  const [alert, setAlert] = useState('');
  const [currencyCode, setCurrencyCode] = useState();

  const exchangeHandler = () => {
    if (!quantity) {
      setAlert('Enter a value');
      setSum(0);
    } else {
      setAlert('');
      const findFromValue = exchangeRate.find((item) => selectFromValue === item.code);
      const findToValue = exchangeRate.find((item) => selectToValue === item.code);
      setSum((quantity * findFromValue.mid) / findToValue.mid);
      setCurrencyCode(findToValue.code);
    }
  };

  return (
    <div className="exchange">
      <h1 className="exchange__header">CURRENCY EXCHANGE PLATFORM</h1>
      <div className="exchange__form">
        <div>
          <p className="exchange__alert">{alert}</p>
          <div>
            <p className="exchange__operationName">Amount</p>
            <input
              type="text"
              className="exchange__inputText"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <p className="exchange__operationName">From</p>
            <select
              className="exchange__select"
              onChange={(e) => {
                setSelectFromValue(e.target.value);
              }}
              selected
            >
              {exchangeRate.map((item) => (
                <option key={item.code}>{item.code}</option>
              ))}
            </select>
            <p className="exchange__operationName">To</p>
            <select
              className="exchange__select"
              onChange={(e) => {
                setSelectToValue(e.target.value);
              }}
              selected
            >
              {exchangeRate.map((item) => (
                <option key={item.code}>{item.code}</option>
              ))}
            </select>
          </div>
          <button className="exchange__btn" onClick={exchangeHandler}>
            Exchange
          </button>
        </div>
        <p className="exchange__sum">{sum === 0 ? '' : sum.toFixed(2) + currencyCode}</p>
      </div>
    </div>
  );
}

Exchange.propTypes = {
  exchangeRate: PropTypes.array
};

export default Exchange;
