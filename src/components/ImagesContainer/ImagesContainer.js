import './ImagesContainer.scss';
import currencyImg from '../../assets/img/currencies.png';
import dollarImg from '../../assets/img/dollar.png';
import euroImg from '../../assets/img/euro.png';
import moneyImg from '../../assets/img/money.png';
import transferImg from '../../assets/img/transfer.png';
function ImagesContainer() {
  return (
    <div className="imagesContainer">
      <img src={dollarImg} className="imagesContainer__dollar" />
      <img src={currencyImg} className="imagesContainer__currencies" />
      <img src={euroImg} className="imagesContainer__euro" />
      <img src={moneyImg} className="imagesContainer__money" />
      <img src={transferImg} className="imagesContainer__transfer" />
    </div>
  );
}

export default ImagesContainer;
