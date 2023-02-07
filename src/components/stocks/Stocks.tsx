import React, { FC } from 'react';
import {Stock} from '@models/Stock';
import StockCard from "./StockCard";
import './styles/stocks.css'

interface Props {
  stocks?: Stock[];
}

const Stocks: FC<Props> = ({ stocks }): JSX.Element => {
  return (
    <div className='main-section' data-testid="stocks-wrapper">
      {stocks?.map((stock: Stock) => <StockCard key={stock.id} stock={stock}/>)}
    </div>
  );
};

export default Stocks;
