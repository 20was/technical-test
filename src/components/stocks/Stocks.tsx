import React, { FC } from 'react';
import StockCard from './StockCard';
import './styles/stocks.css';
import { Stock } from '../../models/Stock';
import config from '../../configs/config.json'

interface Props {
  stocks?: Stock[];
}

const Stocks: FC<Props> = ({ stocks }): JSX.Element => {

  if(!stocks?.length){
    return (
      <h3 className="error-message">{config.noDataMessage}</h3>
    )
  }
  return (
    <div className="main-section" data-testid="stocks-wrapper">
      {stocks?.map((stock: Stock) => (
        <StockCard key={stock.id} stock={stock} />
      ))}
    </div>
  );
};

export default Stocks;
