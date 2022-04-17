import './Exchange.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
function Exchange({ exchangeRate }) {
  if (!exchangeRate) return 'loading';

  const [selectFromValue, setSelectFromValue] = useState(exchangeRate[0].code);
  const [selectOnValue, setSelectOnValue] = useState(exchangeRate[0].code);
  const [quantity, setQuantity] = useState();
  const [sum, setSum] = useState(0);

  const selectFromValueHandler = (e) => {
    setSelectFromValue(e.target.value);
  };

  const selectOnValueHandler = (e) => {
    setSelectOnValue(e.target.value);
  };

  const quantityValue = (e) => {
    setQuantity(e.target.value);
  };

  // Tych 3 funkcji powyżej, jeżeli nie używasz ponownie w kilku miejscach, nie ma sensu tworzyć. Lepiej po prostu zmieniać stan bezpośrednio w onChange

  const exchangeHandler = () => {
    if (!quantity) {
      alert('Enter a value');
    } else {
      // Filter do tego nie służy. Nawet bym powiedział, że bardzo brzydko jest użyty. Powinien zawsze coś zwracać. No i IFy łądniej jest zapisać w TERNARY w takim przypadku
      exchangeRate.filter((item) => {
        if (item.code === selectFromValue) {
          exchangeRate.filter((rate) => {
            if (rate.code === selectOnValue) {
              setSum((quantity * item.mid) / rate.mid);
            }
          });
        }
      });
    }
  };

  return (
    <div className="exchange">
      <h1 className="exchange__header">CURRENCY EXCHANGE PLATFORM</h1>
      <div className="exchange__form">
        <div>
          <div>
            <p>Amount</p>
            <input
              type="text"
              className="exchange__form--inputText"
              // Podziałaj w całym projekcie nad BEMem. Trochę źle go używasz
              onChange={quantityValue}
            ></input>
            {/* input SelfClosing */}
            <p>From</p>
            <select className="exchange__form--select" onChange={selectFromValueHandler} selected>
              {exchangeRate.map((item) => (
                <option key={item.code}>{item.code}</option>
              ))}
            </select>
            <p>On</p> {/* W tym przypadku bardziej "TO" a nie "ON" ;) */}
            <select className="exchange__form--select" onChange={selectOnValueHandler} selected>
              {exchangeRate.map((item) => (
                <option key={item.code}>{item.code}</option>
              ))}
            </select>
          </div>
          <button className="exchange__form--button" onClick={exchangeHandler}>
            Exchange
          </button>
        </div>
        {sum}.{}
        {/* A co to to to :D */}
      </div>
    </div>
  );
}

Exchange.propTypes = {
  exchangeRate: PropTypes.array
};

export default Exchange;
