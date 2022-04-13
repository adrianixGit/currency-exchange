import './Wrapper.scss';
import Exchange from '../Exchange/Exchange';
import ExchangeRate from '../ExchangeRate/ExchangeRate';
import { useState, useEffect } from 'react';

function Wrapper() {
  const [exchangeRate, setExchangeRate] = useState(null);
  console.log(exchangeRate);
  useEffect(() => {
    console.log('render');
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/')
      .then((response) => response.json())
      .then((data) => data[0].rates)
      .then((rates) => {
        console.log(rates);
        setExchangeRate([{ currency: 'polski zloty', code: 'PLN', mid: 1 }, ...rates]);
      });
  }, []);

  return (
    <div className="wrapper ">
      <Exchange exchangeRate={exchangeRate} />
      <ExchangeRate exchangeRate={exchangeRate} />
    </div>
  );
}

export default Wrapper;
