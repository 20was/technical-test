import React, { FC } from 'react';
import { Stock } from '@models/Stock';
import StocksCard from './StocksCard';

interface Props {
  stock: Stock;
}

const StockCard: FC<Props> = ({ stock }): JSX.Element => {
  return (
    <div className="card" data-testid="stock-card">
      <div className="card-header">
        <div className="card-title" data-testid="stock-card-title">
          {stock.name} <span className="badge">{stock.unique_symbol}</span>
        </div>
      </div>
      <div className="card-body" data-testid="stock-card-body">
        <div className="row">
          <StocksCard scores={stock.score.data} />
        </div>
      </div>
    </div>
  );
};

export default StockCard;
